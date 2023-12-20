import ButtonCheck from "./ButtonCheck";
import PropTypes from "prop-types";

BaseModal.propTypes = {
    children: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
};

export default function BaseModal ({isModalOpen, toggleModal, children}) {
    return isModalOpen ? (
        <div 
        style={{"z-index" : "999"}}
        className="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center">
            <div 
            className="p-6 bg-white self-start mt-32 max-w-lg w-5/6">
                {children}
                <br />
                <br />
                <ButtonCheck width="w-full" acting={toggleModal}>Close</ButtonCheck>
            </div>
        </div>
    ) : null;
}