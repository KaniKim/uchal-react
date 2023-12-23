import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WalletProvider, getChainOptions } from "@xpla/wallet-provider";
import { HashRouter } from "react-router-dom";
import { kycContext } from "./components/store.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

getChainOptions().then((getChainOptions) => {
  
  root.render(
    <HashRouter>
      <kycContext.Provider value={{ kyc: false}}>
        <WalletProvider {...getChainOptions}>
          <App />
        </WalletProvider>
      </kycContext.Provider>
    </HashRouter>
  );
});
