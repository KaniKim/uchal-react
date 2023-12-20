import ButtonCheck from "../utils/ButtonCheck";
import  formData from "../formData";
import { useState } from "react";

export default function Form() {
    const [data] = useState(formData);
    return (
        <div className="justify-center flex pt-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
        </div>
        </div>
    )
}