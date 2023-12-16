import { Link } from "react-router-dom";
import ButtonCheck from "../utils/ButtonCheck";
import PropTypes from 'prop-types';

Nav.propTypes = {
    openModal: PropTypes.func.isRequired,
};

function Nav({openModal}) {
    return ( 
        <div>
            <div className="w-full
                         bg-blue-300
                            px-6
                            h-14
                            py-8
                            md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link 
                        className="text-xl
                        font-bold
                        text-gray-100
                        md:text-2xl
                        hover:text-indigo-400"
                        to={"/"}>
                            GAME FORMS
                        </Link>
                </div>
                <ul className="flex-col
                    mt-8
                    space-y-4
                    md:flex md:space-y-0 md:flex-row md:items-center md:space-x-5 md:mt-0">
                    <li className="text-gray-100 hover:text-indigo-400 font-bold">Home</li>
                    <li className="text-gray-100 hover:text-indigo-400 font-bold">Swap</li>
                    <li className="text-gray-100 hover:text-indigo-400 font-bold">Demo</li>
                    <ButtonCheck acting={openModal}>Connect Wallet</ButtonCheck>
                    <ButtonCheck>My Page</ButtonCheck>
                </ul>
            </div>        
        </div>
    )
}

export default Nav;