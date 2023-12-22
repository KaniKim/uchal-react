import { useContext, useState } from "react";
import ButtonImage from "../utils/ImageButton";
import ButtonCheck from "../utils/ButtonCheck";
import { Link } from "react-router-dom";
import { kycContext } from "../store";

export default function KycForm() {
  const [imgBool, setImgBool] = useState(false);
  const [imgFace, setImgFace] = useState(false);
  const context = useContext(kycContext);

  return (
    <div className="justify-center flex pt-10">
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
        {imgBool === true && (
          <div>
            <div className="w-[100%] my-[1%] border-[1px] border-blue"></div><div className="px-6 py-4">
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
                  <input type=" number" placeholder="인증번호 입력" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                </div>
                <br />
                <ButtonCheck acting={() => this.context}>인증완료</ButtonCheck>
              </div>
            </div>
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
            { imgFace === true && (
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">본인 인증 완료</div>
                <p className="text-gray-700 text-base font-bold">
                입력하신 KYC 인증 정보 최종 검토 후 이메일을 통해 승인 여부를...
                </p>
                <br />
                <Link to={"/"}><ButtonCheck acting={() => {context.kyc = true;}}>확인</ButtonCheck></Link>
              </div>
            ) 
            }
          </div>
        )}
      </div>
    </div>
  );
}