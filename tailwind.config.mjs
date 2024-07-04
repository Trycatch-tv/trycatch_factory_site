/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily:{
    'sans': 'Montserrat, sans-serif'
    },
    extend: {
    
      flexBasis: {
        'content': 'content',
      },
      backgroundImage: {
        'heroBgImg': 'url("/public/img/SLIDE.webp")',
        'heroBgImgService':'url("/public/img/SERVICIOS.webp")',
        'weOfferBgServices':'url("/public/img/QUEOFRECEMOS.webp")',
        'custom-bg': "url('/public/img/PORTAFOLIO.webp')",
        'como-bg':"url('/public/img/COMOFUNCIONA.webp')",
        'heroBgImgTeam': 'url("/public/img/EQUIPO.webp")',
        'heroBgImgResources': 'url("/public/img/COMOFUNCIONA.webp")',
        'contactbg':'url("/public/img/PAGECONTACTO.webp")',
        'contact':'url(/public/img/LLAMADA.webp)',
        'procesos':'url(/public/img/PROCESOS.webp)',
        'proudTeam':'url(/public/img/INCLUSION.webp)'

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
        "tcf-backg": "#0062FF",
        "tcf-menu":"#FFFFFF"
      },
      width:{
        "60":"60px",
        "57":"57px"
      },
      animation: {
        'openModal': 'openModal 0.5s ease-in-out',
      },
      keyframes: {
        'openModal': {
          '0%': { opacity: 0,transform: 'translateY(-100%)' },
          '100%': { opacity: 1,transform: 'translateY(0)' },
        },
      }
    }
  },
  plugins: [require("flowbite/plugin") , require('@tailwindcss/typography')], 
  
}


