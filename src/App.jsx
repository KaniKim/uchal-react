import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/layouts/Navigation'
import BaseModal from './components/utils/BaseModal'
import { useState } from 'react';

function App() {

  const [state, setState] = useState(false);

  const showModal = () => {
    setState(true);
  }

  return (
    <div>
      <BrowserRouter>
        <Nav showModal={showModal} />
        {state ? <BaseModal /> : null}
        <Routes>
          <Route path='/'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
