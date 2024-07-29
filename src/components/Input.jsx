import React from "react";

const Input = ({ value = "", onChange , placeholder}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      className="py-2 px-1 placeholder:text-xs lg:placeholder:text-base lg:px-3 rounded-l-lg outline-none w-2/5 lg:w-fit"
    />
  );
};

export default Input;
