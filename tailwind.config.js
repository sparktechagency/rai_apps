// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src directory
    "./components/**/*.{js,jsx,ts,tsx}", // Include all files in the components directory
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // surface
        surfacePrimary: "#F5F4F7",
        surfaceAction: "#5700FE",
        surfaceActionTertiary: "#8E54FE",
        surfaceSecondary: "#F2F1F5",

        // text
        textPrimary: "#08002B",
        textPrimaryInverted: "#fff",
        textSecondary: "#5C526D",
        textAction: "#5700FE",
        textTertiary: "#C5BFD1",

        // border
        borderTertiary: "#D8D4E0",
        borderAction: "#5700FE",

        // icon
        iconTertiary: "#C5BFD1",
        iconActionTertiary: "#C5BFD1",
        iconPrimary: "#09020D",
        iconSecondary: "#81739A",
        iconPrimaryInverted: "#f4f4f4",
      },
      fontFamily: {
        Regular: ["Urbanist-Regular"],
        Medium: ["Urbanist-Medium"],
        MediumItalic: ["Urbanist-MediumItalic"],
        SemiBold: ["Urbanist-SemiBold"],
        Bold: ["Urbanist-Bold"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
