import Image from "next/image";
import Link from "next/link";

export const MemeCoinLogo = () => {
  return (
    <Link href="/" scroll={false}>
      <div className="flex items-center gap-4 text-white hover:text-yellow-400 transition duration-200">
        <Image
          src="/header/luckyLogo.png"
          alt="Memecoin Logo"
          width={62}
          height={62}
          className="rounded-full"
        />
        <div className="text-[28px]">$LUCKY</div>
      </div>
    </Link>
  );
};
