import axios from "axios";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import {
  CovidCasesProps,
  ProvinceCasesProps,
  VaccineDataProps,
} from "../utils/interfaces";
import {
  COVID_CASES_HCMC,
  COVID_CASES_PROVINCE,
  COVID_CASES_VIETNAM,
  COVID_VACCINE_VIETNAM,
  TRIGGER_HOOKS,
} from "../utils/constants";
import Cases from "../components/cases/Cases";
import Province from "../components/provinces/Province";
import Vaccine from "../components/vaccines/Vaccine";
import News from "../components/news/News";

export type HomeProps = {
  covidDataVN: {
    vnSeason4: CovidCasesProps;
    vnSeason4Daily: CovidCasesProps;
  };
  covidDataHCMC: {
    all: CovidCasesProps;
    daily: CovidCasesProps;
  };
  covidDataProvince: ProvinceCasesProps;
  covidVaccineVN: VaccineDataProps;
};

export default function Home({
  covidDataVN,
  covidDataHCMC,
  covidDataProvince,
  covidVaccineVN,
}) {
  const [lastUpdated, setLastUpdated] = useState<number>(0);
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
    lastUpdated: 0,
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
    lastUpdated: 0,
  });

  const getCases = async (selectedProvince: string) => {
    if (selectedProvince == "TP.HCM") {
      setAllCovidCases(covidDataHCMC.all);
      setDailyCovidCases(covidDataHCMC.daily);
    } else {
      setAllCovidCases(covidDataVN.vnSeason4);
      setDailyCovidCases(covidDataVN.vnSeason4Daily);
    }
    setLastUpdated(covidVaccineVN.first.lastUpdated);
  };

  useEffect(() => {
    getCases(province);
  }, [province]);

  const isAPIUpdate = async () => {
    let apiUpdateTime = await axios.get(COVID_VACCINE_VIETNAM);
    apiUpdateTime = apiUpdateTime.data.data.first.lastUpdated;
    if (covidVaccineVN.first.lastUpdated !== apiUpdateTime) {
      const response = await axios.get(TRIGGER_HOOKS);
      console.log("Triggered a hook at" + response.data.job.createdAt);
    }
  };

  useEffect(() => {
    isAPIUpdate();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 justify-center min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center w-full  flex-1 p-4 text-center">
        <Cases
          dailyCovidCases={dailyCovidCases}
          lastUpdated={lastUpdated}
          province={province}
          allCovidCases={allCovidCases}
          setProvince={setProvince}
        />
        <Province covidDataProvince={covidDataProvince} />
        <Vaccine covidVaccineVN={covidVaccineVN} />
        <News />
      </main>
      <footer className="flex items-center justify-center w-full h-24">
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const covidDataVN = await axios
    .get(COVID_CASES_VIETNAM)
    .then((c) => c.data.data);
  const covidDataHCMC = await axios
    .get(COVID_CASES_HCMC)
    .then((c) => c.data.data);
  const covidVaccineVN = await axios
    .get(COVID_VACCINE_VIETNAM)
    .then((c) => c.data.data);
  const covidDataProvince = await axios
    .get(COVID_CASES_PROVINCE)
    .then((c) => c.data.data);
  return {
    props: {
      covidDataVN,
      covidDataHCMC,
      covidDataProvince,
      covidVaccineVN,
    },
  };
}
