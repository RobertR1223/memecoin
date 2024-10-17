import { Button } from "@/components/ui";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export const NavConnect = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    type="button"
                    variant="meme-yellow"
                    className="py-4 px-6"
                  >
                    CONNECT WALLET
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    type="button"
                    variant="meme-red-outline"
                    className="py-4 px-6 text-meme-red"
                  >
                    Wrong network
                  </Button>
                );
              }
              return (
                <div className="flex gap-2">
                  <Button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    variant="meme-yellow"
                    className="py-4 px-6"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            width={20}
                            height={20}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </Button>
                  <Button
                    onClick={openAccountModal}
                    type="button"
                    variant="meme-yellow"
                    className="py-4 px-6"
                  >
                    {account.displayName}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
