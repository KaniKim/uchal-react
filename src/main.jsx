import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WalletProvider, getChainOptions } from '@xpla/wallet-provider'

const root = ReactDOM.createRoot(document.getElementById('root'));

getChainOptions().then((getChainOptions) => {
  
  root.render(
    <WalletProvider walletConnectChainIds={0} {...getChainOptions}>
      <App />
    </WalletProvider>
    );
  });
