"use client";

import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-meme-green w-full flex flex-col items-center justify-center relative">
      <Image
        src="/footer/trading_chart.svg"
        alt="trading"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-10 -mt-28"
      />
      <div className="absolute w-[250px] h-[300px] -mt-44 z-0 inset-0">
        <Image src="/footer/bone.svg" alt="bone" layout="fill" className="" />
      </div>
      <Image
        src="/footer/tea.svg"
        alt="tea"
        width={70}
        height={150}
        className="absolute right-10 bottom-0"
      />
      <div className="absolute bottom-0 h-36 w-full">
        <Image
          src="/footer/bar-chart.svg"
          layout="fill"
          alt="chart"
          className="opacity-10"
        />
      </div>
      <div className="container relative md:py-20 py-16 flex justify-center">
        <div className="w-1/2  hidden lg:block">
          <img
            src="/footer/lucky_computer.png"
            alt="Dog with computer"
            className="w-1/2 absolute bottom-0"
          />
        </div>
        <div className="relative flex items-center md:justify-end justify-center z-10">
          <div className="text-center mt-6 px-4 max-w-[550px]">
            <h2 className="text-3xl text-white mb-6">$LUCKY</h2>
            <p className="text-white mb-4 text-lg">
              $LUCKY is a memecoin with no intrinsic value or expectation of
              financial return. Trading Cryptocurrencies is highly speculative,
              carries a level of risk and may not be suitable for all investors.
              The content on this site should not be considered investment
              advice.
            </p>
            <FooterLink />
            <div className="mt-28 text-white flex md:flex-row flex-col items-center justify-between gap-3 text-sm">
              <p>Copyright © 2024 $LUCKY - Token</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterLink = () => {
  const openExternal = (link: string) => {
    window.open(link);
  };

  return (
    <div className="flex justify-center space-x-4">
      <div
        className="cursor-pointer"
        onClick={() => openExternal("https://x.com/getlucky_dog")}
      >
        <Image src="/footer/twitter.svg" alt="twitter" width={50} height={50} />
      </div>
      <div
        className="cursor-pointer"
        onClick={() =>
          openExternal("https://www.coingecko.com/en/coins/lucky-token")
        }
      >
        <Image
          src="/footer/coingecko.svg"
          alt="coingecko"
          width={50}
          height={50}
        />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => openExternal("https://t.me/luckydogann")}
      >
        <Image
          src="/footer/telegram.svg"
          alt="telegram"
          width={50}
          height={50}
        />
      </div>
      <div className="cursor-pointer">
        <Image src="/footer/eagle.svg" alt="eagle" width={50} height={50} />
      </div>
      <div className="cursor-pointer">
        <Image src="/footer/w.svg" alt="w" width={50} height={50} />
      </div>
      <div
        className="cursor-pointer"
        onClick={() =>
          openExternal(
            "https://basescan.org/token/0x2C002ffEC41568d138Acc36f5894d6156398D539"
          )
        }
      >
        <Image src="/footer/chain.svg" alt="chain" width={50} height={50} />
      </div>
    </div>
  );
};
