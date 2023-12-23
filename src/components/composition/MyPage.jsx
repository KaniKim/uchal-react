import PropTypes from "prop-types";
import BaseModal from "../utils/BaseModal";
import ButtonCheck from "../utils/ButtonCheck";
import { Link } from "react-router-dom";

MyPageModal.propTypes = {
  isMyPageOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default function MyPageModal ({ toggleModal }) {

  return (
    <BaseModal toggleModal={toggleModal}>
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl font-bold">마이페이지</p>
        <img width={200} src="./person.png"></img>
        <p className="text-3xl font-bold">닉네임</p>
        <div className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-2 shadow outline-none focus:outline-none focus:ring w-full"> 보유량 : 40000 </div>
        <br/>
        <div className="w-full">
          <Link to={"/swap"}>
            <ButtonCheck width="w-full">Swap 하기</ButtonCheck>
          </Link>
        </div>
      </div>
    </BaseModal>
  );
}