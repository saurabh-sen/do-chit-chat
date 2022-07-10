import React from "react";

function Input({ data, setFormInput }) {
  return (
    <input
      type={data === "Password" ? "password" : "text"}
      placeholder={data}
      className="Input"
      onChange={(e) =>
        setFormInput((prev) => {
          prev[data] = e.target.value;
          return prev;
        })
      }
    />
  );
}

export default Input;
