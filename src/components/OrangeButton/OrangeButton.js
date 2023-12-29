import React from "react";

const OrangeButton = ({ ButtonTitle, onClick, ...props }) => {
  return (
    <>
      <div
        className={`bg-[#FF5E19] w-[320px] rounded-sm cursor-pointer h-[38px] mt-1 outline-none p-1 font-inter flex justify-center items-center font-[600] text-white text-[16px] tracking-wider`}
        onClick={onClick}
        {...props}
      >
        {ButtonTitle}
      </div>
    </>
  );
};

export default OrangeButton;
