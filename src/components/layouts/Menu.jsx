import { Link } from "react-router-dom";
import ButtonCheck from "../utils/ButtonCheck"
import PropTypes from 'prop-types';

Menu.propTypes = {
    openModal: PropTypes.func.isRequired,
    openMyPage: PropTypes.func.isRequired,
};

export default function Menu({openModal, openMyPage}) {
    return (
        <div>
            <ul className="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-5 md:mt-0">
                <li className="text-gray-100 hover:text-indigo-400 font-bold"><Link to={"/"}>Home</Link></li>
                <li> 
                    <ButtonCheck width="md:flex" acting={openModal}>Swap</ButtonCheck></li>
                <li>
                    <ButtonCheck width="md:flex" acting={openModal}>Connect Wallet</ButtonCheck>
                </li>
                <li>
                    <ButtonCheck acting={openMyPage}>My Page</ButtonCheck>
                </li>
            </ul>
        </div>
    )
}