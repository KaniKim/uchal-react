import PropTypes from "prop-types";
import BaseModal from "../utils/BaseModal";
import ButtonCheck from "../utils/ButtonCheck";
import { ConnectType, WalletStatus, useWallet } from "@xpla/wallet-provider";
import Web3 from "web3";

WalletModal.propTypes = {
    children: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
};
const accounts =  await window.ethereum.request({ method: 'eth_accounts' });

export default function WalletModal ({isModalOpen, toggleModal}) {
    const oasysId = 248;
    async function disconnectOasys() {
        await window.ethereum.request({
            method: "wallet_requestPermissions",
            params: [
              {
                eth_accounts: {}
              }
            ]
          });
    }


    async function checkOasys() {
        if (window.ethereum.networkVersion !== oasysId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(oasysId) }]
                  });
            } catch (err) {
                if(err.code === 4902) {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                      {
                        chainName: 'Oasys',
                        chainId:  Web3.utils.toHex(oasysId),
                        nativeCurrency: { name: 'OASYS', decimals: 18, symbol: 'OAS' },
                        rpcUrls: ['https://rpc.mainnet.oasys.games/']
                      }
                    ],
                    
                  });
            }
        }
    }
    }

    const {
        status,
        connect,
        disconnect,
      } = useWallet();
      console.log(window.ethereum.isConnected())
    return (
        <BaseModal isModalOpen={isModalOpen} toggleModal={toggleModal}>
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
        <button className="w-full flex flex-row justify-center text-3xl justify bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => disconnect()}>
            Disconnect XPLA&nbsp;<img width={40} src="./src/assets/xpla.png"></img></button>
      )}
            <div className="w-[100%] my-[1%] border-[1px] border-blue"></div>
        {!window.ethereum.isConnected() && (
                <ButtonCheck width="w-full flex flex-row justify-center text-3xl" acting={checkOasys}>
                    <img width={34} src="./src/assets/oasys.png"></img>&nbsp;OASYS
                </ButtonCheck>
                )
            }
        {
           window.ethereum.isConnected() && (
                <ButtonCheck width="w-full flex flex-row justify-center text-3xl" acting={disconnectOasys}>
                   Disconnect OASYS &nbsp; <img width={34} src="./src/assets/oasys.png"></img>
                </ButtonCheck>
                )
        }
        </BaseModal>
    )
    
}