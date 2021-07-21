export type CovidCasesProps = {
  cases: [
    {
      x: string;
      y: number;
    }
  ];
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
