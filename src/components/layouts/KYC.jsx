import { useCallback, useContext, useState } from "react";
import ButtonImage from "../utils/ImageButton";
import ButtonCheck from "../utils/ButtonCheck";
import { Link, useParams } from "react-router-dom";
import { kycContext } from "../store";

export default function KycForm() {
  const [imgBool, setImgBool] = useState(false);
  const [account, setAccount] = useState(false);
  const [imgFace, setImgFace] = useState(false);
  const context = useContext(kycContext);
  const { kycId } = useParams();

  const setAccountTrue = useCallback(() => {
    setAccount(true);
  }, []);

  return (
    <div>
      { kycId === "1" && (<div className="justify-center flex pt-10">
        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">주민등록증을 찍어주세요</div>
            <p className="text-gray-700 text-base font-bold">
            영역안에 신분증이 꽉 차도록 배치 후 사진찍기를 눌러주세요.
            </p>
            <br />
          </div>
          <div className="justify-center flex px-6 pt-4 pb-2">
            <ButtonImage setData={setImgBool}>스크린샷 업로드</ButtonImage>
            
          </div>
          <div className="justify-center flex px-6 pt-4 pb-2">
            { (imgBool === true && kycId === "1") && (<Link to={"/kyc/2"}> <ButtonCheck>제출하기</ButtonCheck> </Link>)}
          </div>
        </div>
      </div>)
      }
      {(imgBool === true && kycId === "2") && (
        <div className="justify-center flex pt-10">
          <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">계좌인증</div>
              <p className="text-gray-700 text-base font-bold">
              실명인증을 위해 보유하고 있는 계좌정보를 입력해주세요.
              </p>
              <br />
              <div className="flex-col items-center flex justify-center">
                <div className="mb-3 pt-0">
                  <input type="text" placeholder="은행 선택" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                </div>
                <br />
                <div className="mb-3 pt-0">
                  <input type="text" placeholder="계좌 번호 입력" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                </div>
                <br />
                <ButtonCheck>인증번호 보내기</ButtonCheck>
                <br />
                <div className="mb-3 pt-0">
                  <input type="number" placeholder="인증번호 입력" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                </div>
                <br />
                <Link to={"/kyc/3"}><ButtonCheck acting={setAccountTrue}>인증완료</ButtonCheck></Link>
              </div>
            </div>
          </div>
        </div>)}
      {(account === true && kycId === "3") && (
        <div className="justify-center flex pt-10">
          <div className="rounded overflow-hidden shadow-lg">
            <div className="justify-center flex pt-10">
              <div className="rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4"></div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">얼굴 인증</div>
                  <p className="text-gray-700 text-base font-bold">
            영역안에 신분증이 꽉 차도록 배치 후 사진찍기를 눌러주세요.
                  </p>
                  <br />
                </div>
                <div className="justify-center flex px-6 pt-4 pb-2">
                  <ButtonImage setData={setImgFace}>사진 찍기</ButtonImage>
                </div>
                <p>가이드라인에 얼굴을 맞춰서 촬영을...</p>
                <div className="justify-center flex px-6 pt-4 pb-2">
                  { (imgFace === true && kycId === "3") && (<Link to={"/kyc/4"}> <ButtonCheck>제출하기</ButtonCheck> </Link>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      { (imgFace === true && kycId === "4") && (
        <div className="justify-center flex pt-10">
          <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">본인 인증 완료</div>
              <p className="text-gray-700 text-base font-bold">
                입력하신 KYC 인증 정보 최종 검토 후 이메일을 통해 승인 여부를...
              </p>
              <br />
              <Link to={"/"}><ButtonCheck acting={() => {context.kyc = true;}}>확인</ButtonCheck></Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}