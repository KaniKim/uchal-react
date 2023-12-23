import { Link } from "react-router-dom";
import ButtonCheck from "../utils/ButtonCheck";
import { useContext } from "react";
import { kycContext } from "../store";

export default function Swap() {
  const { kyc } = useContext(kycContext);

  return (
    <div>
      <div className="justify-center flex pt-10 ">
        <div className="rounded overflow-hidden w-2/3 shadow-lg">
          <div className="px-6 py-4 flex-col justify-center flex items-center">
            <div className="font-bold text-3xl mb-2">스왑하기</div>
            <br/>
            <p>Gameforms Token</p>
            <div className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-2 shadow outline-none focus:outline-none focus:ring w-full"> 보유량 : 40000 </div>
            <br/>
            <input type="number" placeholder="교환량" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-2 shadow outline-none focus:outline-none focus:ring w-full"></input>
          </div>
          <div>
            <input name="coin" className="mx-7" type="radio"></input><label>Oasys</label>
            <br />
            <input name="coin" className="mx-7" type="radio"></input><label>Xpla</label>
          </div>
          {!kyc && (
            <div className="px-6 py-4 flex-col justify-center flex items-center w-full">
              <br/>
              <p>kyc를 인증해야 합니다</p>
              <br/>
              <ButtonCheck className="w-full"><Link to={"/kyc/1"}>kyc 인증하기</Link></ButtonCheck>
            </div>
          )}
          <div className="px-6 py-4 flex-col justify-center flex items-center">
            <ButtonCheck width="w-2/3">교환하기</ButtonCheck>
          </div>
          <div className="w-[100%] my-[1%] border-[1px] border-blue"></div>
          <div className="px-6 py-4 flex-col justify-center flex items-center text-purple-500">
            <Link to={"/"}>홈으로 돌아가기</Link>
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
}