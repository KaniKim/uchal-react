import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "./Menu";
import { useState } from "react";

Nav.propTypes = {
  openMyPage: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

function Nav({openModal, openMyPage}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return ( 
    <div>
            
      <div className="w-full
                            
                         bg-black
                            px-6
                            h-2/6
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
          <button
            type="button"
            className="md:hidden bg-blue-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-blue-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <Menu openModal={openModal} openMyPage={openMyPage}/>
        </div>
                
        <div className="md:hidden">
          {showMobileMenu && <Menu openModal={openModal} openMyPage={openMyPage}/>}
        </div>
      </div>    
                
    </div>
  );
}

export default Nav;