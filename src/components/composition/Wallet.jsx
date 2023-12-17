import PropTypes from "prop-types";
import BaseModal from "../utils/BaseModal";
import ButtonCheck from "../utils/ButtonCheck";
import { ConnectType, WalletStatus, useWallet } from "@xpla/wallet-provider";

WalletModal.propTypes = {
    children: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
};

export default function WalletModal ({isModalOpen, toggleModal}) {
    const {
        status,
        connect,
        disconnect,
      } = useWallet();
      console.log(status)
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
            <ButtonCheck width="w-full flex flex-row justify-center text-3xl">
                <img width={34} src="./src/assets/oasys.png"></img>&nbsp;OASYS
            </ButtonCheck>
        </BaseModal>
    )
}