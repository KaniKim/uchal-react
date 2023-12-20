import ButtonCheck from "../utils/ButtonCheck";
import  formData from "../formData";
import { useState } from "react";

export default function Form() {
    const [data] = useState(formData);
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
            <ButtonCheck>스크린샷 업로드</ButtonCheck>
        </div>
        <div className="w-[100%] my-[1%] border-[1px] border-blue"></div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Question  { data[1].id }</div>
            <p className="text-gray-700 text-base font-bold">
            { data[1].question }
            </p>
            <br />
            <div className="flex-col items-center flex justify-center">
            <ButtonCheck width="w-2/3">
            { data[1].answer[0] }
            </ButtonCheck>
            <br/>
            <ButtonCheck width="w-2/3">
            { data[1].answer[1] }
            </ButtonCheck>
            <br/>
            <ButtonCheck width="w-2/3">
            { data[1].answer[2] }
            </ButtonCheck>
            </div>
        </div>
        <div className="justify-center flex px-6 pt-4 pb-2">
            <ButtonCheck>제출</ButtonCheck>
        </div>
        <div className="w-[100%] my-[1%] border-[1px] border-blue"></div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Question  { data[2].id }</div>
            <p className="text-gray-700 text-base font-bold">
            { data[2].question }
            </p>
            <br />
            <div className="flex-col items-center flex justify-center">
            <ButtonCheck width="w-2/3">
            { data[2].answer[0] }
            </ButtonCheck>
            <br/>
            <ButtonCheck width="w-2/3">
            { data[2].answer[1] }
            </ButtonCheck>
            <br/>
            <ButtonCheck width="w-2/3">
            { data[2].answer[2] }
            </ButtonCheck>
            </div>
        </div>
        <div className="justify-center flex px-6 pt-4 pb-2">
            <ButtonCheck>제출</ButtonCheck>
        </div>
        <div className="w-[100%] my-[1%] border-[1px] border-blue"></div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Question  { data[3].id }</div>
            <p className="text-gray-700 text-base font-bold">
            { data[3].question }
            </p>
            <p> 
            { data[3].subQuestion}
            </p>
            <br/>
            <div className="mb-3 pt-0">
            <input type="text" placeholder="의견을 적어주세요" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
        </div>
        <div className="w-[100%] my-[1%] border-[1px] border-blue"></div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Final</div>
            <p className="text-gray-700 text-base font-bold">
            { data[4].question }
            </p>
            <br/>
            <div className="justify-center flex px-6 pt-4 pb-2">
                <ButtonCheck width="w-2/3">토큰 5,000원 획득하기</ButtonCheck>
            </div>
            <br/>
            <div className="justify-center flex px-6 pt-4 pb-2">
                <ButtonCheck width="w-1/3">토큰 5,000원 획득하기</ButtonCheck>
            </div>
        </div>
        </div>
        </div>
    )
}