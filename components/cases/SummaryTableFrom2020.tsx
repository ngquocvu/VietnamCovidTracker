import moment from "moment";
import React from "react";
import { formatNumber } from "../../utils/dataFormatter";

const SummaryTableFrom2020 = ({ allCovidCaseByVnexpress }) => {
  return (
    <div className="py-7 px-9 m-2 w-full md:w-1/2 md:m-1 grid grid-cols-1 flex item-center justify-center  bg-white rounded-md shadow-md">
      <p className=" text-md md:text-lg pb-4 font-bold text-red-600">
        Kể từ khi dịch bùng phát từ đầu 2020 đến nay
      </p>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col">
          <p className="text-xs md:text-base  text-yellow-500">
            Hôm nay:{"  +"}
            {formatNumber(
              allCovidCaseByVnexpress.find(
                (e: any) => e.date === moment().format("DD/M")
              ).cases
            )}
          </p>
          <p className="pb-2 text-2xl md:text-4xl sm:text-xl font-bold text-yellow-500">
            {formatNumber(
              allCovidCaseByVnexpress.find(
                (e: any) => e.date === moment().format("DD/M")
              ).totalCases2020
            )}
          </p>
          <p className="text-sm bg-yellow-100  text-yellow-500 font-semibold text-center p-1 rounded-md">
            Ca nhiễm
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs md:text-base  text-green-500">
            Hôm nay:{"  +"}
            {formatNumber(
              allCovidCaseByVnexpress.find(
                (e: any) => e.date === moment().format("DD/M")
              ).recovered
            )}
          </p>
          <p className="pb-2 text-2xl md:text-4xl sm:text-xl font-bold text-green-500">
            {formatNumber(
              allCovidCaseByVnexpress.find(
                (e: any) => e.date === moment().format("DD/M")
              ).totalRecovered2020
            )}
          </p>
          <p className="text-sm bg-green-100  text-green-500 font-semibold text-center p-1 rounded-md">
            Hồi phục
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs md:text-base  text-red-500">
            Hôm nay:{"  +"}
            {formatNumber(
              allCovidCaseByVnexpress.find(
                (e: any) => e.date === moment().format("DD/M")
              ).deaths
            )}
          </p>
          <p className="pb-2 text-2xl md:text-4xl sm:text-xl font-bold text-red-500">
            {formatNumber(
              allCovidCaseByVnexpress.find(
                (e: any) => e.date === moment().format("DD/M")
              ).totalDeath2020
            )}
          </p>
          <p className="text-sm bg-red-100  text-red-500 font-semibold text-center p-1 rounded-md">
            Tử vong
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-xs md:text-base ">&nbsp;</div>
          <p className="pb-2 text-2xl md:text-4xl sm:text-xl font-bold text-gray-800">
            {formatNumber(
              allCovidCaseByVnexpress.find(
                (e: any) => e.date === moment().format("DD/M")
              ).activeCases
            )}
          </p>
          <p className="text-sm bg-gray-100  text-gray-500 font-semibold text-center p-1 rounded-md">
            Đang chữa trị
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryTableFrom2020;
