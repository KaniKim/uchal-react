import ButtonCheck from "../utils/ButtonCheck";
import  formData from "../formData";
import { useState } from "react";
import ButtonRadio from "../utils/ButtonRadio";
import ButtonImage from "../utils/ImageButton";

export default function Form() {
  const [data] = useState(formData);
  const [imgBool, setImgBool] = useState(false);

  return (
    <div className="justify-center flex pt-10">
      <div className="rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Question  { data[0].id }</div>
          <p className="text-gray-700 text-base font-bold">
            { data[0].question }
          </p>
          <br />
          <p className="text-gray-700 text-base">
            { data[0].content }
          </p>
        </div>
        <div className="justify-center flex px-6 pt-4 pb-2">
          <ButtonImage setData={setImgBool}>스크린샷 업로드</ButtonImage>
        </div>
        {imgBool === true && (
          <div>
            <div className="w-[100%] my-[1%] border-[1px] border-blue"></div><div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Question  {data[1].id}</div>
              <p className="text-gray-700 text-base font-bold">
                {data[1].question}
              </p>
              <br />
              <div className="flex-col items-center flex justify-center">
                <ButtonRadio idName={"optionThrid"}>
                  {data[1].answer[0]}
                </ButtonRadio>
                <br />
                <ButtonRadio idName={"optionThrid"}>
                  {data[1].answer[1]}
                </ButtonRadio>
                <br />
                <ButtonRadio idName={"optionThrid"}>
                  {data[1].answer[2]}
                </ButtonRadio>
              </div>
            </div><div className="w-[100%] my-[1%] border-[1px] border-blue"></div><div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Question  {data[2].id}</div>
              <p className="text-gray-700 text-base font-bold">
                {data[2].question}
              </p>
              <br />
              <div className="flex-col items-center flex justify-center">
                <ButtonRadio idName="optionFourth">
                  {data[2].answer[0]}
                </ButtonRadio>
                <br />
                <ButtonRadio idName="optionFourth">
                  {data[2].answer[1]}
                </ButtonRadio>
                <br />
                <ButtonRadio idName="optionFourth">
                  {data[2].answer[2]}
                </ButtonRadio>
              </div>
            </div><div className="w-[100%] my-[1%] border-[1px] border-blue"></div><div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Question  {data[3].id}</div>
              <p className="text-gray-700 text-base font-bold">
                {data[3].question}
              </p>
              <p>
                {data[3].subQuestion}
              </p>
              <br />
              <div className="mb-3 pt-0">
                <input type="text" placeholder="의견을 적어주세요" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
              </div>
            </div><div className="w-[100%] my-[1%] border-[1px] border-blue"></div><div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Final</div>
              <p className="text-gray-700 text-base font-bold">
                {data[4].question}
              </p>
              <br />
              <div className="justify-center flex px-6 pt-4 pb-2">
                <ButtonCheck width="w-2/3">토큰 5,000원 획득하기</ButtonCheck>
              </div>
              <br />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}