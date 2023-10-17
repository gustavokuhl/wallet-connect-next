import ProviderWeb3Modal from "./ProviderWeb3Modal";
import Web3ConnectButton from "./Web3ConnectButton";

export default function Home() {
  return (
    <ProviderWeb3Modal>
      <div className="flex justify-center items-center w-full h-screen dark:bg-zinc-800">
        <Web3ConnectButton />
      </div>
    </ProviderWeb3Modal>
  );
}
