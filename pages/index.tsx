import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import CasesChart from "../components/CasesChart";
import { CovidCasesProps } from "../utils/interfaces";

export default function Home() {
  const [province, setProvine] = useState<string>("Việt Nam");
  const [allCovidCases, setAllCovidCases] = useState<CovidCasesProps>({
    cases: [
      {
        x: "2021-04-29",
        y: 0,
      },
    ],
    toDay: 0,
    total: 0,
  });
  const [dailyCovidCases, setDailyCovidCases] = useState<CovidCasesProps>({
    cases: [
      {
        x: "2021-04-29",
        y: 0,
      },
    ],
    toDay: 0,
    total: 0,
  });

  const getCases = async (selectedProvince: string) => {
    let data: any;
    if (selectedProvince == "TP.HCM") {
      data = await axios.get(
        "https://api.zingnews.vn/public/v2/corona/getChart?loc=hcm"
      );
      setAllCovidCases(data.data.data.all);
      setDailyCovidCases(data.data.data.daily);
    } else if (selectedProvince == "Việt Nam") {
      data = await axios.get(
        "https://api.zingnews.vn/public/v2/corona/getChart"
      );
      console.log("he");
      console.log(data.data.data.vnSeason4);
      setAllCovidCases(data.data.data.vnSeason4);
      setDailyCovidCases(data.data.data.vnSeason4Daily);
    }
  };

  useEffect(() => {
    getCases(province);
  }, [province]);

  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800  justify-center min-h-screen py-2">
      <Head>
        <title>Covid-19 Analyst </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 p-4 text-center">
        <p className=" font-bold text-lg">Số liệu Covid-19 tại {province}</p>
        <p className="text-sm text-red-600 font-bold">
          {" "}
          Lây nhiễm từ ngày 27.4{" "}
        </p>
        <div className="py-3 px-7 border m-4  bg-white rounded-md shadow-sm">
          <div className="pb-2 text-xs text-red-600 animate-pulse">
            Trực tiếp
          </div>
          <div className="flex space-x-7 ">
            <div className="flex flex-col">
              <p className="pb-2 text-2xl font-bold text-red-600 duration-100 ease-in-out">
                {allCovidCases.total.toLocaleString()}
              </p>
              <p className="font-normal text-sm text-center">Ca nhiễm</p>
            </div>
            <div className="flex flex-col">
              <p className="pb-2 text-2xl font-bold text-red-600">
                {allCovidCases.toDay.toLocaleString()}
              </p>
              <p className="text-sm font-normal text-center">Hôm nay</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3 pb-5">
          <button
            className={
              province == "Việt Nam"
                ? `rounded bg-white p-1 shadow-mg px-4 text-sm ring-2 ring-green-500 shadow-sm`
                : `rounded bg-white p-1 shadow-mg px-4 text-sm shadow-sm`
            }
            onClick={() => setProvine("Việt Nam")}
          >
            Việt Nam
          </button>
          <button
            className={
              province == "TP.HCM"
                ? `rounded  bg-white p-1 shadow-mg px-4 text-sm ring-2 ring-green-500 shadow-sm`
                : `rounded bg-white p-1 shadow-mg px-4 text-sm shadow-sm`
            }
            onClick={() => setProvine("TP.HCM")}
          >
            TP.HCM
          </button>
        </div>
        <div className="md:flex w-full md:space-x-4 space-y-4 md:space-y-0  items-center justify-center">
          <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
            <div className="text-md pb-5  font-bold">
              Tổng số ca tại {province}
            </div>
            <CasesChart covidCases={allCovidCases} />
          </div>
          <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
            <div className="text-md pb-5 font-bold ">
              Số ca theo ngày tại {province}
            </div>
            <CasesChart covidCases={dailyCovidCases} />
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24">
        <div className="flex-col">
          <a
            className="flex items-center justify-center text-sm hover:text-blue-500"
            href="https://quocvu.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by&nbsp;
            <div className="font-bold text-md">Vu Nguyen</div>
          </a>
          <div className="text-center text-xs">
            Nguồn dữ liệu Covid-19 từ Zing News
          </div>
        </div>
      </footer>
    </div>
  );
}
