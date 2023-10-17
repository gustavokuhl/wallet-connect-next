"use client";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

const projectId = "8082b388e4d5ef75d91a13b386120f64";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, sepolia];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

export default function ProviderWeb3Modal({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
