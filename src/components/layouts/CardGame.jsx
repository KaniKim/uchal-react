import { Link } from "react-router-dom";
import ButtonCheck from "../utils/ButtonCheck";

export default function CardGame() {
  return (
    <div className="justify-center flex pt-10">
      <div className=" w-2/5 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <img src="./src/assets/gamevil.jpg"></img>
          <div className="w-[100%] my-[1%] border-[1px] border-blue"></div>
          <p className="font-bold text-3xl">게임빌</p>
          <br/>
          <p>게임 다운/설문 완료하면 1,000토큰</p>
          <p>참여 가능 인원 (73/500)</p>
          <br/>
          <div className="flex-col flex justify-items-center items-center">
            <Link to={"/survey"}><ButtonCheck>토큰 받기</ButtonCheck></Link>
          </div>
        </div>
      </div>
      <div className=" w-2/5 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <img src="./src/assets/fishing.png"></img>
          <div className="w-[100%] my-[1%] border-[1px] border-blue"></div>
          <p className="font-bold text-3xl">fishing</p>
          <br/>
          <p>스테이지 2/설문 완료하면 2,000 토큰</p>
          <p>토큰 참여 가능 인원 (411/500)</p>
          <br/>
          <div className="flex-col flex justify-items-center items-center">
            <Link to={"/survey"}><ButtonCheck>토큰 받기</ButtonCheck></Link>
          </div>
        </div>
      </div>
      <div className=" w-2/5 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <img src="./src/assets/summer.jpg"></img>
          <div className="w-[100%] my-[1%] border-[1px] border-blue"></div>
          <p className="font-bold text-3xl">서머너즈 워</p>
          <br/>
          <p>게임 레벨2 달성/설문 5,000 토큰</p>
          <p>토큰 참여 가능 인원 (152/500)</p>
          <br/>
          <div className="flex-col flex justify-items-center items-center">
            <Link to={"/survey"}><ButtonCheck>토큰 받기</ButtonCheck></Link>
          </div>
        </div>
      </div>
    </div>
  );
}