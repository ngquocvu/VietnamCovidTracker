import React from "react";
import { VaccineDataProps } from "../../utils/interfaces";
import VaccineChart from "./VaccineChart";
import VaccineTables from "./VaccineTables";

type VaccineProps = {
  covidVaccineVN: VaccineDataProps;
};

const Vaccine = ({ covidVaccineVN }: VaccineProps) => {
  return (
    <>
      <div className="mt-8 w-full lg:w-8/12 ">
        <VaccineTables vaccineDataVN={covidVaccineVN} />
      </div>
      <div className="mt-8 md:flex w-full md:space-x-4 space-y-4 md:space-y-0 items-center justify-center">
        <div className="bg-white dark:bg-gray-800 items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12">
          <div className="text-lg dark:text-gray-300 pb-7 font-bold">
            Tổng số người tiêm vaccine
          </div>
          <div>
            <AllVaccineChart covidVaccineVN={covidVaccineVN} />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
          <div className="text-lg dark:text-gray-300 pb-7 font-bold">
            Số lượng tiêm vaccine theo ngày
          </div>
          <div>
            <DailyVaccineChart covidVaccineVN={covidVaccineVN} />
          </div>
        </div>
      </div>
    </>
  );
};

const AllVaccineChart = ({ covidVaccineVN }): any => {
  {
    const vaccineFormattedDate = covidVaccineVN.first.datas.map(
      (c: any, index: number) => ({
        date: c.x.toString().slice(8, 10) + "/" + c.x.toString().slice(5, 7),
        y: c.z,
        z: covidVaccineVN.second.datas[index].z,
      })
    );
    return (
      <div className="text-xl">
        <VaccineChart type="area" vaccineData={vaccineFormattedDate} />
      </div>
    );
  }
};

const DailyVaccineChart = ({ covidVaccineVN }): any => {
  {
    const vaccineFormattedDate = covidVaccineVN.first.datas.map(
      (c: any, index: number) => ({
        date: c.x.toString().slice(8, 10) + "/" + c.x.toString().slice(5, 7),
        y: c.y,
        z: covidVaccineVN.second.datas[index].y,
      })
    );
    return (
      <div className="text-xl ">
        <VaccineChart type="bar" vaccineData={vaccineFormattedDate} />
      </div>
    );
  }
};
export default Vaccine;
