import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WalletProvider, getChainOptions } from "@xpla/wallet-provider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

getChainOptions().then((getChainOptions) => {
  
  root.render(
    <BrowserRouter>
      <WalletProvider walletConnectChainIds={0} {...getChainOptions}>
        <App />
      </WalletProvider>
    </BrowserRouter>
  );
});
