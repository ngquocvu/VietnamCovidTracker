import React, { useState } from "react";
import ProvinceSelectionButton from "../provinces/ProvinceSelectionButton";
import RangeSelectionButton from "../provinces/RangeSelectionButton";
import CasesChart from "./CasesChart";
import SummaryTable from "./SummaryTable";
import { RangeType } from "../../utils/interfaces";
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
      <div className="md:flex space-y-4 pb-4 m-3 md:space-y-0 w-full lg:w-6/12 items-center justify-center rounded-md space-x-4 px-4 md:py-3   ">
        <div className="flex w-full space-x-4 pt-4 md:pt-0 items-center justify-center">
          <ProvinceSelectionButton
            province={province}
            setProvince={setProvince}
            name="Việt Nam"
          />
          <ProvinceSelectionButton
            province={province}
            setProvince={setProvince}
            name="TP.HCM"
          />
        </div>
      </div>
      <div className="md:flex w-full md:space-x-4 space-y-4 md:space-y-0  items-center justify-center">
        <CovidCharts
          type="area"
          name={"Tổng số ca tại " + province}
          covidCases={allCovidCases}
        />

        <CovidCharts
          type="bar"
          name={"Số ca theo ngày " + province}
          covidCases={dailyCovidCases}
        />
      </div>
    </>
  );
};

export default Cases;

const CovidCharts = ({ covidCases, name, type }): JSX.Element => {
  const [range, setRange] = useState<RangeType>("all");
  return (
    <>
      <div className="bg-white items-center pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
        <div className="text-lg pb-2  font-bold">{name}</div>
        {covidCases.lastUpdated !== 0 ? (
          <CasesChart covidCases={covidCases} type={type} range={range} />
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
