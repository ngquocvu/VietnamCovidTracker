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
  let month = a.getMonth() + 1;
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes() + (a.getMinutes() < 10 ? "0" : "");
  return "Cập nhật lúc " + hour + ":" + min + " " + date + "/" + month;
}
