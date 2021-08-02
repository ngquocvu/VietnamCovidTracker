import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ProvinceCasesProps, variants } from "../../utils/interfaces";
type ProvinceTableProps = {
  covidDataProvince: ProvinceCasesProps;
};

const ProvinceList = ({ covidDataProvince }: ProvinceTableProps) => {
  const [numberOfProvince, setNumberOfProvince] = useState(4);
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-sm font-medium text-left text-red-700 bg-red-100 rounded-lg hover:bg-red-200 dark:bg-red-300 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
            <span>Tình hình COVID-19 tại các tỉnh thành</span>
            <ChevronUpIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-red-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            <table className="table-fixed w-full">
              <thead>
                <tr className="text-gray-700">
                  <th className="text-left w-2/12">#</th>
                  <th className="text-left w-4/12">Tỉnh</th>
                  <th className="text-right w-3/12">Hôm nay</th>
                  <th className="text-right w-3/12"> Tổng</th>
                </tr>
              </thead>
              <tbody>
                {covidDataProvince.cases
                  .slice(0, numberOfProvince)
                  .map((pro, index) => {
                    return (
                      <tr
                        className="dark:hover:bg-gray-600 hover:bg-gray-200  rounded-md"
                        key={index}
                      >
                        <td className="text-left font-semibold dark:text-gray-300 text-gray-800 py-1 w-1/3">
                          {index + 1}
                        </td>
                        <td className="text-left font-semibold dark:text-gray-300 text-gray-800 py-1 w-1/3">
                          {pro.x}
                        </td>
                        <td className="text-right text-red-600">
                          {pro.y.toLocaleString() !== "0"
                            ? "+" + pro.y.toLocaleString()
                            : pro.y.toLocaleString()}
                        </td>
                        <td className="text-right dark:text-gray-300">
                          {pro.z.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <button
              onClick={() => {
                if (numberOfProvince >= covidDataProvince.cases.length) {
                  setNumberOfProvince(4);
                } else {
                  setNumberOfProvince(numberOfProvince + 64);
                }
              }}
              className="py-2  mt-5 w-full text-gray-700 font-bold rounded-lg bg-gray-100 dark:text-gray-200 bg-white dark:bg-gray-600 hover:bg-gray-200"
            >
              {numberOfProvince < covidDataProvince.cases.length
                ? "Xem thêm"
                : "Thu gọn"}
            </button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default ProvinceList;
