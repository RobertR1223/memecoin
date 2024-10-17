import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components";
import { GuideModal } from "./guide-modal";

export const Lucky = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="bg-[url('/buy/bg-buy.svg')] bg-no-repeat bg-center bg-cover w-full xl:aspect-[1.9] lg:aspect-[1.7] sm:aspect-[1.1] aspect-[0.5] relative"
        id="about"
      >
        <div className="absolute xl:bottom-[150px] lg:bottom-[80px] sm:bottom-[200px] bottom-[100px] xl:right-[7%] right-0 xl:w-[40%] w-full lg:max-w-[677px] xl:px-0 px-[10%] z-20">
          <div className="w-full rounded-3xl bg-white flex-col flex xl:items-start items-center py-6 px-10 relative">
            <Image
              src="/luckynomics/bone1.svg"
              width={412}
              height={412}
              alt="bone"
              className="absolute top-[10%] right-[10%] max-h-[80%] max-w-[80%]"
            ></Image>
            <div className="xl:text-[54px] xl:text-left text-center text-[32px] w-full font-bold leading-[100%]">
              Introducing $LUCKY, the luckiest dog in the world!
            </div>
            <div className="text-[18px] w-full">
              <p className="mt-5">
                Lucky, a French bulldog born on the streets of Paris, overcame
                incredible odds with his uncanny luck.
              </p>
              <p className="mt-5">
                After a series of fortunate events, he found himself living a
                life of luxury with a wealthy family. Inspired by his
                extraordinary charm and luck, they created $LUCKY, a memecoin
                symbolizing prosperity and serendipity.
              </p>
            </div>
            <Button
              className="text-base mt-5 py-4 px-7 z-10"
              variant="meme-yellow"
              onClick={() => setModalOpen(true)}
            >
              Read Lucky's Full Story
            </Button>
          </div>
        </div>
        <div className="absolute top-0"></div>
        <div className="w-full h-[5vh] bg-meme-purple"></div>
        <div className="w-full h-[5vh] bg-gradient-to-b from-meme-purple to-[rgba(42,2,68,0)]"></div>
        <div className="w-full aspect-[30] absolute bottom-0 bg-gradient-to-t from-meme-green to-[rgba(42,2,68,0)]"></div>
        <div className="flex absolute lg:bottom-[-200px] bottom-[-200px] w-full">
          <img
            src="/buy/lucky-food.svg"
            alt="lucky-food"
            className="z-10 lg:w-[70%] w-full"
          />
        </div>
      </div>

      <GuideModal
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </>
  );
};
