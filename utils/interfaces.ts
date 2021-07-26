export type chartType = "bar" | "area";
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

export type ProvinceCasesProps = {
  cases: {
    x: string;
    y: number;
    z: number;
  };
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
