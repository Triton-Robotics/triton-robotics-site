import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
