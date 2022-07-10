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
            Get exclusive access <br /> to the Colabs Systems
          </div>
        </div>
        <div className="FormExtraSmallText">
          Colabs is a coming-of-age task management platform that you can design
          like your own office when you work with teams. While it is true that
          you cannot change the people that you will ultimately work with, you
          can try to make the management part a bit more interesting.
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
            console.log(FormFunction);
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
