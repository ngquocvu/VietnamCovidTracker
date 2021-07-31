import React from "react";
import { RangeType } from "../../utils/interfaces";
type ButtonProps = {
  range: string;
  setRange: (range: RangeType) => void;
  name: string;
  value: RangeType;
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
            ? `rounded-full w-full p-2 px-6
            font-bold text-sm ring-2 ring-red-500 text-red-500`
            : `rounded-full bg-white border-2 p-2 w-full px-6 text-sm `
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
