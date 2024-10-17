import Image from "next/image";
import { CircularProgress } from "@/components/memecoin";

export const Lucknomics = () => {
  return (
    <div className="bg-meme-green w-full">
      <div className="container aspect-[1.9] pt-72" id="tokenomics">
        <div className="rounded-[34px] w-full bg-meme-yellow xl:py-[80px] py-5 2xl:px-[120px] xl:px-[50px] px-8 relative">
          <div className="text-black text-[54px] text-center w-full break-words font-bold">
            $LUCKYNOMICS
          </div>
          <div className="text-black text-[32px] text-center w-full mb-10 font-bold">
            7,777,777,777
          </div>
          <div className="flex w-full xl:flex-row flex-col">
            <div className="flex flex-col items-center justify-center xl:w-1/3">
              <div className="min-w-[257px] text-nowrap">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-meme-red border-white border-2"></div>
                  <span className="text-[60px] border-white text-meme-red drop-shadow-[2px_2px_0_#000]">
                    20.00%
                  </span>
                </div>
                <div className="text-[24px]">Early Contributors</div>
              </div>
              <div className="min-w-[257px] text-nowrap">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-meme-orange border-white border-2"></div>
                  <span className="text-[60px] border-white text-meme-orange drop-shadow-[2px_2px_0_#000]">
                    07.00%
                  </span>
                </div>
                <div className="text-[24px]">Airdrops</div>
              </div>
            </div>
            <div className="xl:order-none order-first flex-1 flex justify-center xl:w-1/3">
              <div className="relative flex items-center justify-center">
                <div>
                  <CircularProgress
                    size={406}
                    strokeWidth={41}
                    percentage={100}
                    color="text-meme-orange"
                  />
                </div>
                <div className="absolute top-0 left-0">
                  <CircularProgress
                    size={406}
                    strokeWidth={41}
                    percentage={95}
                    color="text-meme-red"
                  />
                </div>
                <div className="absolute top-0 left-0">
                  <CircularProgress
                    size={406}
                    strokeWidth={41}
                    percentage={75}
                    color="text-meme-green"
                  />
                </div>
                <div className="absolute top-0 left-0">
                  <CircularProgress
                    size={406}
                    strokeWidth={41}
                    percentage={55}
                    color="text-meme-blue"
                  />
                </div>
                <div className="absolute top-0 left-0">
                  <CircularProgress
                    size={406}
                    strokeWidth={41}
                    percentage={30}
                    color="text-meme-light-purple"
                  />
                </div>
                <div>
                  <Image
                    src="/luckynomics/lucky.svg"
                    alt="Circular"
                    className="absolute top-[10%] left-[10%] w-[80%] h-[80%]"
                    width={406}
                    height={406}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center xl:w-1/3">
              <div className="min-w-[257px] text-nowrap">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-meme-light-purple border-white border-2"></div>
                  <span className="text-[60px] border-white text-meme-light-purple drop-shadow-[2px_2px_0_#000]">
                    30.00%
                  </span>
                </div>
                <div className="text-[24px]">Presale (Launchpad)</div>
              </div>
              <div className="min-w-[257px] text-nowrap">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-meme-orange border-white border-2"></div>
                  <span className="text-[60px] border-white text-meme-orange drop-shadow-[2px_2px_0_#000]">
                    23.00%
                  </span>
                </div>
                <div className="text-[24px]">Exchanges and Liquidity</div>
              </div>
              <div className="min-w-[257px] text-nowrap">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-meme-green border-white border-2"></div>
                  <span className="text-[60px] border-white text-meme-green drop-shadow-[2px_2px_0_#000]">
                    20.00%
                  </span>
                </div>
                <div className="text-[24px]">Treasury & Marketing</div>
              </div>
            </div>
          </div>
          <Image
            src="/luckynomics/bone1.svg"
            width={181}
            height={181}
            alt="bone"
            className="absolute left-[10%] top-[10%]"
          ></Image>
          <Image
            src="/luckynomics/bone2.svg"
            width={555}
            height={555}
            alt="bone"
            className="md:block hidden absolute right-[20%] bottom-[20%]"
          ></Image>
        </div>
      </div>
    </div>
  );
};
