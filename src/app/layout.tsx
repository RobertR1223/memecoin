import type { Metadata } from "next";
import { Suspense, ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { WalletProviders } from "./providers";
import "./globals.css";

import { Inter, RocknRoll_One, Baloo_2 } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const rocknroll = RocknRoll_One({
  weight: ["400"],
  subsets: ["cyrillic", "latin"],
});
// Initialize the font
const baloo = Baloo_2({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lucky Meme Coin",
  description: "Lucky meme coin platform that is managing by Astra DAO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baloo.className} antialiased`}>
        <Suspense>
          <WalletProviders>
            <Header></Header>
            {children}
          </WalletProviders>
        </Suspense>
      </body>
    </html>
  );
}
