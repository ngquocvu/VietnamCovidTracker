import Graph from "./Graph";
import React, { useState } from "react";
import { ProvinceCasesProps } from "../../utils/interfaces";
import ProvinceList from "./ProvinceList";

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
        <div className="bg-white dark:bg-gray-800 items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
          <div className="text-lg md:text-lg dark:text-gray-200 font-bold">
            Tỉnh thành dẫn đầu về số ca
          </div>
          <Graph
            covidDataProvince={covidDataProvince.cases.map((c) => ({
              x: c.x,
              y: c.z,
            }))}
          />
        </div>

        <div className="dark:bg-gray-800 bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
          <div className="text-lg md:text-lg dark:text-gray-200 font-bold">
            Tỉnh thành nhiều ca nhất trong ngày
          </div>
          <div>
            <Graph
              covidDataProvince={covidDataProvince.cases.map((c) => ({
                x: c.x,
                y: c.y,
              }))}
            />
          </div>
        </div>
      </div>

      <div className="w-full md:max-w-3xl p-2 mx-auto bg-white dark:bg-gray-800 shadow-md rounded-2xl">
        <ProvinceList covidDataProvince={covidDataProvince} />
      </div>
    </div>
  );
};

export default Province;
