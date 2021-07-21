import React from "react";
import { CovidCasesProps } from "../utils/interfaces";

type CasesChartProps = {
  covidCases: CovidCasesProps;
  province: string;
};

const SummaryTable = ({ covidCases, province }: CasesChartProps) => {
  return (
    <>
      <p className=" font-bold text-lg">Số liệu Covid-19 tại {province}</p>
      <p className="text-sm text-red-600 font-bold ">
        {" "}
        Lây nhiễm từ ngày 27.4{" "}
      </p>
      <div className="py-3 px-7 border m-4  bg-white rounded-md shadow-sm">
        <div className="flex space-x-7 pb-3">
          <div className="flex flex-col">
            <p className="pb-2 text-2xl font-bold text-red-600 duration-100 ease-in-out">
              {covidCases?.total.toLocaleString()}
            </p>
            <p className="font-normal text-sm text-center">Ca nhiễm</p>
          </div>
          <div className="flex flex-col">
            <p className="pb-2 text-2xl font-bold text-red-600">
              {covidCases?.toDay.toLocaleString()}
            </p>
            <p className="text-sm font-normal text-center">Hôm nay</p>
          </div>
        </div>
        <div className="pb-1 text-xs text-red-600 animate-pulse font-bold">
          Cập nhật:{" "}
          {new Date().getDate() +
            "/" +
            (Number(new Date().getMonth()) + 1) +
            "/" +
            new Date().getFullYear()}
        </div>
      </div>
    </>
  );
};

export default SummaryTable;
