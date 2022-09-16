import React from "react";
import Input from "./Input";
import "./Form.css";
import FormExtra from "./FormExtra.png";
function Form({
  FormData,
  title,
  setFormInput,
  FormInput,
  error,
  FormFunction,
}) {
  return (
    <div className="FormHolder">
      <div className="FormExtra">
        <div className="FormExtraBigText">
          <img src={FormExtra} className="formExtraImg" />
          <div className="FormBigText">
            just a chat app <br /> enjoy chatting
          </div>
        </div>
        <div className="FormExtraSmallText">
          chat with your friends and family
        </div>
      </div>
      <div className="Form">
        <b className="FormTitle">{title}</b>
        {FormData.map((data, index) => (
          <Input data={data} key={index} setFormInput={setFormInput} />
        ))}

        <button
          className="FormButton"
          onClick={() => {
            // console.log(FormFunction);
            FormFunction();
          }}
        >
          {title}
        </button>
        {error && <div className="FormError">{error}</div>}
      </div>
    </div>
  );
}

export default Form;
