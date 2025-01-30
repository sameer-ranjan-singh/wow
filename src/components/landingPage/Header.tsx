import { useContext, useState } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";
import ButtonLP from "./ButtonLP";

export const linkToObj = [
  { href: "intro", label: "Home" },
  { href: "features", label: "Features" },
  { href: "portfolio", label: "Portfolio" },
  { href: "services", label: "Services" },
  { href: "plans", label: "Pricing" },
];

const Header = () => {
  const { themeStyle } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("home");
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };
  return (
    <header
      id="header"
      className={`z-20 h-14 opacity-90 py-2 px-4 md:px-10 flex md:justify-around justify-between items-center fixed w-full ${themeStyle.header.bgGradient} `}
    >
      <h1
        className={`font-extrabold font-sans text-xl ${themeStyle.header.title}`}
      >
        Wow
      </h1>
      <div className="md:flex gap-4 text-md text-center font-semibold hidden">
        {linkToObj.map((obj) => (
          <a
            key={obj.label}
            href={"#" + `${obj.href}`}
            onClick={() => handleSectionClick(obj.href)}
            className={
              activeSection === obj.href
                ? `${themeStyle.header.text_color_primary} font-bold w-16 scroll-smooth`
                : `hover:font-bold w-16 scroll-smooth ${themeStyle.header.text_color_secondary}`
            }
          >
            {obj.label}
          </a>
        ))}
      </div>
      <div
        className={`${themeStyle.header.text_color_primary} flex justify-center items-center gap-4 `}
      >
        {/* <ThemeIcon /> */}
        <ButtonLP
          bgVariant="bgPrimary"
          textVariant="textPrimary"
          borderVariant="borderPrimary"
          textValue="Start Free"
          pad={`px-2 py-1 rounded-full md:rounded-md`}
        />
      </div>
    </header>
  );
};

export default Header;
