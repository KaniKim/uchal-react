import { Route, Routes } from "react-router-dom";
import Nav from "./components/layouts/Navigation";
import { useCallback, useState } from "react";
import WalletModal from "./components/composition/Wallet";
import Form from "./components/layouts/Form";
import MyPageModal from "./components/composition/MyPage";
import Swap from "./components/layouts/Swap";
import CardGame from "./components/layouts/CardGame";
import KycForm from "./components/layouts/KYC";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMyPageOpen, setMyPageOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const openMyPage = useCallback(() => {
    setMyPageOpen(true);
  }, []);

  const closeMyPage = useCallback(() => {
    setMyPageOpen(false);
  }, []);


  return (
    <div>
      <Nav openModal={openModal} openMyPage={openMyPage}></Nav>
      { (isModalOpen && !isMyPageOpen) && (<WalletModal toggleModal={closeModal}/>)}
      { (isMyPageOpen && !isModalOpen) && (<MyPageModal toggleModal={closeMyPage}/>)}
      <br/>
      <p className="font-bold text-3xl px-3">게임 간단 설문 완료하고, 토큰 얻어가세요!</p>
      <Routes>
        <Route path='/' element={ <CardGame/> }></Route>
        <Route path="/survey" element={ <Form/> }></Route>
        <Route path="/swap" element={ <Swap/>}></Route>
        <Route path="/kyc/:kycId" element={<KycForm/>}></Route>
      </Routes>
    </div>
  );
}




export default App;
