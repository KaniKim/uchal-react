import PropTypes from "prop-types";
import BaseModal from "../utils/BaseModal";
import { useContext } from "react";
import { kycContext } from "../store";
import ButtonCheck from "../utils/ButtonCheck";
import { Link } from "react-router-dom";

MyPageModal.propTypes = {
  isMyPageOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default function MyPageModal ({ toggleModal }) {
  const context = useContext(kycContext);

  return (
    <BaseModal toggleModal={toggleModal}>
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl font-bold">마이페이지</p>
        <img width={200} src="./src/assets/person.png"></img>
        {!context.kyc && (
          <div>
            <p>Kyc를 인증해야 합니다</p>
            <Link to={"/kyc"}><ButtonCheck>Kyc 인증하기</ButtonCheck></Link>
          </div>
        )}
        <p className="text-3xl font-bold">닉네임</p>
      </div>
    </BaseModal>
  );
}