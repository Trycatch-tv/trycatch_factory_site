/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      flexBasis: {
        'content': 'content',
      },
      backgroundImage: {
        'heroBgImg': 'url("/public/img/HeroImg.jpg")',
      },
      colors: {
        "tcf-black": "#232122",
        "tcf-black-l": "#474646",
        "tcf-cyan": "#A2F2F2",
        "tcf-yellow": "#EDF2C2",
        "tcf-gray": "#B5B5B5",
        "tcf-gray-l": "#F2F2F2",
        "tcf-gray-foot":"#535353",
        "tcf-blue": "#172554",
        "tcf-info": "#D6EBEE",
      },
      width:{
        "60":"60px",
        "57":"57px"
      }
    },
  },
  plugins: [require("flowbite/plugin")],
  
}


