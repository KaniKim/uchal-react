import PropTypes from "prop-types";
import BaseModal from "../utils/BaseModal";
import ButtonCheck from "../utils/ButtonCheck";

WalletModal.propTypes = {
    children: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
};

export default function WalletModal ({isModalOpen, toggleModal}) {
    return (
        <BaseModal isModalOpen={isModalOpen} toggleModal={toggleModal}>
            <ButtonCheck width="w-full flex flex-row justify-center text-3xl">
                <img width={40} src="./src/assets/xpla.png"></img>&nbsp;XPLA
            </ButtonCheck>
            <div className="w-[100%] my-[1%] border-[1px] border-blue"></div>
            <ButtonCheck width="w-full flex flex-row justify-center text-3xl">
                <img width={34} src="./src/assets/oasys.png"></img>&nbsp;OASYS
            </ButtonCheck>
        </BaseModal>
    )
}