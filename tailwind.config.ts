import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'avo-yellow': "#f3ffca",
        'avo-green': "#94cc80",
        'avo-brown': "#4d3636",
        'avo-tan': '#e3dcd0',
        'avo-light-green': "#bbf9c7"
      },
    },
  },
  plugins: [],
} satisfies Config;
