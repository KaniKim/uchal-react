import { ConnectType, useWallet, WalletStatus } from "@xpla/wallet-provider";
export default function Connect() {
  const {
    status,
    connect,
    disconnect,
  } = useWallet();
  return (
    <>
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <>
            <button
              className="w-full flex flex-row justify-center text-3xl justify bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => connect(ConnectType.EXTENSION)}
              type="button"
            >
              <img width={40} src="./src/assets/xpla.png"></img>&nbsp;XPLA
            </button>
        </>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <button onClick={() => disconnect()}>Disconnect</button>
      )}
    </>
  );
}