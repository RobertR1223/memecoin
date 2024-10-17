import { getTotalPoints } from "@/services";
import { memo, useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";

type Props = {
  id: string;
  styleRotate: {
    deg: number;
    timingFunc: string;
    timeDuration: number;
  };
  prizes: number[];
  modalOpen: boolean;
};

const LuckyWheel = ({ id, styleRotate, prizes, modalOpen }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { address } = useAccount();

  const [totalScore, setTotalScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 600 });

  /**
   * function to drawl lucky wheel with canvas
   * @param prizes is list prize
   */
  const drawWheel = (prizes: number[]) => {
    const num = prizes.length;
    const rotateDeg = 360 / num / 2 + 180;
    const turnNum = 1 / num;
    const html = [];

    const ele = document.getElementById(id);
    const ulElementFirstRender = document.querySelector(".luckywheel-list");

    if (ulElementFirstRender) {
      ulElementFirstRender.remove();
    }

    if (ele) {
      const prizeItems = document.createElement("ul");
      const container = ele.querySelector(".luckywheel-container");

      if (canvasRef.current && container) {
        const ctx = canvasRef.current.getContext("2d")!;
        const centerX = canvasRef.current.width / 2;
        const centerY = canvasRef.current.height / 2;
        const radius = canvasRef.current.width - 150;

        for (let i = 0; i < num; i++) {
          ctx.save();
          ctx.beginPath();
          ctx.translate(centerX, centerY); // Center Point
          ctx.moveTo(0, 0);
          ctx.rotate((((360 / num) * i - rotateDeg) * Math.PI) / 180);
          ctx.arc(0, 0, radius, 0, (2 * Math.PI) / num, false); // Radius
          ctx.fillStyle =
            prizes[i] >= 777
              ? "#FFD700"
              : prizes[i] == 77
              ? "#9e005d"
              : "#662d91";
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = "#FFD700";
          ctx.stroke();
          ctx.restore();

          const htmlString = `<li class="luckywheel-item"><span style="transform: rotate(${
            (i + 9) * turnNum
          }turn); width: 10%; transform-origin: 50% ${
            radius >= 450 ? "300px" : "200px"
          }">${generateNum(prizes[i])}</div></span></li>`;

          html.push(htmlString);
        }
        prizeItems.className = "luckywheel-list";
        container.appendChild(prizeItems);
        prizeItems.innerHTML = html.join("");
      }
    }
  };

  const fetchTotalPoints = async (addr: string) => {
    try {
      setIsLoading(true);
      const score = await getTotalPoints(addr);
      if (score) setTotalScore(score);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth >= 1536 ? 600 : 400;
      const height = window.innerWidth >= 1536 ? 600 : 400;
      setCanvasSize({ width, height });
    };

    window.addEventListener("resize", handleResize);

    // Set initial size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = canvasSize.width;
      canvasRef.current.height = canvasSize.height;
      drawWheel(prizes);
    }
  }, [prizes, canvasSize]);

  useEffect(() => {
    async function init() {
      if (!address) return setTotalScore(0);

      await fetchTotalPoints(address);
    }
    init();
  }, [address]);

  useEffect(() => {
    async function init() {
      if (!modalOpen) return;
      if (!address) return setTotalScore(0);

      await fetchTotalPoints(address);
    }
    init();
  }, [modalOpen]);

  const generateNum = (number: number) => {
    const imageUrl =
      number === 7
        ? "/spin/7.png"
        : number > 77
        ? "/spin/b.png"
        : "/spin/a.png";
    const count = number.toString().length;
    let images = "";

    for (let i = 0; i < count; i++) {
      images += `<img src="${imageUrl}" style="margin: 0 auto" class="${
        number === 7 ? "scale-125" : ""
      } ${
        canvasSize.width === 600
          ? number === 7
            ? "w-[50px]"
            : "w-[35px]"
          : number === 7
          ? "w-[40px]"
          : "w-[22px]"
      }" />`;
    }

    return `<div class="flex items-center rotate-90">${images}</div>`;
  };

  return (
    <div className="w-[500px] h-[500px] 2xl:w-[700px] 2xl:h-[700px] flex justify-center items-center">
      <section id="luckywheel" className="luckywheel">
        <div className="w-full h-full relative">
          <div
            className="luckywheel-container font-RetroSigned w-[400px] h-[400px] 2xl:w-[600px] 2xl:h-[600px] absolute left-[40px] top-[40px]"
            style={
              styleRotate.deg !== 0
                ? {
                    transform: `rotate(${styleRotate.deg}deg)`,
                    transitionTimingFunction: styleRotate.timingFunc,
                    transitionDuration: `${styleRotate.timeDuration}s`,
                  }
                : {}
            }
          >
            <canvas
              ref={canvasRef}
              className="luckywheel-canvas z-50"
              width={canvasSize.width}
              height={canvasSize.height}
              id="canvas"
            />
          </div>
          <img
            src="/spin/wheel-back.png"
            alt="wheel-back"
            className="absolute -bottom-24 left-0 w-full z-0"
          />
          <img
            src="/spin/wheel.png"
            alt="spin-boarder"
            className="z-0 relative 2xl:w-[680px] 2xl:h-[680px] w-[480px] h-[480px]"
          />
          <div className="total-point absolute -bottom-44 text-center w-full flex items-center justify-center">
            <div className="bg-white w-1/2 p-5 rounded-xl">
              <p className="text-black text-lg font-RetroSigned">
                Total Points:{" "}
                {isLoading ? (
                  "Loading..."
                ) : (
                  <>
                    <span className="font-bold">{totalScore}</span> $LUCKY
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="luckywheel-btn z-50 relative">
          <img
            src="/spin/needle.png"
            alt="spin-needle"
            className="w-[80px] z-50"
          />
        </div>

        <div className="luckywheel-logo 2xl:w-[90px] 2xl:h-[90px] w-[60px] h-[60px] absolute flex border-4 border-[#662d91] bg-meme-yellow p-2 2xl:p-3">
          <img src="/footer/bone1.png" />
        </div>
      </section>
    </div>
  );
};

export default memo(LuckyWheel);
