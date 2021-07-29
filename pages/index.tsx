import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CovidCasesProps,
  CovidDataVnexpress,
  ProvinceCasesProps,
  VaccineDataProps,
} from "../utils/interfaces";
import {
  COVID_CASES_HCMC,
  COVID_CASES_PROVINCE,
  COVID_CASES_VIETNAM,
  COVID_VACCINE_VIETNAM,
  TRIGGER_HOOKS,
  VNEXPRESS_COVID_DATA,
} from "../utils/constants";
import Cases from "../components/cases/Cases";
import Province from "../components/provinces/Province";
import Vaccine from "../components/vaccines/Vaccine";
import News from "../components/news/News";
import { useDispatch } from "react-redux";
import { setPage } from "../actions/page";
import { vnExpressDataFormatter } from "../utils/dataFormatter";

export type HomeProps = {
  covidDataVN: {
    vnSeason4: CovidCasesProps;
    vnSeason4Daily: CovidCasesProps;
    lastUpdated: number;
  };
  covidDataHCMC: {
    all: CovidCasesProps;
    daily: CovidCasesProps;
  };
  covidDataProvince: ProvinceCasesProps;
  covidVaccineVN: VaccineDataProps;
  covidDataVnExpress: CovidDataVnexpress;
};

export default function Home({
  covidDataVN,
  covidDataHCMC,
  covidDataProvince,
  covidVaccineVN,
  covidDataVnExpress,
}) {
  const [lastUpdated, setLastUpdated] = useState<number>(0);
  const [province, setProvince] = useState<string>("Việt Nam");
  const [allCovidCaseByVnexpress] = useState(covidDataVnExpress);
  const dispatch = useDispatch();
  dispatch(setPage("home"));
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
    setLastUpdated(covidDataVN.lastUpdated);
  };

  useEffect(() => {
    getCases(province);
  }, [province]);

  const isAPIUpdate = async () => {
    let apiUpdateTime = await axios.get(COVID_CASES_VIETNAM);
    apiUpdateTime = apiUpdateTime.data.data.lastUpdated;
    if (covidDataVN.lastUpdated !== apiUpdateTime) {
      const response = await axios.get(TRIGGER_HOOKS);
      console.log("Triggered a hook at" + response.data.job.createdAt);
    }
  };

  useEffect(() => {
    isAPIUpdate();
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full flex-1 p-4 text-center">
        <Cases
          dailyCovidCases={dailyCovidCases}
          lastUpdated={lastUpdated}
          province={province}
          allCovidCases={allCovidCases}
          setProvince={setProvince}
          allCovidCaseByVnexpress={allCovidCaseByVnexpress}
        />
        <Province covidDataProvince={covidDataProvince} />
        <Vaccine covidVaccineVN={covidVaccineVN} />
        <div className="w-full pt-4 items-center flex justify-center">
          <News />
        </div>
      </main>
    </>
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
  const covidDataVnExpress = await axios
    .get(VNEXPRESS_COVID_DATA)
    .then((c) => vnExpressDataFormatter(c.data));
  return {
    props: {
      covidDataVN,
      covidDataHCMC,
      covidDataProvince,
      covidVaccineVN,
      covidDataVnExpress,
    },
  };
}
