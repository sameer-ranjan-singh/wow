export interface ThemeVariantProps {
  theme: String
  wowBg?: String 
  wowText?: String 
  wowBorder?: String
  wowHoverBg?: String 
  wowHoverBorder?: String 
  wowBgGradient?: String 
  wowTextGradient?: String
  BgGradient?: String
}

export type ThemeVariants = "light" | "dark" | "wow" | "saasy" | "alpha" | "zee" 
export enum ThemeEnum {
  LIGHT= "light",
  DARK= "dark",
  WOW= "wow",
  SAASY= "saasy",
  ALPHA= "alpha",
  ZEE= "zee",
  
}

export const themeVariantStyles: Record<ThemeEnum, ThemeVariantProps> = {
  light: {
    theme: 'light',
    wowBg: 'bg-white', 
    wowText: 'text-gray-700', 
    wowHoverBg: 'bg-gray-100', 
    wowBgGradient: 'bg-gradient-to-r from-gray-100 to-white', 
    wowHoverBorder: 'border-gray-300', 
    wowBorder: 'border-gray-200', 
    wowTextGradient: 'bg-gradient-to-r from-gray-700 to-gray-500', 
    BgGradient: 'bg-gradient-to-r from-gray-100 to-white', 
  },
  dark: {
    theme: 'dark',
    wowBg: 'bg-gray-700', 
    wowText: 'text-white', 
    wowHoverBg: 'bg-gray-800', 
    wowBgGradient: 'bg-gradient-to-r from-gray-800 to-gray-700', 
    wowHoverBorder: 'border-gray-500', 
    wowBorder: 'border-gray-600', 
    wowTextGradient: 'bg-gradient-to-r from-white to-gray-300', 
    BgGradient: 'bg-gradient-to-r from-gray-800 to-gray-700', 
  },
  wow: {
    theme: 'wow',
    wowBg: 'bg-orange-400', 
    wowText: 'text-white', 
    wowHoverBg: 'bg-orange-500', 
    wowBgGradient: 'bg-gradient-to-r from-orange-500 to-orange-400', 
    wowHoverBorder: 'border-orange-600', 
    wowBorder: 'border-orange-400', 
    wowTextGradient: 'bg-gradient-to-r from-white to-gray-300', 
    BgGradient: 'bg-gradient-to-r from-orange-500 to-orange-400', 
  },
  saasy: {
    theme: 'sassy',
    wowBg: 'bg-gray-500', 
    wowText: 'text-white', 
    wowHoverBg: 'bg-gray-600', 
    wowBgGradient: 'bg-gradient-to-r from-gray-600 to-gray-500', 
    wowHoverBorder: 'border-gray-400', 
    wowBorder: 'border-gray-500', 
    wowTextGradient: 'bg-gradient-to-r from-white to-gray-300', 
    BgGradient: 'bg-gradient-to-r from-gray-600 to-gray-500', 
  },
  alpha: {
    theme: 'alpha',
    wowBg: 'bg-blue-500', 
    wowText: 'text-white', 
    wowHoverBg: 'bg-blue-600', 
    wowBgGradient: 'bg-gradient-to-r from-blue-600 to-blue-500', 
    wowHoverBorder: 'border-blue-700', 
    wowBorder: 'border-blue-600', 
    wowTextGradient: 'bg-gradient-to-r from-white to-gray-300', 
    BgGradient: 'bg-gradient-to-r from-blue-600 to-blue-500', 
  },
  zee: {
    theme: 'zee',
    wowBg: 'bg-green-500', 
    wowText: 'text-white', 
    wowHoverBg: 'bg-green-600', 
    wowBgGradient: 'bg-gradient-to-r from-green-600 to-green-500', 
    wowHoverBorder: 'border-green-700', 
    wowBorder: 'border-green-600', 
    wowTextGradient: 'bg-gradient-to-r from-white to-gray-300', 
    BgGradient: 'bg-gradient-to-r from-green-600 to-green-500', 
  },
};