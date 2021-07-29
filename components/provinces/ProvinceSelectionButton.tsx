import React from "react";
type ButtonProps = {
  province: string;
  setProvince: (province: string) => void;
};

const ProvinceSelectionButton = ({ province, setProvince }: ButtonProps) => {
  return (
    <>
      <button
        className={
          province == "Việt Nam"
            ? `rounded-full bg-white w-1/2 p-2 shadow-md px-6
            font-bold text-sm ring-2 ring-red-500 text-red-500`
            : `rounded-full bg-white p-2 w-1/2   px-6 text-sm shadow-sm`
        }
        onClick={() => {
          setProvince("Việt Nam");
        }}
      >
        Việt Nam
      </button>
      <button
        className={
          province == "TP.HCM"
            ? `rounded-full  bg-white w-1/2  p-2 shadow-md px-6  font-bold text-red-500 text-sm ring-2 ring-red-500 m`
            : `rounded-full bg-white w-1/2  p-2 shadow-sm px-6 text-sm `
        }
        onClick={() => {
          setProvince("TP.HCM");
        }}
      >
        TP.HCM
      </button>
    </>
  );
};

export default ProvinceSelectionButton;
