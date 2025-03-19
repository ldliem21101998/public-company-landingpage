/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{html,js}"],
  },
  theme: {
    extend: {
      screens: {
        pv: "280px",
        pvmax: "360px",
        iphone_se: "375px",
        iphone_12: "390px",
        iphone_xr: "415px",
        iphone_14: "431px",
        ph: "480px",
        phm: "938px",
        dv: "1440px",
        dvm: "1560px",
        dhm: "1920px",
        dh: "2560px",
        dh_max: "5000px",
      },
    },
    plugins: [require("taos/plugin")],
    safelist: [
      "!duration-[0ms]",
      "!delay-[0ms]",
      'html.js :where([class*="taos:"]:not(.taos-init))',
    ],
  },
};
