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
}) => {
  return (
    <>
      <SummaryTable
        covidCases={allCovidCases}
        province={province}
        lastUpdated={lastUpdated}
      />
      <div className="flex space-x-3 pb-6 pt-2">
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
        <div className="text-lg pb-5  font-bold">Tổng số ca tại {province}</div>
        <CasesChart covidCases={allCovidCases} type="area" />
      </div>
      <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
        <div className="text-lg pb-5 font-bold ">
          Số ca theo ngày tại {province}
        </div>

        <CasesChart covidCases={dailyCovidCases} type="bar" />
      </div>
    </>
  );
};
