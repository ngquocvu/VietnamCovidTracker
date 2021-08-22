import React from "react";
import ProvinceSelectionButton from "./ProvinceSelectionButton";
import SummaryTable from "./SummaryTable";
import FunctionalChart from "./FunctionalChart";
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
      <div className="md:flex space-y-4 pb-2 m-3 md:space-y-0 w-full lg:w-6/12 items-center justify-center rounded-md space-x-2 px-4 md:py-2   ">
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
          <ProvinceSelectionButton
            province={province}
            setProvince={setProvince}
            name="Hà Nội"
          />
        </div>
      </div>
      <div className="md:flex w-full md:space-x-4 space-y-4 md:space-y-0  items-center justify-center">
        <FunctionalChart
          type="area"
          name={"Tổng số ca tại " + province}
          covidCases={allCovidCases}
        />

        <FunctionalChart
          type="bar"
          name={"Số ca theo ngày " + province}
          covidCases={dailyCovidCases}
        />
      </div>
    </>
  );
};

export default Cases;
