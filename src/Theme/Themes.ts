

// export type ThemeVariants = "light" | "dark" | "wow" | "saasy" | "alpha" | "zee" 

export interface ThemeVariantProps {
  theme: string;
  wowText1: string;
  wowText2: string;
  wowText1Hover: string;
  wowText1Active: string;

  wowTitle1: string;
  wowTitle2: string;
  wowTitleSpan1: string;
  wowTitleSpan2: string;
  wowTitleGradient1: string;
  wowTitleGradient2: string;
  wowTitleGradient3: string;

  wowDescription1: string;
  wowDescription2: string;

  wowCardBg1: string;
  wowCardBg2: string;
  wowCardBorder1: string;
  wowCardBorder2: string;
  wowFeatureCardBg: string;
  wowFeatureCardBorder: string;

  wowBg1: string;
  wowBgGradient_AB: string;
  wowBgGradient_BA: string;
  wowBgGradient_CD: string;
  wowBgGradient_DC: string;

  wowButtonBgPrimary: string;
  wowButtonBg1: string;
  wowButtonBg2: string;
}

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
  WOW = 'wow',
  SAASY = 'sassy',
  ALPHA = 'alpha',
  ZEE = 'zee',
}

// const themeVariantStyles: Record<ThemeEnum, ThemeVariantProps> = {
//   light: {
//     theme: 'light',
//     wowText1: 'text-black',
//     wowText2: 'white',
//     wowText1Hover: 'text-gray-800',
//     wowText1Active: 'text-blue-500',

//     wowTitle1: 'text-white',
//     wowTitle2: 'text-black',
//     wowTitleSpan1: 'bg-gradient-to-br from-blue-500 to-blue-600',
//     wowTitleSpan2: 'bg-gradient-to-br from-purple-300 to-purple-400', // Example secondary color
//     wowTitleGradient1: 'gradient-title from-gray-500 to-black',
//     wowTitleGradient2: 'gradient-title from-purple-300 to-purple-100',
//     wowTitleGradient3: 'gradient-title from-green-300 to-green-100',

//     wowDescription1: 'text-gray-400',
//     wowDescription2: 'text-gray-600',

//     wowCardBg1: `bg-gradient-to-br from-neutral-100 to-neutral-200 hover:to-neutral-300`,
//     wowCardBg2: `bg-gradient-to-br from-neutral-200 to-neutral-100 ||`,
//     wowCardBorder1: `hover:border-gray-200  `,
//     wowCardBorder2: `border border-green-400 hover:border-gray-200  `,
//     wowFeatureCardBg: `bg-gradient-to-br from-neutral-100 to-neutral-200 ||`,
//     wowFeatureCardBorder: `hover:border-l-2 hover:border-gray-200  `,

//     wowBg1: 'bg-white',
//     wowBgGradient_AB: 'bg-gradient-to-b from-gray-100 to-gray-300',
//     wowBgGradient_BA: 'bg-gradient-to-b from-white to-gray-100',
//     wowBgGradient_CD: 'bg-gradient-to-b from-neutral-900 to-neutral-800',
//     wowBgGradient_DC: 'bg-gradient-to-b from-neutral-800 to-neutral-900',

//     wowButtonBgPrimary: "bg-blue-500 hover:bg-blue-600",
//     wowButtonBg1: "bg-green-500 hover:bg-green-600", 
//     wowButtonBg2: "bg-red-500 hover:bg-red-600", 
//   },

//   
const rough = {
    theme: 'light',
    wowText1: 'black',
    wowText2: 'white',
    wowText1Hover: 'text-gray-800',
    wowText1Active: 'text-blue-500',

    wowTitle1: 'text-white',
    wowTitle2: 'text-black',
    wowTitleSpan1: 'gradient-title from-blue-500 to-blue-600',
    wowTitleSpan2: '',
    wowTitleGradient1: 'gradient-title from-gray-500 to-black',
    wowTitleGradient2: '',
    wowTitleGradient3: '',
  
    wowDescription1: 'text-gray-400',
    wowDescription2: '',

    wowCardBg1: `bg-gradient-to-br from-neutral-800 to-neutral-900 hover:to-neutral-950`,
    wowCardBg2: `bg-gradient-to-br from-neutral-800 to-neutral-900 ||`,
    wowCardBorder1: `hover:border-gray-200  `,
    wowCardBorder2: `border border-green-400 hover:border-gray-200  `,
    wowFeatureCardBg: `bg-gradient-to-br from-neutral-800 to-neutral-900 ||`,
    wowFeatureCardBorder: `hover:border-l-2 hover:border-gray-200  `,
    
    wowBg1: '',
    wowBgGradient_AB: 'bg-gradient-to-b from-gray-100 to-gray-300',
    wowBgGradient_BA: 'bg-gradient-to-b from-white to-gray-100',
    wowBgGradient_CD: 'bg-gradient-to-b from-neutral-900 to-neutral-800',
    wowBgGradient_DC: 'bg-gradient-to-b from-neutral-800 to-neutral-900',

    
    wowButtonBgPrimary: "",
    wowButtonBg1: "",
    wowButtonBg2: ""
}

export const themeVariantStyles: Record<ThemeEnum, ThemeVariantProps> = {
  light: {
    theme: 'light',

    // Text Styles
    wowText1: 'text-neutral-700',
    wowText2: 'text-white',
    wowText1Hover: 'text-gray-800',
    wowText1Active: 'text-blue-500',

    // Title Styles
    wowTitle1: 'text-white',
    wowTitle2: 'text-gray-800',
    wowTitleSpan1: 'gradient-title from-blue-500 to-blue-600',
    wowTitleSpan2: 'gradient-title from-green-400 to-green-500',
    wowTitleGradient1: 'gradient-title from-gray-500 to-black',
    wowTitleGradient2: 'gradient-title from-purple-500 to-purple-600',
    wowTitleGradient3: 'gradient-title from-lime-500 to-lime-700 ',
    // wowTitleGradient3: 'gradient-title from-yellow-500 to-yellow-600 ',

    // Description Styles
    wowDescription1: 'text-gray-400',
    wowDescription2: 'text-gray-500',

    // Card Styles
    wowCardBg1: `bg-gradient-to-br from-neutral-100 to-neutral-200 hover:to-neutral-300`,
    wowCardBg2: `hover:bg-gradient-to-br to-slate-300`,//hover:bg-gradient-to-br to-slate-300
    wowCardBorder1: `border-none hover:border-gray-200`,
    wowCardBorder2: `hover:border hover:border-lime-500 `, //  hover:border hover:border-lime-500
    wowFeatureCardBg: `bg-gradient-to-br from-neutral-100 to-neutral-200`,
    wowFeatureCardBorder: `hover:border-l-2 hover:border-gray-200 `,

    // Background Styles
    wowBg1: 'bg-white',
    wowBgGradient_AB: 'bg-gradient-to-b from-gray-100 to-gray-300',
    wowBgGradient_BA: 'bg-gradient-to-b from-white to-gray-100',
    wowBgGradient_CD: 'bg-gradient-to-b from-neutral-900 to-neutral-800',
    wowBgGradient_DC: 'bg-gradient-to-b from-neutral-800 to-neutral-900',

    // Button Styles
    wowButtonBgPrimary: "bg-blue-500 hover:bg-blue-600",
    wowButtonBg1: "bg-blue-500 hover:bg-blue-600",
    wowButtonBg2: "bg-lime-500 hover:bg-lime-600",
  },
  dark: {
    theme: 'dark',
    wowText1: 'text-white',
    wowText2: 'text-black', 
    wowText1Hover: 'text-gray-200', 
    wowText1Active: 'text-blue-300', 

    wowTitle1: 'text-white',
    wowTitle2: 'text-black',
    wowTitleSpan1: 'gradient-title from-blue-300 to-blue-400', 
    wowTitleSpan2: 'gradient-title from-purple-300 to-purple-400',
    wowTitleGradient1: 'gradient-title from-gray-300 to-gray-100',
    wowTitleGradient2: 'gradient-title from-purple-300 to-purple-100',
    wowTitleGradient3: 'gradient-title from-green-300 to-green-100',

    wowDescription1: 'text-gray-400',
    wowDescription2: 'text-gray-300', 

    wowCardBg1: `bg-gradient-to-br from-gray-800 to-gray-900 hover:to-gray-950`,
    wowCardBg2: `bg-gradient-to-br from-gray-900 to-gray-800 ||`,
    wowCardBorder1: `hover:border-gray-200  `,
    wowCardBorder2: `border border-green-400 hover:border-gray-200  `,
    wowFeatureCardBg: `bg-gradient-to-br from-gray-800 to-gray-900 ||`,
    wowFeatureCardBorder: `hover:border-l-2 hover:border-gray-200  `,

    wowBg1: 'bg-gray-800',
    wowBgGradient_AB: 'bg-gradient-to-b from-gray-800 to-gray-700',
    wowBgGradient_BA: 'bg-gradient-to-b from-gray-700 to-gray-800',
    wowBgGradient_CD: 'bg-gradient-to-b from-neutral-900 to-neutral-800',
    wowBgGradient_DC: 'bg-gradient-to-b from-neutral-800 to-neutral-900',

    wowButtonBgPrimary: "bg-blue-500 hover:bg-blue-600",
    wowButtonBg1: "bg-green-500 hover:bg-green-600", 
    wowButtonBg2: "bg-red-500 hover:bg-red-600", 
  },
  wow: {
    theme: 'wow',
    wowText1: 'text-white',
    wowText2: 'black', 
    wowText1Hover: 'text-gray-200', 
    wowText1Active: 'text-yellow-300', 

    wowTitle1: 'text-white',
    wowTitle2: 'text-black',
    wowTitleSpan1: 'gradient-title from-yellow-300 to-yellow-400', 
    wowTitleSpan2: 'gradient-title from-green-300 to-green-400', 
    wowTitleGradient1: 'gradient-title from-yellow-300 to-yellow-100',
    wowTitleGradient2: 'gradient-title from-purple-300 to-purple-400', 
    wowTitleGradient3: 'gradient-title from-yellow-300 to-yellow-400', 

    wowDescription1: 'text-gray-400',
    wowDescription2: 'text-gray-600',

    wowCardBg1: `bg-gradient-to-br from-orange-100 to-orange-200 hover:to-orange-300`,
    wowCardBg2: `bg-gradient-to-br from-orange-100 to-orange-200`,
    wowCardBorder1: `hover:border-gray-200  `,
    wowCardBorder2: `border border-green-400 hover:border-gray-200  `,
    wowFeatureCardBg: `bg-gradient-to-br from-orange-100 to-orange-200`,
    wowFeatureCardBorder: `hover:border-l-2 hover:border-gray-200  `,

    wowBg1: 'bg-orange-100',
    wowBgGradient_AB: 'bg-gradient-to-b from-orange-500 to-orange-400',
    wowBgGradient_BA: 'bg-gradient-to-b from-orange-400 to-orange-500',
    wowBgGradient_CD: 'bg-gradient-to-b from-neutral-900 to-neutral-800',
    wowBgGradient_DC: 'bg-gradient-to-b from-neutral-800 to-neutral-900',

    wowButtonBgPrimary: "bg-orange-500 hover:bg-orange-600",
    wowButtonBg1: "bg-green-500 hover:bg-green-600",
    wowButtonBg2: "bg-red-500 hover:bg-red-600",
  },
  sassy: {
    theme: 'sassy',
    wowText1: 'text-white',
    wowText2: 'black', 
    wowText1Hover: 'text-gray-200', 
    wowText1Active: 'text-purple-300', 

    wowTitle1: 'text-white',
    wowTitle2: 'text-black',
    wowTitleSpan1: 'gradient-title from-purple-300 to-purple-400', 
    wowTitleSpan2: 'gradient-title from-green-300 to-green-400', 
    wowTitleGradient1: 'gradient-title from-purple-300 to-purple-100',
    wowTitleGradient2: 'gradient-title from-purple-300 to-purple-400', 
    wowTitleGradient3: 'gradient-title from-yellow-300 to-yellow-400', 

    wowDescription1: 'text-gray-400',
    wowDescription2: 'text-gray-600',

    wowCardBg1: `bg-gradient-to-br from-gray-800 to-gray-900 hover:to-gray-950`,
    wowCardBg2: `bg-gradient-to-br from-gray-800 to-gray-900`,
    wowCardBorder1: `hover:border-gray-200  `,
    wowCardBorder2: `border border-green-400 hover:border-gray-200  `,
    wowFeatureCardBg: `bg-gradient-to-br from-gray-800 to-gray-900`,
    wowFeatureCardBorder: `hover:border-l-2 hover:border-gray-200  `,

    wowBg1: 'bg-gray-800',
    wowBgGradient_AB: 'bg-gradient-to-b from-gray-600 to-gray-500',
    wowBgGradient_BA: 'bg-gradient-to-b from-gray-500 to-gray-600',
    wowBgGradient_CD: 'bg-gradient-to-b from-neutral-900 to-neutral-800',
    wowBgGradient_DC: 'bg-gradient-to-b from-neutral-800 to-neutral-900',

    wowButtonBgPrimary: "bg-purple-500 hover:bg-purple-600",
    wowButtonBg1: "bg-green-500 hover:bg-green-600",
    wowButtonBg2: "bg-red-500 hover:bg-red-600",
  },
  alpha: {
    theme: 'alpha',
    wowText1: 'text-white',
    wowText2: 'black', 
    wowText1Hover: 'text-gray-200', 
    wowText1Active: 'text-indigo-300', 

    wowTitle1: 'text-white',
    wowTitle2: 'text-black',
    wowTitleSpan1: 'gradient-title from-indigo-300 to-indigo-400', 
    wowTitleSpan2: 'gradient-title from-green-300 to-green-400', 
    wowTitleGradient1: 'gradient-title from-indigo-300 to-indigo-100',
    wowTitleGradient2: 'gradient-title from-purple-300 to-purple-400', 
    wowTitleGradient3: 'gradient-title from-yellow-300 to-yellow-400', 

    wowDescription1: 'text-gray-400',
    wowDescription2: 'text-gray-600',

    wowCardBg1: `bg-gradient-to-br from-blue-800 to-blue-900 hover:to-blue-950`,
    wowCardBg2: `bg-gradient-to-br from-blue-800 to-blue-900`,
    wowCardBorder1: `hover:border-gray-200  `,
    wowCardBorder2: `border border-green-400 hover:border-gray-200  `,
    wowFeatureCardBg: `bg-gradient-to-br from-blue-800 to-blue-900`,
    wowFeatureCardBorder: `hover:border-l-2 hover:border-gray-200  `,

    wowBg1: 'bg-blue-800',
    wowBgGradient_AB: 'bg-gradient-to-b from-blue-600 to-blue-500',
    wowBgGradient_BA: 'bg-gradient-to-b from-blue-500 to-blue-600',
    wowBgGradient_CD: 'bg-gradient-to-b from-neutral-900 to-neutral-800',
    wowBgGradient_DC: 'bg-gradient-to-b from-neutral-800 to-neutral-900',

    wowButtonBgPrimary: "bg-blue-500 hover:bg-blue-600",
    wowButtonBg1: "bg-green-500 hover:bg-green-600",
    wowButtonBg2: "bg-red-500 hover:bg-red-600",
  },
  zee: {
    theme: 'zee',
    wowText1: 'text-white',
    wowText2: 'black', 
    wowText1Hover: 'text-gray-200', 
    wowText1Active: 'text-green-300', 

    wowTitle1: 'text-white',
    wowTitle2: 'text-black',
    wowTitleSpan1: 'gradient-title from-green-300 to-green-400', 
    wowTitleSpan2: 'gradient-title from-green-300 to-green-400', 
    wowTitleGradient1: 'gradient-title from-green-300 to-green-100',
    wowTitleGradient2: 'gradient-title from-purple-300 to-purple-400', 
    wowTitleGradient3: 'gradient-title from-yellow-300 to-yellow-400', 

    wowDescription1: 'text-gray-400',
    wowDescription2: 'text-gray-600',

    wowCardBg1: `bg-gradient-to-br from-green-800 to-green-900 hover:to-green-950`,
    wowCardBg2: `bg-gradient-to-br from-green-800 to-green-900`,
    wowCardBorder1: `hover:border-gray-200  `,
    wowCardBorder2: `border border-green-400 hover:border-gray-200  `,
    wowFeatureCardBg: `bg-gradient-to-br from-green-800 to-green-900`,
    wowFeatureCardBorder: `hover:border-l-2 hover:border-gray-200  `,

    wowBg1: 'bg-green-800',
    wowBgGradient_AB: 'bg-gradient-to-b from-green-600 to-green-500',
    wowBgGradient_BA: 'bg-gradient-to-b from-green-500 to-green-600',
    wowBgGradient_CD: 'bg-gradient-to-b from-neutral-900 to-neutral-800',
    wowBgGradient_DC: 'bg-gradient-to-b from-neutral-800 to-neutral-900',

    wowButtonBgPrimary: "bg-green-500 hover:bg-green-600",
    wowButtonBg1: "bg-green-500 hover:bg-green-600",
    wowButtonBg2: "bg-red-500 hover:bg-red-600",
  },
}

/*
 light: {
    theme: 'light',
    wowText: 'text-gray-700',
    wowTextHover: 'text-gray-800',
    wowTextActive: 'text-blue-500',

    wowTitle1: 'text-white',
    wowTitle2: '',
    wowTitleSpan1: 'gradient-title from-blue-500 to-blue-600',
    wowTitleSpan2: '',
    wowTitle1Gradient: 'gradient-title from-gray-500 to-black',
    wowTitle2Gradient: '',

    wowDescription1: 'text-gray-400',
    wowDescription2: '',

    wowBg1: '',
    wowBg2: '',
    wowBgHover: '',

    wowCardBg1: `bg-gradient-to-br from-neutral-800 to-neutral-900 hover:to-neutral-950`,
    wowCardBg2: `bg-gradient-to-br from-neutral-800 to-neutral-900 ||`,
    wowFeatureCardBorder: `hover:border-l-2 hover:border-gray-200  `,
    wowCardBorder1: `border-none hover:border-gray-200  `,
    wowCardBorder2: `border border-green-400 hover:border-gray-200  `,

    wowBgGradient_AB: 'bg-gradient-to-b from-gray-100 to-gray-300',
    wowBgGradient_BA: 'bg-gradient-to-b from-white to-gray-100',
    wowBgGradient_CD: 'bg-gradient-to-b from-neutral-900 to-neutral-800',
    wowBgGradient_DC: 'bg-gradient-to-b from-neutral-800 to-neutral-900',

    wowBorder: 'border-neutral-700',
    wowBorderHover: 'border-gray-300',
  },
*/