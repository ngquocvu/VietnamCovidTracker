import React, { useEffect, useState } from "react";
import Link from "next/link";
import { setPage } from "../actions/page";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { variants } from "../utils/interfaces";
import axios from "axios";
import { timeSince } from "../utils/dataFormatter";

type WorldPageProps = {
  Global: {
    NewConfirmed: string;
    TotalConfirmed: string;
    NewDeaths: string;
    TotalDeaths: string;
    NewRecovered: string;
    TotalRecovered: string;
    Date: string;
  };
};

const WorldPage = () => {
  const [cases, setCases] = useState<WorldPageProps>({
    Global: {
      NewConfirmed: "-",
      TotalConfirmed: "-",
      NewDeaths: "-",
      TotalDeaths: "-",
      NewRecovered: "-",
      TotalRecovered: "-",
      Date: "-",
    },
  });
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await axios.get("https://api.covid19api.com/summary");
    setCases(data.data);
  };
  useEffect(() => {
    dispatch(setPage("world"));
    getData();
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      className="w-full items-start justify-center md:max-w-7xl"
    >
      <main className="flex w-full pt-4 pb-6 items-start justify-center md:max-w-7xl">
        <div className="flex w-full mx-4 items-center flex-col space-y-4">
          <div className="p-2.5 w-full md:w-8/12 lg:w-1/2 grid grid-cols-1 flex items-center justify-center dark:bg-gray-800 bg-white rounded-xl shadow-sm">
            <div className="bg-gray-100 flex flex-col items-center dark:bg-gray-700 p-2 rounded-xl">
              <p className="font-bold dark:text-gray-200 text-lg md:text-xl ">
                Số liệu Covid-19 trên thế giới
              </p>
              <p className="text-xs sm:text-xs font-semibold dark:text-gray-400 text-gray-500 mb-1">
                Nguồn dữ liệu từ Postman API
              </p>
              <p className="text-xs sm:text-xs font-semibold dark:text-gray-400 text-gray-500 ">
                {"Cập nhật: "}
                <a>
                  {cases.Global.Date !== "-"
                    ? timeSince(
                        (
                          new Date(cases.Global.Date).getTime() / 1000
                        ).toString()
                      ) + " trước"
                    : ""}
                </a>
              </p>
            </div>
            <CardContent
              value="Ca nhiễm"
              number={cases.Global.TotalConfirmed.toLocaleString()}
              todayCase={cases.Global.NewConfirmed.toLocaleString()}
              color="yellow"
            />
            <CardContent
              value="Tử vong"
              number={cases.Global.TotalDeaths.toLocaleString()}
              todayCase={cases.Global.NewDeaths.toLocaleString()}
              color="red"
            />
            <CardContent
              value="Hồi phục"
              number={cases.Global.TotalRecovered.toLocaleString()}
              todayCase={cases.Global.NewRecovered.toLocaleString()}
              color="green"
            />
          </div>
        </div>
      </main>
    </motion.div>
  );
};

const CardContent = ({ value, number, todayCase, color }) => {
  return todayCase !== "-" ? (
    <div className="flex flex-col items-center m-3">
      <p className={`text-xs md:text-sm  text-gray-700 dark:text-gray-300`}>
        Hôm nay: +{todayCase}
      </p>
      <p
        className={`pb-2 text-3xl md:text-4xl sm:text-xl text-${color}-500 flex font-bold `}
      >
        {number === "0" ? "-" : number}
      </p>
      <p
        className={`text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-600 font-semibold text-center p-1 w-full rounded-md`}
      >
        {value}
      </p>
    </div>
  ) : (
    <div className="flex flex-col items-center m-3">
      <p
        className={`pb-2 text-3xl md:text-4xl sm:text-xl flex font-bold h-12 w-2/3 rounded-md animate-pulse bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-600`}
      ></p>
      <p
        className={`text-sm  bg-gray-200 dark:bg-gray-700 text-gray-200 font-semibold mt-2 text-center p-1 w-full rounded-md`}
      >
        {value}
      </p>
    </div>
  );
};

export default WorldPage;
