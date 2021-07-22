import React from "react";
import { timeConverter } from "../../utils/dataFormatter";
import { CovidCasesProps } from "../../utils/interfaces";

type CasesChartProps = {
  covidCases: CovidCasesProps;
  province: string;
  lastUpdated: number;
};

function getUpdatedTime(time: number) {
  console.log("Vaccine Tables update time:" + time);
  return timeConverter(time);
}

const SummaryTable = ({
  covidCases = {
    cases: [
      {
        x: "2021-04-29",
        y: 0,
      },
    ],
    toDay: 0,
    total: 0,
    lastUpdated: 0,
  },
  province,
  lastUpdated = 0,
}: CasesChartProps) => {
  return (
    <>
      <p className=" font-bold text-lg md:text-2xl mb-2">
        Số liệu Covid-19 tại {province}
      </p>
      <p className=" text-md md:text-xl text-red-600 font-bold ">
        {" "}
        Lây nhiễm từ ngày 27.4{" "}
      </p>
      <div className="py-2 px-9  m-4 md:m-7 h-36  flex-col flex item-center justify-center  bg-white rounded-md shadow-md">
        <div className="flex space-x-7 pb-3">
          <div className="flex flex-col">
            <p className="pb-2 text-2xl md:text-3xl font-bold text-red-600 duration-100 ease-in-out">
              {covidCases.total.toLocaleString()}
            </p>
            <p className="font-normal text-sm text-center">Ca nhiễm</p>
          </div>
          <div className="flex flex-col">
            <p className="pb-2 text-2xl md:text-3xl font-bold text-red-600">
              +{covidCases.toDay.toLocaleString()}
            </p>
            <p className="text-sm font-normal text-center pl-2">Hôm nay</p>
          </div>
        </div>
        <div className="pb-1 text-xs text-red-600 animate-pulse font-bold">
          {getUpdatedTime(lastUpdated)}
        </div>
      </div>
    </>
  );
};

export default SummaryTable;
