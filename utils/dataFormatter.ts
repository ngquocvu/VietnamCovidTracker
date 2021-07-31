export function nFormatter(num: number, digits: number) {
  let si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

export function timeConverter(UNIX_timestamp: number) {
  let a = new Date(UNIX_timestamp * 1000);
  let month = (a.getMonth() + 1 < 10 ? "0" : "") + (a.getMonth() + 1);
  let date = (a.getDate() < 10 ? "0" : "") + a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes() + (a.getMinutes() < 10 ? "0" : "");
  return hour + ":" + min + " " + date + "/" + month;
}

export function timeSince(date: string) {
  let seconds = Math.floor((Number(Date.now()) - Number(date) * 1000) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " năm";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " tháng";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " ngày";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " giờ";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " phút";
  }
  return Math.floor(seconds) + " giây";
}
export function formatNumber(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export const vnExpressDataFormatter = (data: string) => {
  const lines = data.split("\n");
  return lines.slice(2, lines.length - 1).map((l) => ({
    date: dateFormater(l.split('","')[0].slice(1)),
    community: l.split('","')[1],
    totalCommunity: l.split(",")[2],
    deaths: l.split('","')[6],
    recovered: l.split('","')[7],
    cases: l.split('","')[8],
    totalCase: l.split('","')[9],
    totalDeath: l.split('","')[10],
    totalRecovered: l.split('","')[11],
    totalRecovered2020: l.split('","')[24],
    totalDeath2020: l.split('","')[23],
    totalCases2020: l.split('","')[22],
    activeCases: l.split('","')[21],
  }));
};

export const dateFormater = (data: string) => {
  const splitData = data.split("/");
  const newDate = (Number(splitData[0]) < 10 ? "0" : "") + splitData[0];
  return newDate + "/" + splitData[1];
};
