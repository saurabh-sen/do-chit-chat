import React from "react";
import Form from "../../Components/Form/Form";
import FormData from "./FormContent";
export const Login = ({
  FormInput,
  setFormInput,
  error,
  type,
  FormFunction,
}) => (
  <Form
    FormData={FormData[type]}
    FormInput={FormInput}
    title={type}
    setFormInput={setFormInput}
    error={error}
    FormFunction={FormFunction}
  />
);
