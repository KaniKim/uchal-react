import { Route, Routes } from 'react-router-dom'
import Nav from './components/layouts/Navigation'
import { useCallback, useState } from 'react';
import WalletModal from './components/composition/Wallet';
import CarouselGame from './components/layouts/Carousel';
import Form from './components/layouts/Form';
import MyPageModal from './components/composition/MyPage';

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
          <Routes>
            <Route path='/' element={ <CarouselGame/> }></Route>
            <Route path="/survey" element={ <Form/> }></Route>
          </Routes>
      </div>
  )
}




export default App
