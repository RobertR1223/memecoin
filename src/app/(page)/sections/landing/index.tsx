import Image from "next/image";

export const Landing = () => {
  return (
    <div className="bg-[url('/landing/casino.svg')] bg-no-repeat bg-center bg-cover w-full xl:aspect-[3/2] lg:aspect-[5/4] md:aspect-[3/4] sm:aspect-[2/3] relative">
      <div className="w-full sm:aspect-[3/2] flex flex-col items-center justify-center gap-5">
        <Image
          src="/landing/lucky&slot.svg"
          alt="dog and slot machine"
          width={500}
          height={400}
          className="w-[36%] aspect-square sm:absolute sm:block hidden bottom-[13%]"
        ></Image>
        <Image
          src="landing/cloud.svg"
          alt="cloud"
          width={416}
          height={156}
          className="sm:absolute top-[10%] left-[20%] w-[20%] h-[13%]"
        ></Image>
        <div className="bg-meme-yellow rounded-3xl 2xl:w-[491px] xl:w-[450px] md:w-[35%] w-[80%] sm:absolute sm:mt-0 mt-[100px] xl:bottom-[36%] lg:bottom-[32%] bottom-[25%] md:right-[63%] right-[10%] p-6">
          <div className="xl:text-[45px] lg:text-[32px] text-[30px] 2xl:text-left text-center">
            What is $LUCKY?
          </div>
          <div className="text-lg">
            <p>
              $LUCKY&rsquo;s bringing the good boy luck to the crypto block!
            </p>
            <p className="mt-2">
              $LUCKY is more than just a French Bulldog. He&rsquo;s your
              four-legged friend fetching the hottest crypto trends.
            </p>
            <p className="mt-2">
              He embodies fun, community spirit, and good fortune, bringing all
              the goodest bois and girls of the cryptoverse together.
            </p>
            <p className="mt-2">
              $LUCKY&rsquo;s the ultimate lucky charm in the crypto world!
            </p>
          </div>
        </div>

        <div className="2xl:w-[526px] xl:w-[470px] lg:w-[380px] md:w-[280px] w-[80%] sm:absolute lg:top-[55%] md:top-[68%] top-[550px] md:left-[62%] left-[10%]">
          <div className="rounded-3xl  relative inline-block bg-meme-yellow p-6">
            <p className="lg:text-[26px] text-[18px]">
              $LUCKY is available for presale on the Astra DAO Launchpad in
              00:00:00
            </p>
            <div className="md:block hidden absolute left-[-50px] top-[50%] transform -translate-y-1/2 border-[30px] border-transparent border-r-meme-yellow" />
          </div>
        </div>
        <div className="w-full sm:absolute bottom-0">
          <div className="w-full h-[50px] bg-gradient-to-t from-meme-purple to-[rgba(42,2,68,0)]" />
          <div className="w-full h-[135px] bg-meme-purple" />
          {/* <div className="w-full bg-meme-purple ">
            <div className="container xl:flex items-center 2xl:justify-between md:justify-around justify-between flex-wrap p-0 gap-6 grid sm:grid-cols-3 grid-cols-1 ">
              <div className="flex justify-center">
                <Image
                  src="/landing/gateio.svg"
                  alt="gate.io"
                  width={218.15}
                  height={50}
                ></Image>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/landing/bitmart.svg"
                  alt="BitMart"
                  width={208}
                  height={60}
                ></Image>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/landing/OKX.svg"
                  alt="OKX"
                  width={117}
                  height={36}
                ></Image>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/landing/bingx.svg"
                  alt="BingX"
                  width={174}
                  height={50}
                ></Image>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/landing/bitget.svg"
                  alt="Bitget"
                  width={166}
                  height={50}
                ></Image>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/landing/xt.svg"
                  alt="XT"
                  width={210}
                  height={60}
                ></Image>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
