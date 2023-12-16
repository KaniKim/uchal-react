import ButtonCheck from "../utils/ButtonCheck"
import PropTypes from 'prop-types';

Menu.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default function Menu({openModal}) {
    return (
        <div>
            <ul className="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-5 md:mt-0">
                <li className="text-gray-100 hover:text-indigo-400 font-bold">Home</li>
                <li className="text-gray-100 hover:text-indigo-400 font-bold">Swap</li>
                <li className="text-gray-100 hover:text-indigo-400 font-bold">Demo</li>
                <li>
                    <ButtonCheck width="md:flex" acting={openModal}>Connect Wallet</ButtonCheck>
                </li>
                <li>
                    <ButtonCheck>My Page</ButtonCheck>
                </li>
            </ul>
        </div>
    )
}