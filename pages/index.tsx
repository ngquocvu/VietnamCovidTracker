import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CovidCasesProps,
  CovidDataVnexpress,
  ProvinceCasesProps,
  VaccineDataProps,
  variants,
} from "../utils/interfaces";
import {
  COVID_CASES_HANOI_VERSION_2,
  COVID_CASES_HCMC,
  COVID_CASES_HCMC_VERSION_2,
  COVID_CASES_PROVINCE,
  COVID_CASES_VIETNAM,
  COVID_VACCINE_VIETNAM,
  TRIGGER_HOOKS,
  VNEXPRESS_COVID_DATA,
} from "../utils/constants";
import Cases from "../components/cases";
import Province from "../components/provinces";
import Vaccine from "../components/vaccines";
import News from "../components/news";
import { useDispatch, useSelector } from "react-redux";
import { setDialog } from "../actions/dialog";
import { vnExpressDataFormatter } from "../utils/dataFormatter";
import { motion } from "framer-motion";
import PopupMessage from "../components/PopupMessage";
import { RootState } from "../reducers";
import { setPage } from "../actions/page";
import * as ga from "../lib/ga";
export type HomeProps = {
  covidDataVN: {
    vnSeason4: CovidCasesProps;
    vnSeason4Daily: CovidCasesProps;
    vnSeason4CommunityDaily: any;
    lastUpdated: number;
  };
  covidDataHCMC: {
    all: CovidCasesProps;
    daily: CovidCasesProps;
  };
  covidDataHCMCv2: {
    all: CovidCasesProps;
    daily: CovidCasesProps;
  };
  covidDataProvince: ProvinceCasesProps;
  covidVaccineVN: VaccineDataProps;
  covidDataVnExpress: CovidDataVnexpress;
};

export default function Home({
  covidDataVN,
  covidDataHNv2,
  covidDataProvince,
  covidVaccineVN,
  covidDataHCMCv2,
  covidDataVnExpress,
}) {
  const [lastUpdated, setLastUpdated] = useState<number>(0);
  const [province, setProvince] = useState<string>("Việt Nam");
  const [allCovidCaseByVnexpress] = useState(covidDataVnExpress);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const dialog = useSelector((state: RootState) => state.dialog);

  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  const isInStandaloneMode = () =>
    "standalone" in window.navigator && (window.navigator as any).standalone;

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
      setAllCovidCases(covidDataHCMCv2.all);
      setDailyCovidCases(covidDataHCMCv2.daily);
    } else if (selectedProvince == "Hà Nội") {
      setAllCovidCases(covidDataHNv2.all);
      setDailyCovidCases(covidDataHNv2.daily);
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

  const onUsePWA = () => {
    ga.event({
      category: "PWA",
      action: "use_pwa",
      label: "User use Progressive Web App",
      value: 1,
    });
  };

  const checkPWA = () => {
    isInStandaloneMode() && !dialog ? onUsePWA() : console.log("Not in PWA");
  };

  useEffect(() => {
    isAPIUpdate();
    dispatch(setPage("home"));
    checkPWA();
    return function cleanup() {
      dispatch(setDialog(true));
    };
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 10);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      className="w-full items-start justify-center md:max-w-7xl"
    >
      {isLoading ? (
        <Skeleton />
      ) : (
        <main className="flex flex-col items-center justify-center w-full flex-1 py-4 md:px-4 px-2 text-center">
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
          <div className="lg:w-8/12 w-full pt-4 items-center flex justify-center">
            <News />
          </div>
          {isIos() && !isInStandaloneMode() && !dialog ? (
            <PopupMessage />
          ) : (
            <></>
          )}
        </main>
      )}
    </motion.div>
  );
}

const Skeleton = () => {
  return (
    <div className="flex items-center justify-center p-4 flex-col w-full space-y-4">
      <div className="w-full md:w-6/12 bg-gray-200 dark:bg-gray-800  rounded-xl animate-pulse h-72" />{" "}
      <div className="w-full md:w-6/12 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse h-16" />
      <div className="w-full md:w-6/12 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse h-12" />
      <div className="w-full md:w-6/12 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse h-56" />
    </div>
  );
};

export async function getStaticProps() {
  const covidDataVN = await axios
    .get(COVID_CASES_VIETNAM)
    .then((c) => c.data.data);
  const covidDataHCMC = await axios
    .get(COVID_CASES_HCMC)
    .then((c) => c.data.data);
  const covidDataHCMCv2 = await axios
    .get(COVID_CASES_HCMC_VERSION_2)
    .then((c) => formatDataV2(c.data.data));
  const covidDataHNv2 = await axios
    .get(COVID_CASES_HANOI_VERSION_2)
    .then((c) => formatDataV2(c.data.data));
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
      covidDataHCMCv2,
      covidDataHNv2,
      covidDataProvince,
      covidVaccineVN,
      covidDataVnExpress,
    },
  };
}
const formatDataV2 = (covidDataHCMCv2: any) => ({
  all: {
    cases: covidDataHCMCv2.data.map((e: any) => ({
      x: e.date,
      y: parseFloat(e.total.replace(/\./g, "")),
    })),
    lastUpdated: covidDataHCMCv2.lastUpdated,
    toDay: parseFloat(
      covidDataHCMCv2.data.slice(-1)[0].daily.replace(/\./g, "")
    ),
    total: parseFloat(
      covidDataHCMCv2.data.slice(-1)[0].total.replace(/\./g, "")
    ),
  },
  daily: {
    cases: covidDataHCMCv2.data.map((e: any) => ({
      x: e.date,
      y: parseFloat(e.daily.replace(/\./g, "")),
    })),
    lastUpdated: covidDataHCMCv2.lastUpdated,
    toDay: parseFloat(
      covidDataHCMCv2.data.slice(-1)[0].daily.replace(/\./g, "")
    ),
    total: parseFloat(
      covidDataHCMCv2.data.slice(-1)[0].total.replace(/\./g, "")
    ),
  },
});
