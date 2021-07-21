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
            ? `rounded bg-white p-1 shadow-md px-6 text-sm ring-2 ring-red-500 s`
            : `rounded bg-white p-1 shadow-md px-6 text-sm shadow-sm`
        }
        onClick={() => {
          setProvince("Việt Nam");
          console.log(province);
        }}
      >
        Việt Nam
      </button>
      <button
        className={
          province == "TP.HCM"
            ? `rounded  bg-white p-1 shadow-md px-6 text-sm ring-2 ring-red-500 m`
            : `rounded bg-white p-1 shadow-md px-6 text-sm `
        }
        onClick={() => {
          setProvince("TP.HCM");
          console.log(province);
        }}
      >
        TP.HCM
      </button>
    </>
  );
};

export default ProvinceSelectionButton;
