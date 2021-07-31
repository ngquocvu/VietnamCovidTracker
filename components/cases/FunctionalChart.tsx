import React, { useState } from "react";
import { RangeType } from "../../utils/interfaces";
import Graph from "./Graph";
import RangeSelectionButton from "./RangeSelectionButton";

const FunctionalChart = ({ covidCases, name, type }): JSX.Element => {
  const [range, setRange] = useState<RangeType>("all");
  return (
    <>
      <div className="bg-white items-center pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
        <div className="text-lg pb-2  font-bold">{name}</div>
        {covidCases.lastUpdated !== 0 ? (
          <Graph covidCases={covidCases} type={type} range={range} />
        ) : (
          <div className="p-4">
            <div className="bg-gray-200 h-60 md:h-72 animate-pulse rounded-md"></div>
          </div>
        )}
        <div className="flex space-x-4 rounded-lg bg-gray-50 items-center justify-center p-4">
          <RangeSelectionButton
            range={range}
            setRange={setRange}
            name="Tuần"
            value="week"
          />
          <RangeSelectionButton
            range={range}
            setRange={setRange}
            name="Tháng"
            value="month"
          />
          <RangeSelectionButton
            range={range}
            setRange={setRange}
            name="Tất cả "
            value="all"
          />
        </div>
      </div>
    </>
  );
};
export default FunctionalChart;
