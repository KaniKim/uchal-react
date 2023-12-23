import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WalletProvider, getChainOptions } from "@xpla/wallet-provider";
import { BrowserRouter } from "react-router-dom";
import { kycContext } from "./components/store.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

getChainOptions().then((getChainOptions) => {
  
  root.render(
    <BrowserRouter basename={"https://kanikim.github.io/uchal-react/"}>
      <kycContext.Provider value={{ kyc: false}}>
        <WalletProvider {...getChainOptions}>
          <App />
        </WalletProvider>
      </kycContext.Provider>
    </BrowserRouter>
  );
});
