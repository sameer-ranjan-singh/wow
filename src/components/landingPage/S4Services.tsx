import { useContext } from "react";
import { ThemeContext } from "./theme/ThemeProvider";
import { data } from "./data";
import { CheckIcon } from "../../icons/CheckIcon";
import { useNavigate } from "react-router-dom";

const S4Services = () => {
  const { themeStyle } = useContext(ThemeContext);
  const services = data?.section4;
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className={`w-full pb-20 ${themeStyle.services.bgGradient}`}
    >
      <div className="min-h-screen flex flex-col justify-center items-center mx-2 gap-10">
        <div className="">
          <h3
            className={`text-2xl md:text-5xl font-semibold mb-1 text-center font-serif ${themeStyle.services.title}`}
          >
            {services.title}
          </h3>
          <p
            className={`text-sm md:text-lg  ${themeStyle.services.description} text-center font-mono`}
          >
            # {services.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {services.cards.map((card) => (
            <div
              className={`m-5 shadow-lg rounded-lg p-10 flex flex-col text-start justify-start gap-4 min-w-96 ${themeStyle.services.card.bgGradient}`}
            >
              <div className="mb-4 animate-pulse">
                <card.icon />
              </div>
              <h1
                className={`text-lg md:text-2xl ${themeStyle.services.card.title} font-bold text-start font-sans`}
              >
                {card.title}
              </h1>
              <div className="mb-4">
                {card.services.map((service) => (
                  <div className="flex gap-4 justify-start items-center mb-2">
                    <div className="text-green-600">
                      <CheckIcon />
                    </div>
                    <p
                      className={`${themeStyle.services.card.description} font-semibold font-mono`}
                    >
                      {service}
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate("/signup")}
                className={`w-full px-4 py-3 ${themeStyle.services.card.btn.bgSolid} ${themeStyle.services.card.btn.text} font-sans rounded-lg `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default S4Services;
