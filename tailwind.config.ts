// import type { Config } from "tailwindcss";

// export default {
//   content: ["./app/**/*.{ts,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{ts,tsx}"],
//   theme: { extend: {} },
//   plugins: [],
// } satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { 
    extend: {
      fontFamily: {
        // This sets Inter as the primary sans-serif font
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;