import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components";
import { useAccount } from "wagmi";
import { spinWheelApi, getLatestSpinTime } from "@/services";
import LuckyWheel from "./LuckyWheel";
import dayjs, { Dayjs } from "dayjs";
import { getTimeDifference } from "@/lib/utils";
import { Bungee_Shade } from "next/font/google";
import { prizes } from "@/constants";
import { WinningModal } from "./wining-modal";
import "./style.css";
import Link from "next/link";

// Initialize the font
const bungeeShade = Bungee_Shade({
  subsets: ["latin"],
  weight: "400",
});

const ID = "luckywheel";
const CURRENT_TIME_DURATION_LUCKY_WHEEL_ROTATE = 6;

export type StyleRotate = {
  deg: number;
  timingFunc: "ease-in-out" | "ease";
  timeDuration: number;
};

export const LuckySpin = () => {
  const { address } = useAccount();
  const spinningRef = useRef<HTMLAudioElement | null>(null);
  const wonRef = useRef<HTMLAudioElement | null>(null);

  const [styleRotate, setStyleRotate] = useState<StyleRotate>({
    deg: 0,
    timingFunc: "ease-in-out",
    timeDuration: 0,
  });
  const [spinning, setSpinning] = useState<boolean>(false);
  const [time, setTime] = useState<Dayjs>();
  const [indexPrizeWon, setIndexPrizeWon] = useState<number | null>(null);
  const [ipAddress, setIpAddress] = useState<string>("");
  const [lastSpinTime, setLastSpinTime] = useState<Date | null>(null);
  const [canSpin, setCanSpin] = useState<boolean>(true);
  const [countdown, setCountdown] = useState<string>("Spin now! x1");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [issue, setIssue] = useState<string>("");
  const [prize, setPrize] = useState<number>(0);

  const handleSpin = async () => {
    if (spinning || !address || !ipAddress || !canSpin || isLoading) return;
    setSpinning(true);
    if (spinningRef.current) {
      spinningRef.current.play();
    }

    setTime(dayjs());

    spinWheelApi(address as string, ipAddress)
      .then((result: number) => {
        const index = prizes.indexOf(result);
        setTimeout(async () => {
          setIndexPrizeWon(index);
          setPrize(result);

          const lTime = await getLatestSpinTime(address as string, ipAddress);
          if (lTime) setLastSpinTime(new Date(lTime));
        }, 3000);
      })
      .catch((error) => {
        console.error("Caught error:", error);
      });

    let d = styleRotate.deg;
    d = d + (360 - (d % 360)) + 360 * 10;
    setStyleRotate({
      timingFunc: "ease-in-out",
      deg: d,
      timeDuration: CURRENT_TIME_DURATION_LUCKY_WHEEL_ROTATE,
    });
  };

  const alertAfterTransitionEnd = () => {
    const ele = document.getElementById(ID);
    if (ele) {
      const container = ele.querySelector(".luckywheel-container");
      if (container) {
        container.addEventListener(
          "transitionend",
          async () => {
            setSpinning(false);
            if (spinningRef.current) {
              spinningRef.current.pause();
              spinningRef.current.currentTime = 0;
            }
            setModalOpen(true);
            if (wonRef.current) wonRef.current.play();
          },
          false
        );
      }
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setPrize(0);
    if (wonRef.current) {
      wonRef.current.pause();
      wonRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (indexPrizeWon !== null && time) {
      const timeCallApi = getTimeDifference(time, dayjs());
      let d = styleRotate.deg;
      d =
        d +
        (360 - (d % 360)) +
        (360 * 10 - indexPrizeWon * (360 / prizes.length));
      const timeRotate = CURRENT_TIME_DURATION_LUCKY_WHEEL_ROTATE - timeCallApi;
      setStyleRotate({
        deg: d,
        timingFunc: "ease",
        timeDuration: timeRotate,
      });

      alertAfterTransitionEnd();
      setIndexPrizeWon(null);
    }
  }, [indexPrizeWon]);

  useEffect(() => {
    async function init() {
      if (!address) return;

      try {
        setIsLoading(true);
        const response = await fetch("https://jsonip.com");
        const data = await response.json();
        setIpAddress(data.ip);

        const lTime = await getLatestSpinTime(address as string, data.ip);
        if (lTime) setLastSpinTime(new Date(lTime));
      } catch (e) {
        console.error(e);
        setCanSpin(false);
        setIssue("Got issue while connecting to server");
      } finally {
        setIsLoading(false);
      }
    }

    init();
  }, [address]);

  useEffect(() => {
    if (!lastSpinTime) return;

    const updateCountdown = () => {
      const now = new Date();
      const nextSpinTime = new Date(
        lastSpinTime.getTime() + 24 * 60 * 60 * 1000
      );
      const timeDiff = (nextSpinTime as any) - (now as any);

      if (timeDiff > 0) {
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);
        setCountdown(`${hours}h ${minutes}m ${seconds}s`);
        setCanSpin(false);
      } else {
        setCountdown("Spin now! x1");
        setCanSpin(true);
      }
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [lastSpinTime]);

  return (
    <div className="bg-meme-purple w-full pt-5" id="luckyspin">
      <div className="container">
        <div className="bg-spin-background pt-10 px-10 xl:pb-28 pb-10 rounded-3xl relative overflow-hidden">
          <div className="flex flex-col xl:flex-row justify-center gap-0 relative 2xl:pt-40 md:pt-44 pt-20">
            <h1
              className={`lg:text-[100px] md:text-7xl text-5xl spin-text ${bungeeShade.className}`}
            >
              $LUCKY SPIN
            </h1>
            <div className="flex flex-col items-center xl:w-1/2 w-full z-10">
              <div className=" bg-meme-yellow p-5 text-[24px] lg:w-[90%] w-full rounded-xl">
                <p>Lucky's Favorite number is 7.</p>
                <p>Spin the wheel and see how $LUCKY you are!</p>
                <p>
                  There are no losers here! Lucky always wants you to walk away
                  with something each spin.
                </p>
                <br />
                <p>
                  Lucky’s also holding{" "}
                  <Link href={"https://x.com/getlucky_dog"} target="_blank">
                    <span className="font-bold">Twitter</span>
                  </Link>{" "}
                  and{" "}
                  <Link href={"https://t.me/luckydogann"} target="_blank">
                    <span className="font-bold">Telegram</span>
                  </Link>{" "}
                  exclusive giveaways!
                </p>
                <p>Don’t forget to join his community to get more $LUCKY!</p>
              </div>
            </div>
            <div className="xl:w-1/2 w-full flex justify-center mt-10 xl:mt-0 z-10">
              <LuckyWheel
                id={ID}
                styleRotate={styleRotate}
                prizes={prizes}
                modalOpen={modalOpen}
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-8 items-end justify-items-center 2xl:-mt-44 xl:-mt-12 mt-52">
            <img
              src="/spin/spin-dog.png"
              alt="luck-dog"
              className="col-span-2 xl:block hidden"
            />
            <div className="text-center col-span-1 col-start-3">
              <Button
                variant="meme-yellow"
                className="p-5"
                onClick={() => handleSpin()}
              >
                {spinning ? (
                  "Spinning..."
                ) : (
                  <div>
                    {!canSpin && countdown != "Spin now! x1" ? (
                      <>
                        <p>Next $LUCKY Spin in</p>
                      </>
                    ) : (
                      <></>
                    )}
                    {isLoading
                      ? "Loading..."
                      : address
                      ? countdown
                      : "Connect wallet"}
                  </div>
                )}
              </Button>
            </div>
            <div className="col-span-2"></div>
          </div>
          {issue ? (
            <div className="flex justify-center">
              <p className="mt-5 text-red-600">
                {issue ? issue : "Last spin time: " + lastSpinTime}
              </p>
            </div>
          ) : (
            <></>
          )}

          <Image
            src="/luckynomics/bone1.svg"
            width={181}
            height={181}
            alt="bone"
            className="absolute right-[7%] top-[7%] z-0 rotate-45"
          />
          <Image
            src="/luckynomics/bone1.svg"
            width={181}
            height={181}
            alt="bone"
            className="absolute left-[5%] bottom-[20%] z-0"
          />
          <Image
            src="/luckynomics/bone1.svg"
            width={181}
            height={181}
            alt="bone"
            className="absolute left-[10%] top-[8%] z-0 -rotate-45"
          />
          <Image
            src="/luckynomics/bone2.svg"
            width={555}
            height={555}
            alt="bone"
            className="md:block hidden absolute lg:right-[25%] md:right-[10%] bottom-[20%] z-0"
          ></Image>
        </div>
      </div>

      <audio ref={spinningRef} src="/spin/spinning.mp3" className="hidden" />
      <audio ref={wonRef} src="/spin/won.mp3" className="hidden" />

      <WinningModal
        modalOpen={modalOpen}
        prize={prize}
        closeModal={closeModal}
      />
    </div>
  );
};
