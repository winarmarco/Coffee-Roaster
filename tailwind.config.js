const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        sans : ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif : ["Domine", ...defaultTheme.fontFamily.serif],
      },
      spacing: {
          "10%" : "10%",
      },
      colors : {
        coffee : {
          "900" : "#816458",
          "700" : "#A18B82",
          "400" : "#C0B2AC",
          "100" : "#DFD8D5",
        },
        slate : {
          "900" : "#7C8994",
          "700" : "#9DA7AF",
          "400" : "#BEC4CA",
          "100" : "#DEE2E4",
        },
        moss : {
          "900" : "#919997",
          "700" : "#ADB3B1",
          "400" : "#C8CCCB",
          "100" : "#E4E6E5",
        },
        cappucino : {
          "900" : "#2B2626",
          "700" : "#605C5C",
          "400" : "#959393",
          "100" : "#CAC9C9",
        },
        sand : {
          "900" : "#F2EFED",
          "700" : "#F3F5F2",
          "400" : "#F9F7F6",
          "100" : "#FCFBFB",
        },
      },
    },
  },
  variants: {
    extend: {
      display : ["group-hover"],
      width : ["group-hover"],
      fontWeight : ["hover"],
    },
  },
  plugins: [],
}
