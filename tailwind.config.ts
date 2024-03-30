import type { Config } from "tailwindcss";


const config: Config  = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'red-100': '#C81D25',
        'red-60': '#FF757C'
      },
     
      
      
   
      
      
    },
    
  },
  plugins: [
    require("flowbite/plugin"),
    require("@material-tailwind/react/utils/withMT")
  ],
};
export default config;
