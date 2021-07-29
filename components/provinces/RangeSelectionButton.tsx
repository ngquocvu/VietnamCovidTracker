import React from "react";
type ButtonProps = {
  range: string;
  setRange: (province: string) => void;
  name: string;
  value: string;
};

const RangeSelectionButton = ({
  range,
  setRange,
  name,
  value,
}: ButtonProps) => {
  return (
    <>
      <button
        className={
          range == value
            ? `rounded-full bg-white w-full p-2 shadow-md px-6
            font-bold text-sm ring-2 ring-red-500 text-red-500`
            : `rounded-full bg-white p-2 w-full px-6 text-sm shadow-sm`
        }
        onClick={() => {
          setRange(value);
        }}
      >
        {name}
      </button>
    </>
  );
};

export default RangeSelectionButton;
