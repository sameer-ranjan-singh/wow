import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Theme/ThemeProvider";
import { useContext } from "react";

interface ButtonProps {
  textVariant: "textPrimary" | "textSecondary";
  bgVariant: "bgPrimary" | "bgSecondary";
  borderVariant: "borderPrimary" | "borderSecondary";
  textValue: String
  helperIcon?: React.ReactNode
  pad?: String
}

const ButtonLP = ({ textVariant, bgVariant, borderVariant, textValue= "Get Started", helperIcon, pad="md:px-10 md:py-4  rounded-lg" }: ButtonProps) => {
  const { themeStyle } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/signup")}
      className={`flex justify-center items-center px-3 ${pad} py-2 ${pad} md:text-lg font-sans font-bold gap-2 ${themeStyle.intro.btn[bgVariant]} ${themeStyle.intro.btn[textVariant]} ${themeStyle.intro.btn[borderVariant]}`}
    >
      {textValue}{helperIcon}
    </button>
  );
};

export default ButtonLP;
