import React from "react";
import ProvinceSelectionButton from "../provinces/ProvinceSelectionButton";
import CasesChart from "./CasesChart";
import SummaryTable from "./SummaryTable";

const Cases = ({
  province,
  allCovidCases,
  lastUpdated,
  dailyCovidCases,
  setProvince,
  allCovidCaseByVnexpress,
}) => {
  return (
    <>
      <SummaryTable
        covidCases={allCovidCases}
        province={province}
        lastUpdated={lastUpdated}
        allCovidCaseByVnexpress={allCovidCaseByVnexpress}
      />
      <div className="flex w-8/12 lg:w-6/12 justify-center rounded-md space-x-3 py-3 mb-2">
        <ProvinceSelectionButton
          province={province}
          setProvince={setProvince}
        />
      </div>
      <div className="md:flex w-full md:space-x-4 space-y-4 md:space-y-0  items-center justify-center">
        <CovidCharts
          province={province}
          allCovidCases={allCovidCases}
          dailyCovidCases={dailyCovidCases}
        />
      </div>
    </>
  );
};

export default Cases;
const CovidCharts = ({
  province,
  allCovidCases,
  dailyCovidCases,
}): JSX.Element => {
  return (
    <>
      <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
        <div className="text-lg pb-2  font-bold">Tổng số ca tại {province}</div>
        {dailyCovidCases.lastUpdated !== 0 ? (
          <CasesChart covidCases={allCovidCases} type="area" />
        ) : (
          <div className="p-4">
            <div className="bg-gray-200 h-60 md:h-72 animate-pulse rounded-md"></div>
          </div>
        )}
      </div>
      <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
        <div className="text-lg pb-2 font-bold ">
          Số ca theo ngày tại {province}
        </div>

        {dailyCovidCases.lastUpdated !== 0 ? (
          <CasesChart covidCases={dailyCovidCases} type="bar" />
        ) : (
          <div className="p-4">
            <div className="bg-gray-200 h-60 animate-pulse md:h-72 rounded-md"></div>
          </div>
        )}
      </div>
    </>
  );
};
