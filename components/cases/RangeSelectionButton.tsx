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
            ? `rounded-full w-full p-1 px-3
            font-bold text-sm ring-2 ring-red-500 text-red-500`
            : `rounded-full bg-white border-2 p-1 w-full px-3 text-sm `
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
