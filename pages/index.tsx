import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import Province from "../components/Province";
import CasesChart from "../components/CasesChart";
import { CovidCasesProps, VaccineDataProps } from "../utils/interfaces";
import SummaryTable from "../components/SummaryTable";
import bannerPicture from "../public/covid-banner-new.jpg";
import ProvinceSelectionButton from "../components/ProvinceSelectionButton";
import {
  COVID_CASES_HCMC,
  COVID_CASES_PROVINCE,
  COVID_CASES_VIETNAM,
  COVID_VACCINE_VIETNAM,
} from "../utils/constants";
import VaccineChart from "../components/Vaccine/VaccineChart";
import VaccineTables from "../components/Vaccine/VaccineTables";
import VaccineCharts from "../components/Vaccine/VaccineTables";

export default function Home({
  covidDataVN,
  covidDataHCMC,
  covidDataProvince,
  covidVaccineVN,
}) {
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
    if (selectedProvince == "TP.HCM") {
      setAllCovidCases(covidDataHCMC.data.all);
      setDailyCovidCases(covidDataHCMC.data.daily);
    } else {
      setAllCovidCases(covidDataVN.data.vnSeason4);

      setDailyCovidCases(covidDataVN.data.vnSeason4Daily);
    }
  };

  useEffect(() => {
    getCases(province);
  }, [province]);

  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 justify-center min-h-screen">
      <Head>
        <title>Covid-19 in Vietnam </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={bannerPicture} alt="Picture of the author" height="0" />
      <main className="flex flex-col items-center justify-center w-full  flex-1 p-4 text-center">
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
        <div className="m-8 w-full md:w-8/12 ">
          <VaccineTables vaccineDataVN={covidVaccineVN.data} />
        </div>
        <div className="md:flex w-full md:space-x-4 space-y-4 md:space-y-0  items-center justify-center">
          <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
            <div className="text-lg  pb-7 font-bold">
              Tổng số người tiêm vaccine
            </div>
            <div>
              <AllVaccineChart covidVaccineVN={covidVaccineVN.data} />
            </div>
          </div>{" "}
          <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
            <div className="text-lg  pb-7 font-bold">
              Số lượng tiêm vaccine theo ngày
            </div>
            <div>
              <DailyVaccineChart covidVaccineVN={covidVaccineVN.data} />
            </div>
          </div>
        </div>
        <Province covidDataProvince={covidDataProvince.data} />
      </main>
      <footer className="flex items-center justify-center w-full h-24">
        <Footer />
      </footer>
    </div>
  );
}

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
      <div className="text-xl">
        <VaccineChart type="bar" vaccineData={vaccineFormattedDate} />
      </div>
    );
  }
};

const CovidCharts = ({
  province,
  allCovidCases,
  dailyCovidCases,
}): JSX.Element => {
  return (
    <>
      <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
        <div className="text-md pb-5  font-bold">Tổng số ca tại {province}</div>
        <CasesChart covidCases={allCovidCases} type="area" />
      </div>
      <div className="bg-white items-center justify- pt-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-4/12  ">
        <div className="text-md pb-5 font-bold ">
          Số ca theo ngày tại {province}
        </div>

        <CasesChart covidCases={dailyCovidCases} type="bar" />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const covidDataVN = await axios.get(COVID_CASES_VIETNAM).then((c) => c.data);
  const covidDataHCMC = await axios.get(COVID_CASES_HCMC).then((c) => c.data);
  const covidVaccineVN = await axios
    .get(COVID_VACCINE_VIETNAM)
    .then((c) => c.data);
  const covidDataProvince = await axios
    .get(COVID_CASES_PROVINCE)
    .then((c) => c.data);

  return {
    props: {
      covidDataVN,
      covidDataHCMC,
      covidDataProvince,
      covidVaccineVN,
    },
  };
}
