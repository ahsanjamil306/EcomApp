import React from "react";

const InputField = ({
  heading,
  type,
  autoComplete,
  placeholder,
  value,
  onChange,
  id,
  name,
  ...props
}) => {
  return (
    <>
      <div  >
        <p className="font-inter font-[500] text-[#FFFFFF] ml-1 text-[11px]">
          {heading}
        </p>
        <input
          
          id={id}
          type={type}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={`bg-[#FFFFFF] w-[320px] rounded-[5px] h-[38px] mt-1 outline-none p-1 font-inter pl-2`}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputField;
