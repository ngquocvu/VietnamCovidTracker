import moment from "moment";
import React from "react";
import {
  formatNumber,
  vnExpressDataFormatter,
} from "../../utils/dataFormatter";
import { CovidDataVnexpress } from "../../utils/interfaces";

const SummaryTableFrom2020 = ({
  allCovidCaseByVnexpress = [
    {
      date: "24/07",
      community: 0,
      totalCommunity: 0,
      deaths: 0,
      recovered: 0,
      cases: 0,
      totalCase: 0,
      totalDeath: 0,
      totalRecovered: 0,
      totalRecovered2020: 0,
      totalDeath2020: 0,
      totalCases2020: 0,
      activeCases: 0,
    },
  ],
}) => {
  return (
    <div className="py-3 px-4 w-full md:m-1 grid grid-cols-1 flex items-center justify-center rounded-md ">
      <p className=" text-md md:text-lg pb-4 font-bold text-red-600 ">
        Kể từ khi dịch bùng phát từ đầu 2020 đến nay
      </p>
      <div className="grid grid-cols-2 gap-4">
        <CovidDataLine
          value=" Ca nhiễm"
          all="totalCases2020"
          today="cases"
          color="yellow"
          allCovidCaseByVnexpress={allCovidCaseByVnexpress}
        />
        <CovidDataLine
          value="Hồi phục"
          all="totalRecovered2020"
          today="recovered"
          color="green"
          allCovidCaseByVnexpress={allCovidCaseByVnexpress}
        />

        <CovidDataLine
          value="Tử vong"
          all="totalDeath2020"
          color="red"
          today="deaths"
          allCovidCaseByVnexpress={allCovidCaseByVnexpress}
        />

        <div className="flex flex-col">
          <div className="text-xs md:text-base ">&nbsp;</div>
          <p className="pb-2 text-2xl md:text-4xl sm:text-xl font-bold text-gray-800 dark:text-gray-200">
            {formatNumber(
              allCovidCaseByVnexpress.find(
                (e: any) => e.date === moment().format("DD/M")
              ).activeCases
            )}
          </p>
          <p className="text-sm bg-gray-100 dark:bg-gray-500  dark:text-gray-200 text-gray-500 font-semibold text-center p-1 rounded-md">
            Đang chữa trị
          </p>
        </div>
      </div>
    </div>
  );
};

export const CovidDataLine = ({
  all,
  today,
  color,
  value,
  allCovidCaseByVnexpress,
}): JSX.Element => {
  return (
    <div className="flex flex-col">
      <p
        className={`text-xs md:text-sm dark:text-${color}-700 text-${color}-500`}
      >
        {dailyData(today, allCovidCaseByVnexpress)}
      </p>
      <p
        className={`pb-2 text-2xl md:text-4xl sm:text-xl font-bold  text-${color}-500`}
      >
        {formatNumber(
          allCovidCaseByVnexpress.find(
            (e: any) => e.date === moment().format("DD/M")
          )[all]
        )}
      </p>
      <p
        className={`text-sm bg-${color}-100   text-${color}-500 font-semibold text-center p-1 rounded-md`}
      >
        {value}
      </p>
    </div>
  );
};

export const dailyData = (
  today: string,
  allCovidCaseByVnexpress: CovidDataVnexpress
) => {
  const data = allCovidCaseByVnexpress.find(
    (e: any) => e.date === moment().format("DD/M")
  )[today];
  if (data && data != 0) {
    return "Hôm nay: " + formatNumber(data);
  } else return <>&nbsp;</>;
};

export default SummaryTableFrom2020;
