import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";

export interface FeatureCard {
    title: String;
    icon: () => JSX.Element | "#";
    detail: String;
  }

export const FeatureCard = ({ card }: { card: FeatureCard }) => {
      const { themeStyle} = useContext(ThemeContext);
    
    return (
      // <div className="flex flex-col justify-start shadow-lg rounded-lg w-80 p-6 border-l-4 border-gray-400 bg-gradient-to-br from-neutral-800 to-neutral-900 || hover:border-gray-200  hover:to-neutral-950">
      <div className={`flex flex-col justify-start shadow-lg rounded-lg w-80 p-6 ${themeStyle.features.card.bgGradient} ${themeStyle.features.card.border} `}>
        <div className="mb-4"><card.icon/></div>
        <h1 className={`font-bold mb-2 text-xl ${themeStyle.features.card.title}`}>{card?.title}</h1>
        <h2 className={`${themeStyle.features.card.description} font-semibold text-md font-mono`}>
          {card?.detail}
        </h2>
      </div>
    );
  };