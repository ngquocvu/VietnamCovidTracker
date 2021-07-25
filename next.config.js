const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: prod ? false : true,
    swSrc: "service-worker.js",
  },
  images: {
    domains: ["vnecdn.net"],
  },
});
