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
  return "Cập nhật: " + hour + ":" + min + " " + date + "/" + month;
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
