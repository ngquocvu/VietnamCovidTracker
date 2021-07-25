import React from "react";
import { timeConverter } from "../../utils/dataFormatter";
import { CovidCasesProps } from "../../utils/interfaces";

type CasesChartProps = {
  covidCases: CovidCasesProps;
  province: string;
  lastUpdated: number;
};

function getUpdatedTime(time: number) {
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
      <p className=" font-bold text-2xl md:text-4xl mb-2">
        Số liệu Covid-19 tại Việt Nam
      </p>
      <p className=" text-md md:text-xl text-red-600">
        Đợt bùng phát dịch từ ngày 27/4
      </p>

      <div className="py-6 px-9  m-4 md:m-7 flex-col flex item-center justify-center  bg-white rounded-md shadow-md">
        <div className="flex space-x-7 pb-3">
          <div className="flex flex-col">
            <p className="pb-2 relative text-3xl md:text-4xl font-bold text-gray-600 duration-100 ease-in-out">
              {covidCases.total.toLocaleString()}
            </p>
            <p className=" bg-gray-200 p-1 text-gray-600 rounded-md font-semibold text-sm text-center">
              Ca nhiễm
            </p>
          </div>
          <div className="flex flex-col">
            <p className="pb-2 text-3xl md:text-4xl font-bold text-red-500">
              +{covidCases.toDay.toLocaleString()}
            </p>
            <p className="text-sm bg-red-100  text-red-500 font-semibold text-center p-1 rounded-md">
              Hôm nay
            </p>
          </div>
        </div>
        <p className="pt-2 text-sm font-semibold text-gray-600 ">
          {getUpdatedTime(lastUpdated)}
        </p>
      </div>
    </>
  );
};

export default SummaryTable;
