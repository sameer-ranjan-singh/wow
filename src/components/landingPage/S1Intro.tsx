import { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeProvider";
import { data } from "./data";
import ButtonLP from "./ButtonLP";
import { RightArrowIcon } from "../../icons/RightArrowIcon";
import { ThemeIcon } from "../../Theme/ThemeIcon";

const S1Intro = () => {
  const { themeStyle } = useContext(ThemeContext);
  const intro = data?.section1;

  return (
    <section
      id="intro"
      className={`pt-20 w-full ${themeStyle.intro.bgGradient}`}
    >
    <div className="fixed top-16 right-3 md:right-14">
      <ThemeIcon />
    </div>
      <div className="min-h-screen flex flex-wrap justify-center items-center m-2 gap-4">
        <div className="w-full md:w-2/6 md:mx-0 flex flex-col justify-center">
          <h1
            className={`md:text-start text-center text-3xl md:text-6xl font-extrabold ${themeStyle.intro.title1}`}
          >
            {intro.span1}
            <br />
            {intro.span2}
            <br />
            <span className={`${themeStyle.intro.span1}`}>{intro.span3}</span>
          </h1>
          <h2
            className={`text-sm md:text-lg  md:text-start text-center font-bold my-5 ${themeStyle.intro.description}`}
          >
            {intro.description}
          </h2>
          <div className="flex flex-col md:flex-row  gap-2 md:gap-4 mt-8">
            <ButtonLP
              textValue="Try Demo"
              bgVariant="bgPrimary"
              textVariant="textPrimary"
              borderVariant="borderPrimary"
              helperIcon={<RightArrowIcon />}
            />
            <ButtonLP
              textValue="learn More"
              bgVariant="bgSecondary"
              textVariant="textSecondary"
              borderVariant="borderSecondary"
            />
          </div>
        </div>
        <div className="flex justify-end items-center w-5/6 md:w-1/2">
          <div className=" w-full md:w-9/12 p-6 rounded-2xl shadow-xl bg-opacity-50 bg-gradient-to-br from-neutral-700 to-neutral-800  hover:from-neutral-900 hover:to-neutral-800 transition ease-in-out ">
            <div className="bg-neutral-800 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-end mb-3 space-x-2">
                <div className="h-2 md:h-3 w-2 md:w-3 rounded-full bg-red-500"></div>
                <div className="h-2 md:h-3 w-2 md:w-3 rounded-full bg-yellow-500"></div>
                <div className="h-2 md:h-3 w-2 md:w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-3">
                <div className="h-2 md:h-4 bg-neutral-600 rounded-full w-3/4"></div>
                <div className="h-2 md:h-4 bg-neutral-600 rounded-full w-1/2"></div>
                <div className="h-2 md:h-4 bg-neutral-600 rounded-full w-5/6"></div>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg mb-4 bg-neutral-800">
              <div className="w-4 md:w-8 h-4 md:h-8 bg-indigo-500 rounded-full"></div>
              <div className="h-4 md:h-4 bg-neutral-600 rounded-full w-2/3 "></div>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="h-10 md:h-20 bg-neutral-700 rounded-lg hover:animate-pulse"></div>
              <div className="h-10 md:h-20 bg-neutral-700 rounded-lg hover:animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default S1Intro;
