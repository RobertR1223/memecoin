export interface CardProps {
  title: string;
  desc: string;
  steps: string[];
  note?: string;
}
export const tutorialInfos: CardProps[] = [
  {
    title: "How to add Base Network to your Metamask Wallet",
    desc: "Learn how to add the Base network to your crypto wallet",
    steps: [
      "Connect to your Metamask Wallet",
      "Click on the Network dropdown menu",
      "Click Add Network",
      "Click Add Base in the list of networks.",
    ],
  },
  {
    title: "How to Bridge ETH and other Tokens to Base",
    desc: "Learn how to Bridge ETH to Base to pay for gas fees",
    steps: [
      "Visit www.superbridge.app/base",
      "Connect your web3 wallet and select which network you would like to transfer your assets from.",
      "Select the desired amount of tokens you would like to bridge.",
      "Check the transaction summary and click Deposit.",
      "Confirm the transaction and wait a few minutes for the funds to show up in your wallet.",
    ],
    note: "The Base chain requires Bridged ETH to pay for gas fees.",
  },
];
