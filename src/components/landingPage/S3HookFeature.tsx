import { useContext, useState } from "react";
import { ThemeContext } from "./theme/ThemeProvider";
import { data } from "./data";
import { LandingPage } from "../../pages/LandingPage";
import beforeImage from "../../icons/BeforeImage.png";

const S3HookFeature = () => {
  const { themeStyle } = useContext(ThemeContext);
  const portfolioFeature = data?.section3;
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <section
      id="portfolio"
      className={`w-full pt-10 ${themeStyle.hookFeature.bgGradient}`}
    >
      <div className="min-h-screen flex flex-col justify-center items-center py-10 mx-2 gap-10">
        <div className="">
          <h1
            className={`text-2xl md:text-5xl font-semibold mb-1 text-center font-serif ${themeStyle.hookFeature.title}`}
          >
            {portfolioFeature.title}
          </h1>
          <h2
            className={`text-sm md:text-lg mx-5  ${themeStyle.hookFeature.description} text-center font-sans`}
          >
            # {portfolioFeature.description}
          </h2>
        </div>
        <div className="mx-4 gap-16 flex flex-col justify-center items-center">
          <div className="w-5/6 gap-5 flex flex-col items-center bg-neutral-700 bg-opacity-50 p-2 rounded-lg">
            <div className="flex w-full justify-center bg-neutral-600  rounded-lg p-1">
              <button
                onClick={() => setShowPortfolio(!showPortfolio)}
                className={`${
                  showPortfolio
                    ? `bg-neutral-600 text-blue-100`
                    : `text-indigo-100 bg-indigo-500`
                } w-full flex justify-start md:justify-center items-center gap-2 px-4 py-3  font-mono rounded-lg text-black`}
              >
                Before
              </button>
              <button
                onClick={() => setShowPortfolio(!showPortfolio)}
                className={`${
                  showPortfolio
                    ? `text-indigo-100 bg-indigo-500`
                    : `bg-neutral-600 text-blue-100 animate-pulse`
                } w-full flex justify-start md:justify-center items-center gap-2 px-4 py-3 font-mono rounded-lg text-black`}
              >
                After
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto w-80 md:w-full">
              <div className="rounded-3xl w-full">
                {showPortfolio ? (
                  <LandingPage />
                ) : (
                  <img
                    src={showPortfolio ? "" : beforeImage}
                    alt="After"
                    className="rounded-3xl "
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start ">
            {portfolioFeature.cards.map((folio) => (
              <div className="w-full flex mb-4 gap-2" key={folio.title}>
                <div className="flex justify-start">
                  <folio.icon />
                </div>
                <div className="flex flex-col items-start gap-1 mb-3">
                  <h3
                    className={`font-bold text-md ${themeStyle.hookFeature.title} text-xl`}
                  >
                    {folio.title}
                  </h3>
                  <h4
                    className={`font-bold text-sm md:text-md ${themeStyle.hookFeature.description}`}
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
