import React from "react";
import { VaccineDataProps } from "../../utils/interfaces";
type ChartsVProps = {
  vaccineDataVN: VaccineDataProps;
};
const VaccineCharts = ({
  vaccineDataVN = {
    firstRatio: 0,
    secondRatio: 0,
    first: {
      datas: [{ x: 0, y: 0, z: 0 }],
      lastUpdated: 0,
      toDay: 0,
      total: 0,
    },
    second: {
      datas: [{ x: 0, y: 0, z: 0 }],
      lastUpdated: 0,
      toDay: 0,
      total: 0,
    },
  },
}: ChartsVProps) => {
  return (
    <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full shadow-md rounded-xl  ">
      <div className="w-full  sm:w-1/3 h-20 md:h-24 rounded-t-lg  sm:rounded-t-none  sm:rounded-tl-md    shadow bg-white dark:bg-gray-800 dark:bg-gray-800 item-center justify-center flex-col flex ">
        <div className="font-bold text-green-500  text-sm md:text-sm md:text-md text-green-700 ">
          Tổng người đã tiêm
        </div>
        <div className=" text-2xl md:text-2xl md:text-3xl font-bold text-green-500 dark:text-green-300">
          {(
            Number(vaccineDataVN.first.total) +
            Number(vaccineDataVN.second.total)
          ).toLocaleString()}
        </div>
      </div>
      <div className="w-full sm:w-1/3  h-20  md:h-24  shadow bg-white dark:bg-gray-800 dark:bg-gray-800 item-center justify-center flex-col flex">
        <div className="font-bold  text-gray-700 dark:text-gray-400 text-sm md:text-md">
          Đã tiêm 1 mũi
        </div>
        <div className=" text-2xl md:text-3xl dark:text-gray-200 font-bold">
          {vaccineDataVN.first.total.toLocaleString()}
        </div>
      </div>
      <div className="w-full  sm:w-1/3 h-20 dark:text-gray-200 md:h-24 shadow bg-white dark:bg-gray-800 dark:bg-gray-800 item-center justify-center flex-col flex  sm:rounded-tr-md">
        <div className="font-bold text-sm md:text-md dark:text-gray-400">
          Đã tiêm 2 mũi
        </div>
        <div className=" text-2xl md:text-3xl font-bold">
          {vaccineDataVN.second.total.toLocaleString()}
        </div>
      </div>
      <div className="w-full sm:w-3/3 px-8 h-36 border-t border-gray-100 dark:md:border-gray-600 md:border-gray-200 shadow-md md:h-24 item-center justify-center flex-col flex bg-white dark:bg-gray-800 dark:bg-gray-800 rounded-b-md">
        <div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <div className="text-xs  inline-block py-1 px-3 font-bold rounded-full text-green-600 bg-green-100">
                  % dân số đã tiêm 2 mũi
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-green-600 dark:text-green-300">
                  {vaccineDataVN.secondRatio.toFixed(2)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-3 rounded-full text-xs flex bg-green-100 ">
              <div
                style={{ width: vaccineDataVN.secondRatio.toFixed(2) + "%" }}
                className="shadow-none  flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
            <div className="py-2 md:pb-2 text-xs text-left max-w-prose dark:text-gray-400">
              Mục tiêu: 70% dân số (tương đương 150 triệu liều vaccine)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccineCharts;
