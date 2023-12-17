import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/layouts/Navigation'
import { useCallback, useState } from 'react';
import WalletModal from './components/composition/Wallet';
import { WalletProvider } from '@xpla/wallet-provider';

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
          <WalletProvider walletConnectChainIds={0}>
          <Nav openModal={openModal}></Nav>
          <WalletModal isModalOpen={isModalOpen} toggleModal={closeModal}/>
          </WalletProvider>
          <Routes>
          <Route path='/'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}




export default App
