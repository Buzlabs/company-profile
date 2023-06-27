/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "8px 8px 0px rgba(0, 0, 0)",
        "4xl": [
          "10px 10px 0px rgba(0, 0, 0)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      boxShadow: {
        "2xl": "0px 8px 0px rgba(0, 0, 0)",
        "3xl": "10px 8px 0px rgba(0, 0, 0)",
      },
      backgroundColor: {
        "custom-blue": "#2062C5",
        "custom-yellow": "#F7E485",
        "custom-red": "#FF9AA3",
      },
      colors: {
        "custom-blue": "#ffffff",
      },
    },
  },
  plugins: [],
};
