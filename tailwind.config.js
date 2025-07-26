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
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}', // Include all files in the src directory
    './components/**/*.{js,jsx,ts,tsx}', // Include all files in the components directory
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // surface
        surfaceAction: '#5700FE',
        surfaceSecondary: '#F2F1F5',

        // text
        textPrimaryInverted: '#fff',
        textSecondary: '#5C526D',
        textAction: '#5700FE'
      },
      fontFamily: {
        Regular: ['Urbanist-Regular'],
        Medium: ['Urbanist-Medium'],
        MediumItalic: ['Urbanist-MediumItalic'],
        SemiBold: ['Urbanist-SemiBold'],
        Bold: ['Urbanist-Bold'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};