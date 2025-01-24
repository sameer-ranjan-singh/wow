import { useNavigate } from "react-router-dom";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { useContext, useState } from "react";

import beforeImage from "../icons/BeforeImage.png";
import { CheckIcon } from "../icons/CheckIcon";
import { UserIcon } from "../icons/UserIcon";

import { ThemeContext } from "../Theme/ThemeProvider";
import { SelectTheme, ThemeIcon } from "../Theme/ThemeIcon";
import { FeatureCard } from "../components/landingPage/FeatureCard";
import { AllSections } from "../components/landingPage/AllSections";

const linkToObj = [
  { href: "intro", label: "Home" },
  { href: "features", label: "Features" },
  { href: "portfolio", label: "Portfolio" },
  { href: "services", label: "Services" },
  { href: "plans", label: "Pricing" },
];


export const LandingPage = () => {
  const navigate = useNavigate();
  const [showTheme, setShowTheme] = useState(false);

  const { themeStyle, themeName, toggleTheme } = useContext(ThemeContext);
  const [afterBox, setAfterBox] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const intro = AllSections?.section1;
  const features = AllSections?.section2;
  const portfolioFeature = AllSections?.section3;
  const services = AllSections?.section4;
  const servicePlans = AllSections?.section5;
  const testimonials = AllSections?.section6;
  const footer = AllSections?.section9;
  return (
    <div className="flex flex-col bg-gray-100 scroll-smooth">
      {/* Header */}
      <header
        id="header"
        className={`py-2 md:px-0 pl-10 flex md:justify-around justify-between items-center fixed w-full bg-opacity-70 ${themeStyle.wowBgGradient_BA} `}
      >
        <h1 className={`font-extrabold font-sans text-xl ${themeStyle.wowText1}`}>Wow</h1>
        <div className="md:flex gap-4 text-md text-center font-semibold hidden">
          {linkToObj.map((obj) => (
            <a
              key={obj.label}
              href={"#" + `${obj.href}`}
              onClick={() => handleSectionClick(obj.href)}
              className={
                activeSection === obj.href
                  ? `${themeStyle.wowText1Active}  w-16 scroll-smooth`
                  : `hover:font-bold w-16 scroll-smooth  ${themeStyle.wowText1Hover} ${themeStyle.wowText1}`
              }
            >
              {obj.label}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 ">
          <div onClick={() => setShowTheme(!showTheme)} className={`${themeStyle.wowText1}`}>
            <ThemeIcon />
          </div>
          <button
            onClick={() => navigate("/signup")}
            className="w-36 flex justify-center items-center px-2 py-2 border bg-blue-500 hover:bg-blue-600 text-white font-mono rounded-lg"
          >
            Get Started
          </button>
        </div>
      </header>
      {showTheme && (
        <div className="fixed md:right-72 top-14 right-0">
          <SelectTheme />
        </div>
      )}

      {/* Section-1 : Basic Intro */}
      <section
        id="intro"
        className={`${themeStyle.wowBgGradient_AB}`}
        // className="bg-gradient-to-b from-gray-100 to-gray-300 "
      >
        <div className="min-h-screen flex flex-wrap justify-center items-center m-2 my-10 gap-4">
          <div className="w-full md:w-2/6 md:mx-0 flex flex-col justify-center">
            {/* <h1 className="md:text-start text-center text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-gray-500 to-black"> */}
            <h1
              className={`md:text-start text-center text-3xl md:text-6xl font-extrabold ${themeStyle.wowTitleGradient1}`}
            >
              {intro.span1}
              <br />
              {intro.span2}
              <br />
              {/* <span className=" bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-600"> */}
              <span className={`${themeStyle.wowTitleSpan1}`}>
                {intro.span3}
              </span>
            </h1>
            {/* <h2 className="md:text-start text-center font-bold my-5 text-gray-400"> */}
            <h2
              className={`md:text-start text-center font-bold my-5 ${themeStyle.wowDescription1}`}
            >
              {intro.description}
            </h2>
            <div className="flex flex-col md:flex-row  gap-2 md:gap-4 mt-8">
              <button
                onClick={() => navigate("/signup")}
                className="w-full md:w-36 flex justify-start md:justify-center items-center gap-2 px-4 py-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 text-white font-mono rounded-lg "
              >
                Try Demo
                <RightArrowIcon />
              </button>
              <button
                onClick={() => navigate("/")}
                className="w-full md:w-36 flex justify-start md:justify-center items-center gap-2 px-4 py-3 border border-blue-500 text-blue-500 hover:text-blue-600 font-mono rounded-lg"
              >
                Learn More
              </button>
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

      {/* Section-2 : All Features */}
      <section
        id="features"
        // className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white border-b border-b-neutral-700"
        className={`${themeStyle.wowBgGradient_CD} ${themeStyle.wowTitle1} ${themeStyle.wowCardBorder1} border-b border-b-neutral-700`}
      >
        <div className="min-h-screen flex flex-col justify-center items-center py-10 mx-2 gap-20">
          <div className="">
            <h1 className="text-2xl md:text-4xl font-semibold mb-5 text-center font-serif">
              {features.title}
            </h1>
            <p
              className={`text-xl md:text-2xl ${themeStyle.wowDescription1} text-center font-sans`}
            >
              {features.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {features.cards.map((eachCard) => (
              <FeatureCard card={eachCard} />
            ))}
          </div>
        </div>
      </section>

      {/* Section-3 : Highlighted Feature- CV to Portfolio  */}
      <section
        id="portfolio"
        className={themeStyle.wowBgGradient_DC}
      >
        <div className="min-h-screen flex flex-col justify-center items-center py-10 mx-2 gap-10">
          <div className="">
            {/* <h1 className="text-2xl md:text-5xl font-semibold mb-1 text-center font-serif  gradient-title bg-gradient-to-br from-white to-gray-200 "> */}
            <h1 className={`text-2xl md:text-5xl font-semibold mb-1 text-center font-serif ${themeStyle.wowTitle1}`}>
              {portfolioFeature.title}
            </h1>
            <h2 className={`text-lg md:text-2xl ${themeStyle.wowDescription1} text-center font-sans`}>
              {portfolioFeature.description}
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
                    <h3 className={`font-bold text-md ${themeStyle.wowTitle1} text-xl`}>
                      {folio.title}
                    </h3>
                    <h4 className={`font-bold text-md ${themeStyle.wowDescription1}`}>
                      {folio.detail}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section-4 : Services inside features*/}
      <section
        id="services"
        className={`py-20 ${themeStyle.wowBgGradient_AB}`}
      >
        <div className="min-h-screen flex flex-col justify-center items-center mx-2 gap-10">
          <div className="">
            <h3 className={`text-2xl md:text-5xl font-semibold mb-1 text-center font-serif  ${themeStyle.wowTitleSpan1}`}>
              {services.title}
            </h3>
            <p className={`text-lg md:text-2xl ${themeStyle.wowDescription1} text-center font-mono`}>
              {services.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {services.cards.map((card) => (
              <div className={`m-5 shadow-lg rounded-lg p-10 flex flex-col text-start justify-start gap-4 min-w-96 ${themeStyle.wowCardBg1}`}>
                <div className="mb-4 animate-pulse"><card.icon/></div>
                <h1 className={`text-lg md:text-2xl ${themeStyle.wowTitle2} font-bold text-start font-sans`}>
                  {card.title}
                </h1>
                <div className="mb-4">
                  {card.services.map((service) => (
                    <div className="flex gap-4 justify-start items-center mb-2">
                      <div className="text-green-600">
                        <CheckIcon />
                      </div>
                      <p className={`${themeStyle.wowDescription1} font-semibold font-mono`}>
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate("/signup")}
                  className={`w-full flex justify-start md:justify-center items-center gap-2 px-4 py-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 ${themeStyle.wowTitle1} font-sans rounded-lg `}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section-5 : ServicePlans- Price*/}
      <section
        id="plans"
        className={` md:from-slate-200 md:to-white py-20 md:pb-20 ${themeStyle.wowBgGradient_BA}`}
      >
        <div className="min-h-screen flex flex-col justify-center items-center mx-2 gap-10">
          <div className="">
            <h3 className={`text-2xl md:text-5xl font-semibold mb-1 text-center font-serif ${themeStyle.wowTitleGradient3}`}>
              {servicePlans.title}
            </h3>
            <p className={`text-lg md:text-2xl ${themeStyle.wowDescription1} text-center font-mono`}>
              {servicePlans.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {servicePlans.cards.map((card) => (
              <div className={`m-5 shadow-lg rounded-2xl p-10 font-mono flex flex-col text-start justify-start gap-4 min-w-96 ${themeStyle.wowCardBg2} ${themeStyle.wowCardBorder2}`}>
                <h1 className={`mb-2 text-xl font-bold text-center ${themeStyle.wowTitleSpan1}`}>
                  {card.planType}
                </h1>
                <h1 className={`text-lg md:text-5xl ${themeStyle.wowTitle2} font-bold  text-center font-sans`}>
                  {card.price}
                  <span className={`text-sm md:text-lg ${themeStyle.wowDescription1}`}>
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
                      <p className={`${themeStyle.wowDescription1} font-semibold font-mono`}>
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate("/signup")}
                  className={`w-full flex justify-start md:justify-center items-center font-bold gap-2 px-4 py-3 transition ease-in-out delay-150 bg-lime-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 ${themeStyle.wowTitle1} font-sans rounded-lg`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section-6 : Testimonial */}
      <section
        id="testimonials"
        className="bg-gradient-to-bl from-orange-500 to-orange-600"
      >
        <div className="min-h-screen flex flex-col justify-center items-center mx-2 gap-10 mt-20">
          <div>
            <h3 className="text-3xl md:text-6xl font-extrabold mb-1 text-center font-serif  gradient-title bg-gradient-to-br from-gray-500 to-black ">
              {testimonials.title}
            </h3>
            <p className="text-lg md:text-2xl text-gray-700 text-center font-mono">
              {testimonials.description}
            </p>
          </div>
          <div className=" flex justify-center items-center w-full">
            <div className=" h-80 flex justify-start w-full md:w-1/2 items-start p-2 gap-5 px-5 my-4 mx-2 rounded-lg overflow-x-auto overflow-y-hidden ">
              {testimonials.clients.map((client) => (
                <div className="flex flex-col justify-start items-start gap-5 rounded-lg shadow-lg p-10 bg-neutral-700">
                  <div className="flex gap-3 justify-center">
                    <div className="text-orange-500 pt-1">
                      <UserIcon />
                    </div>
                    <div className="flex flex-col text-orange-400">
                      <h2 className="font-bold text-lg text-orange-400">
                        {client.name}
                      </h2>
                      <h1 className="text-orange-500">{client.role}</h1>
                    </div>
                  </div>
                  <p className="text-gray-300">{client.review}</p>
                  <div className="">
                    Todo : Stars
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section-9 : Footer */}
      <section
        id="footer"
        className="bg-gradient-to-b from-neutral-800 to bg-neutral-950"
      >
        <div className="flex flex-wrap gap-10 justify-around items-start text-gray-400 mx-5 my-20">
          <div className="flex flex-col w-1/6 border-neutral-800 border-r-2">
            <h1 className="font-bold text-2xl text-white mb-5">
              {footer.title}
            </h1>
            <p>{footer.description}</p>
            <div className="gap-2 flex my-4">
              {footer.social.map((socialIcon) => (
                // <div>{socialIcon.icon}</div>
                <div className="">
                  <socialIcon.icon />
                </div>
              ))}
            </div>
          </div>
          {footer.navLinks.map((nav) => (
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-white mb-6">
                {nav.title}
              </h1>
              <div className="">
                <ul className="space-y-4">
                  {nav.links.map((link) => (
                    <li>
                      <a
                        href="#hero"
                        className="hover:text-white transition duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
