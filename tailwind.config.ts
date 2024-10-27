import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        'osc':'osc',
        'os':'os',
        'mt':'mt',
      },
      backgroundImage: {
        'first': "url('./components/img/home-banner.jpg')",
        'third': "url('./components/img/gym.jpg')",
        'brucelee': "url('./components/img/home-testimonial-bg.jpg')",
        'footer': "url('./components/img/dumbells.jpg')",
      
       
     
      },
    },
  },
  plugins: [],
};
export default config;
