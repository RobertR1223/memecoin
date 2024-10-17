"use client";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";

const config = getDefaultConfig({
  appName: "Astra DAO",
  projectId: "7f8cb052248fb68ed79a97d91e38f795",
  chains: [base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export const WalletProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);

  const queryClient = new QueryClient();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{mounted && children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
