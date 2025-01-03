import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7fa",
          100: "#eaeff4",
          200: "#cfdce8",
          300: "#a6bfd3",
          400: "#759cbb",
          500: "#5480a3",
          600: "#416788",
          700: "#35526f",
          800: "#2f475d",
          900: "#2c3e50",
          950: "#1d2834",
        },
        secondary: {
          50: "#f0fdf9",
          100: "#cdfaec",
          200: "#9cf3da",
          300: "#62e6c5",
          400: "#32cfad",
          500: "#1abc9c",
          600: "#11907a",
          700: "#127362",
          800: "#135c51",
          900: "#154c44",
          950: "#052e29",
        },
        accent: {
          50: "#fdfde9",
          100: "#fdfbc4",
          200: "#fbf38d",
          300: "#f9e54b",
          400: "#f5d31a",
          500: "#f1c40f",
          600: "#c59009",
          700: "#9d670b",
          800: "#825211",
          900: "#6f4314",
          950: "#412307",
        },
        lightGray: {
          50: "#f6f9f9",
          100: "#ecf0f1",
          200: "#d6dfe1",
          300: "#b2c4c7",
          400: "#88a4a8",
          500: "#6a898d",
          600: "#557074",
          700: "#455b5f",
          800: "#3c4d50",
          900: "#354245",
          950: "#232c2e",
        },
        darkGray: {
          50: "#f7f8f8",
          100: "#f1f2f2",
          200: "#e3e7e7",
          300: "#cdd4d4",
          400: "#aeb8b8",
          500: "#93a1a1",
          600: "#7f8c8d",
          700: "#647172",
          800: "#555e5f",
          900: "#495152",
          950: "#292d2e",
        },
      },
      fontFamily: {
        sans: ["Inter"],
        barlow: ["barlow", "sans-serif"],
        raleway: ["raleway", "sans-serif"],
      },
      fontSize: {
        xxs: "0.625rem", // 10px
      },
      height: {
        "100": "28rem",
        "110": "32rem",
        "128": "38rem",
        "136": "46rem",
        "138": "48rem",
        "142": "52rem",
        "148": "58rem",
        "158": "76rem",
        "186": "94rem",
        "192": "96rem",
        "200": "100rem",
        "210": "110rem",
      },
      width: {
        "100": "28rem",
        "110": "32rem",
        "128": "38rem",
        "136": "46rem",
        "138": "48rem",
        "142": "52rem",
        "148": "58rem",
        "158": "76rem",
        "186": "94rem",
        "192": "96rem",
        "200": "100rem",
        "210": "110rem",
      },
      maxHeight: {
        "100": "28rem",
        "110": "32rem",
        "128": "38rem",
        "136": "46rem",
        "138": "48rem",
        "142": "52rem",
        "148": "58rem",
        "158": "76rem",
        "186": "94rem",
        "192": "96rem",
        "200": "100rem",
        "210": "110rem",
      },
      maxWidth: {
        "100": "28rem",
        "110": "32rem",
        "128": "38rem",
        "136": "46rem",
        "138": "48rem",
        "142": "52rem",
        "148": "58rem",
        "158": "76rem",
        "186": "94rem",
        "192": "96rem",
        "200": "100rem",
        "210": "110rem",
      },
    },
  },
  content: [],
  plugins: [
    function (api: PluginAPI) {
      const newUtilities = {
        ".w-fill-available": {
          width: [
            "-webkit-fill-available",
            "-moz-fill-available",
            "fill-available",
          ],
        },
        ".h-fill-available": {
          height: [
            "-webkit-fill-available",
            "-moz-fill-available",
            "fill-available",
          ],
        },
      };

      api.addUtilities(newUtilities);
    },
    require("@tailwindcss/aspect-ratio"),
  ],
};
