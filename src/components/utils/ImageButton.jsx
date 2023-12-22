import PropTypes from "prop-types";
import { useState } from "react";

ButtonImage.propTypes = {
  setData: PropTypes.func.isRequired
};

export default function ButtonImage(props) {
  const [uploadImgUrl, setUploadImgUrl] = useState("");

  const onChangeImageUpload = (e) => {
    const {files} = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(uploadFile);
  
    reader.onload = () => {
      setUploadImgUrl(reader.result);
    };

    props.setData(true);
  
  };

  return (
    <div className="justify-center flex flex-col items-center">
      <img className={"w-1/3"} src={uploadImgUrl}></img>
      <input type="file" accept="image/*" 
        onChange={onChangeImageUpload} 
        className={"text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50hover:file:text-amber-700"}>        
      </input>
    </div>
  );
}