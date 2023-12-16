import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/layouts/Navigation'
import { useCallback, useEffect, useState } from 'react';
import BaseModal from './components/utils/BaseModal';

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
      <BrowserRouter>
          <Nav openModal={openModal}></Nav>
          <BaseModal isModalOpen={isModalOpen} toggleModal={closeModal}>
          <h2>Hello, I'm a modal!</h2>
          </BaseModal>
        <Routes>
          <Route path='/'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}




export default App
