export type ChartType = "bar" | "area";
export type RangeType = "all" | "week" | "month";

export type CovidCasesProps = {
  cases: [
    {
      x: string;
      y: number;
    }
  ];
  lastUpdated: number;
  toDay: number;
  total: number;
};

export const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.1, ease: [0.48, 0.15, 0.25, 0.86] },
  },
  exit: {
    y: 0,
    opacity: 0.4,
    transition: { duration: 0.1, ease: [0.98, 0.95, 0.15, 0.86] },
  },
};

// export type ProvinceCasesProps = {
//   cases: {
//     x: string;
//     y: number;
//     z: number;
//   };
//   lastUpdated: number;
//   toDay: number;
//   total: number;
// };

export type ProvinceCasesProps = {
  cases: [{ x: string; y: number; z: number }];
  lastUpdated: number;
  toDay: number;
  total: number;
};

export type VaccineDataProps = {
  firstRatio: number;
  secondRatio: number;
  first: {
    datas: [{ x: number; y: number; z: number }];
    lastUpdated: number;
    toDay: number;
    total: number;
  };
  second: {
    datas: [{ x: number; y: number; z: number }];
    lastUpdated: number;
    toDay: number;
    total: number;
  };
};

export type CovidDataVnexpress = {
  date: string;
  community: number;
  totalCommunity: number;
  deaths: number;
  recovered: number;
  cases: number;
  totalCase: number;
  totalDeath: number;
  totalRecovered: number;
  totalRecovered2020: number;
  totalDeath2020: number;
  totalCases2020: number;
  activeCases: number;
}[];
