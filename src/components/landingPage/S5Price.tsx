import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";
import { data } from "./data";
import { CheckIcon } from "../../icons/CheckIcon";
import { useNavigate } from "react-router-dom";

const S5Price = () => {
  const { themeStyle } = useContext(ThemeContext);
  const navigate = useNavigate();

  const servicePlans = data?.section5;

  return (
    <section
      id="plans"
      className={`w-full py-20 ${themeStyle.price.bgGradient}`}
    >
      <div className="min-h-screen flex flex-col justify-center items-center mx-2 gap-10">
        <div className="">
          <h3
            className={`text-2xl md:text-5xl font-semibold mb-1 text-center font-serif ${themeStyle.price.title}`}
          >
            {servicePlans.title}
          </h3>
          <p
            className={`text-sm md:text-lg ${themeStyle.price.description} text-center font-mono`}
          >
            # {servicePlans.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {servicePlans.cards.map((card) => (
            <div
              className={`m-5 shadow-lg rounded-2xl p-10 font-mono flex flex-col text-start justify-start gap-4 min-w-96 ${themeStyle.price.card.bgGradient} ${themeStyle.price.card.border}`}
            >
              <h1
                className={`mb-2 text-xl font-extrabold text-center ${themeStyle.price.card.text_color_primary}`}
              >
                {card.planType}
              </h1>
              <h1
                className={`text-lg md:text-5xl ${themeStyle.price.card.title} font-bold  text-center font-sans`}
              >
                {card.price}
                <span
                  className={`text-sm md:text-lg ${themeStyle.price.card.description}`}
                >
                  /Month
                </span>
              </h1>
              <hr />
              <div className="mb-4">
                {card.services.map((service) => (
                  <div className="flex gap-4 justify-start items-center mb-2">
                    <div className="text-green-600">
                      <CheckIcon />
                    </div>
                    <p
                      className={`${themeStyle.price.card.description} font-semibold font-mono`}
                    >
                      {service}
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate("/signup")}
                className={`w-full flex justify-center items-center font-bold px-4 py-3 ${themeStyle.price.card.btn.bgSolid} ${themeStyle.price.card.btn.text} font-sans rounded-lg`}
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

export default S5Price;
