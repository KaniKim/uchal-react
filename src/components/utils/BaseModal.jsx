import ButtonCheck from "./ButtonCheck";
import PropTypes from "prop-types";

BaseModal.propTypes = {
    children: PropTypes.string.isRequired,
};

export default function BaseModal ({children}) {
    return (
        <div 
        className="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center">
            <div 
            className="p-6 bg-white self-start mt-32 max-w-lg w-5/6">
                { children }
                <br />
                <ButtonCheck class="w-full">Close</ButtonCheck>
            </div>
        </div>
    )
}