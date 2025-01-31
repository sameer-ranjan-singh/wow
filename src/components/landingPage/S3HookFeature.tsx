import { useContext, useState } from "react";
import { ThemeContext } from "./theme/ThemeProvider";
import { data } from "./data";
import { LandingPage } from "../../pages/LandingPage";
import beforeImage from "../../icons/BeforeImage.png";

const S3HookFeature = () => {
  const { themeStyle } = useContext(ThemeContext);
  const portfolioFeature = data?.section3;
  const [afterBox, setAfterBox] = useState(false);

  return (
    <section
      id="portfolio"
      className={`w-full ${themeStyle.hookFeature.bgGradient}`}
    >
      <div className="min-h-screen flex flex-col justify-center items-center py-10 mx-2 gap-10">
        <div className="">
          <h1
            className={`text-2xl md:text-5xl font-semibold mb-1 text-center font-serif ${themeStyle.hookFeature.title}`}
          >
            {portfolioFeature.title}
          </h1>
          <h2
            className={`text-sm md:text-lg  ${themeStyle.hookFeature.description} text-center font-sans`}
          >
            # {portfolioFeature.description}
          </h2>
        </div>
        <div className=" m-2 p-4 gap-16 flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 gap-5 flex flex-col items-center bg-neutral-700 bg-opacity-50 p-5 rounded-lg">
            <div className="flex w-full justify-center bg-neutral-600  rounded-lg p-1">
              <button
                onClick={() => setAfterBox(!afterBox)}
                className={`${
                  afterBox
                    ? `bg-neutral-600 text-blue-100`
                    : `text-indigo-100 bg-indigo-500`
                } w-full flex justify-start md:justify-center items-center gap-2 px-4 py-3  font-mono rounded-lg`}
              >
                Before
              </button>
              <button
                onClick={() => setAfterBox(!afterBox)}
                className={`${
                  afterBox
                    ? `text-indigo-100 bg-indigo-500`
                    : `bg-neutral-600 text-blue-100 animate-pulse`
                } w-full flex justify-start md:justify-center items-center gap-2 px-4 py-3  font-mono rounded-lg`}
              >
                After
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto w-full">
              <div className="rounded-3xl ">
                {afterBox ? (
                  <LandingPage />
                ) : (
                  <img
                    src={afterBox ? "" : beforeImage}
                    alt="After"
                    className="rounded-3xl"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center p-4">
            {portfolioFeature.cards.map((folio) => (
              <div className="flex gap-6 mb-4" key={folio.title}>
                <div className="w-1/12 flex justify-start">
                  <folio.icon />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                  <h3
                    className={`font-bold text-md ${themeStyle.hookFeature.title} text-xl`}
                  >
                    {folio.title}
                  </h3>
                  <h4
                    className={`font-bold text-md ${themeStyle.hookFeature.description}`}
                  >
                    {folio.detail}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default S3HookFeature;
