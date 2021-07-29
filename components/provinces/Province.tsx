import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import RankedChart from "./RankedChart";
import React, { useState } from "react";
import ProvinceTable from "./ProvinceTable";
import { ProvinceCasesProps } from "../../utils/interfaces";

type ProvinceProps = {
  covidDataProvince: ProvinceCasesProps;
};

const Province = ({
  covidDataProvince = {
    cases: [{ x: "Loading...", y: 0, z: 0 }],
    lastUpdated: 0,
    toDay: 0,
    total: 0,
  },
}: ProvinceProps) => {
  return (
    <div className="w-full pt-5">
      <div className="mb-6 mt-0 md:pt-4 md:flex w-full md:space-x-4 space-y-4 md:space-y-0  items-center justify-center">
        <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
          <div className="text-md md:text-lg  font-bold">
            Tỉnh thành dẫn đầu về số ca
          </div>
          <RankedChart
            covidDataProvince={covidDataProvince.cases.map((c) => ({
              x: c.x,
              y: c.z,
            }))}
          />
        </div>

        <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
          <div className="text-md md:text-lg font-bold">
            Tỉnh thành nhiều ca nhất trong ngày
          </div>
          <div>
            <RankedChart
              covidDataProvince={covidDataProvince.cases.map((c) => ({
                x: c.x,
                y: c.y,
              }))}
            />
          </div>
        </div>
      </div>

      <div className="w-full md:max-w-3xl p-2 mx-auto bg-white shadow-md rounded-2xl">
        <ProvinceTable covidDataProvince={covidDataProvince} />
      </div>
    </div>
  );
};

export default Province;
