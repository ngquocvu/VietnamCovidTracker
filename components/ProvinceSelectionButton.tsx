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
            ? `rounded bg-white p-1 shadow-mg px-4 text-sm ring-2 ring-red-500 shadow-sm`
            : `rounded bg-white p-1 shadow-mg px-4 text-sm shadow-sm`
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
            ? `rounded  bg-white p-1 shadow-mg px-4 text-sm ring-2 ring-red-500 shadow-sm`
            : `rounded bg-white p-1 shadow-mg px-4 text-sm shadow-sm`
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
