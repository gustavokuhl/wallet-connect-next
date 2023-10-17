"use client";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useAccount } from "wagmi";

export default function Web3ConnectButton() {
  const mounted = useIsMounted();
  const { address, isConnected } = useAccount();

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <w3m-button />
    </div>
  );
}
