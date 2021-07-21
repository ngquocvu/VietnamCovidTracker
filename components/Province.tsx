import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useState, useEffect } from "react";

type provinceCovidCaseProps = {
  cases: [{ x: string; y: number; z: number }];
  lastUpdated: number;
  toDay: number;
  total: number;
};

const Province = () => {
  const [provinceCovidCases, setProvinceCovidCases] =
    useState<provinceCovidCaseProps>({
      cases: [{ x: "Loading...", y: 0, z: 0 }],
      lastUpdated: 0,
      toDay: 0,
      total: 0,
    });

  const getProvinceData = async () => {
    const data = await axios.get(
      "https://api.zingnews.vn/public/v2/corona/getChart?type=province"
    );
    setProvinceCovidCases(data.data.data);
    console.log(data.data.data);
  };

  useEffect(() => {
    getProvinceData();
  }, []);

  return (
    <div className="w-full px-2 pt-4">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl shadow-md">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-red-700 bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                <span>Tình hình COVID-19 tại các tỉnh thành</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-red-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="text-gray-700">
                      <th className="text-left">Tỉnh</th>
                      <th className="text-right">Hôm nay</th>
                      <th className="text-right"> Tổng số ca</th>
                    </tr>
                  </thead>
                  <tbody>
                    {provinceCovidCases.cases.map((pro, index) => {
                      return (
                        <tr key={index}>
                          <td className="text-left text-gray-800 py-0.5 w-1/3">
                            {pro.x}
                          </td>
                          <td className="text-right text-red-600">
                            {pro.y.toLocaleString() !== "0"
                              ? "+" + pro.y.toLocaleString()
                              : pro.y.toLocaleString()}
                          </td>
                          <td className="text-right">
                            {pro.z.toLocaleString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Province;
