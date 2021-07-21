import axios from "axios";
import Head from "next/head";
import CasesChart from "../components/CasesChart";
import Footer from "../components/Footer";
import Province from "../components/Province";
import ProvinceSelectionButton from "../components/ProvinceSelectionButton";
import SummaryTable from "../components/SummaryTable";
import { useEffect, useState } from "react";
import { COVID_CASES_HCMC, COVID_CASES_VIETNAM } from "../utils/constants";
import { CovidCasesProps } from "../utils/interfaces";

export default function Home() {
  const [province, setProvince] = useState<string>("Việt Nam");
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
    const data =
      selectedProvince == "TP.HCM"
        ? await axios.get(COVID_CASES_HCMC)
        : await axios.get(COVID_CASES_VIETNAM);
    if (selectedProvince == "TP.HCM") {
      setAllCovidCases(data.data.data.all);
      setDailyCovidCases(data.data.data.all);
    } else {
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
        <title>Covid-19 in Vietnam </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 p-4 text-center">
        <SummaryTable covidCases={allCovidCases} province={province} />
        <div className="flex space-x-3 pb-5">
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
        <Province />
      </main>
      <footer className="flex items-center justify-center w-full h-24">
        <Footer />
      </footer>
    </div>
  );
}

const CovidCharts = ({
  province,
  allCovidCases,
  dailyCovidCases,
}): JSX.Element => {
  return (
    <>
      <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
        <div className="text-md pb-5  font-bold">Tổng số ca tại {province}</div>
        <CasesChart covidCases={allCovidCases} />
      </div>
      <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
        <div className="text-md pb-5 font-bold ">
          Số ca theo ngày tại {province}
        </div>
        <CasesChart covidCases={dailyCovidCases} />
      </div>
    </>
  );
};
