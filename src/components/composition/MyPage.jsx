import PropTypes from "prop-types";
import BaseModal from "../utils/BaseModal";

MyPageModal.propTypes = {
  isMyPageOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default function MyPageModal ({ toggleModal }) {
  return (
    <BaseModal toggleModal={toggleModal}>
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl font-bold">마이페이지</p>
        <img width={200} src="./src/assets/person.png"></img>
        <p className="text-3xl font-bold">닉네임</p>
      </div>
    </BaseModal>
  );
}