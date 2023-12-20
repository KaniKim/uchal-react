import { Route, Routes } from 'react-router-dom'
import Nav from './components/layouts/Navigation'
import { useCallback, useState } from 'react';
import WalletModal from './components/composition/Wallet';
import CarouselGame from './components/layouts/Carousel';
import Form from './components/layouts/Form';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);


  return (
    <div>
          <Nav openModal={openModal}></Nav>
          <WalletModal isModalOpen={isModalOpen} toggleModal={closeModal}/>
          <Routes>
            <Route path='/' element={ CarouselGame }></Route>
            <Route path="/survey" element={ <Form/> }></Route>
          </Routes>
      </div>
  )
}




export default App
