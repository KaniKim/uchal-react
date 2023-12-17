import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WalletProvider, WalletStatus, getChainOptions, useWallet } from '@xpla/wallet-provider'

const root = ReactDOM.createRoot(document.getElementById('root'));

getChainOptions().then((chainOptions) => {
  
  root.render(
      <App />
    );
  });
