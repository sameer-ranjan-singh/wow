import { useContext } from "react";
import { ThemeContext } from "./theme/ThemeProvider";

export interface FeatureCard {
    title: String;
    icon: () => JSX.Element | "#";
    detail: String;
  }

export const FeatureCard = ({ card }: { card: FeatureCard }) => {
      const { themeStyle} = useContext(ThemeContext);
    
    return (
      <div className={`flex flex-col justify-start shadow-sm md:shadow-md rounded-lg max-w-80 p-6 ${themeStyle.features.card.bgGradient} ${themeStyle.features.card.border} `}>
        <div className="mb-4"><card.icon/></div>
        <h1 className={`font-bold mb-2 text-lg ${themeStyle.features.card.title}`}>{card?.title}</h1>
        <h2 className={`${themeStyle.features.card.description} text-sm md:text-md font-semibold font-mono`}>
          {card?.detail}
        </h2>
      </div>
    );
  };