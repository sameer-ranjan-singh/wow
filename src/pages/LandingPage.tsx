import { useNavigate } from "react-router-dom";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { ReactElement, useContext, useState } from "react";
import PortfolioIcon from "../icons/PortfolioIcon";
import { LpLinkIcon } from "../icons/LpLinkIcon";
import NoteIcon from "../icons/NoteIcon";
import CodeIcon from "../icons/CodeIcon";
import VideoIcon from "../icons/VideoIcon";
import DeployIcon from "../icons/DeployIcon";
import UpdatingIcon from "../icons/UpdatingIcon";
import CustomizeIcon from "../icons/CustomizeIcon";
import TickIcon from "../icons/TickIcon";
import beforeImage from "../icons/BeforeImage.png";
import { CheckIcon } from "../icons/CheckIcon";
import { StarIcon } from "../icons/StarIcon";
import { UserIcon } from "../icons/UserIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { LpTwitterIcon } from "../icons/LpTwitterIcon";
import { LpGithubIcon } from "../icons/LpGithubIcon";
import { ThemeContext } from "../Theme/ThemeProvider";
import { SelectTheme, ThemeIcon } from "../Theme/ThemeIcon";

const linkToObj = [
  { href: "intro", label: "Home" },
  { href: "features", label: "Features" },
  { href: "portfolio", label: "Portfolio" },
  { href: "services", label: "Services" },
  { href: "plans", label: "Pricing" },
];

export const allSections = {
  section1: {
    span1: "Your Digital",
    span2: "Identity,",
    span3: "All in One Place",
    description:
      "Transform your CV into a stunning portfolio website. Store your links, documents, tweets, and notes in one central hub. Plus, get access to professional software and deployment services.",
  },
  section2: {
    title: "All-in-One Digital Hub",
    description: "Everything you need to manage your digital presence",
    cards: [
      {
        icon: <PortfolioIcon />,
        title: "CV to Portfolio",
        detail:
          "Upload your CV and get an instant professional portfolio website customized to your experience",
      },
      {
        icon: <LpLinkIcon />,
        title: "Link Management",
        detail:
          "Store and organize all your important links, documents, and tweets in one centralized location",
      },
      {
        icon: <NoteIcon />,
        title: "Note Taking",
        detail:
          "Create, edit, and organize your notes with our powerful note-taking system",
      },
      {
        icon: <CodeIcon />,
        title: "Software Services",
        detail:
          "Custom software development and technical solutions for your business needs",
      },
      {
        icon: <VideoIcon />,
        title: "Video Editing",
        detail:
          "Professional video editing services to enhance your visual content",
      },
      {
        icon: <DeployIcon />,
        title: "Deployment Services",
        detail:
          "Seamless deployment solutions for your web applications and services",
      },
    ],
  },
  section3: {
    title: "See Your CV Transform",
    description:
      "Watch how we convert your CV into a professional portfolio website",
    cards: [
      {
        icon: <TickIcon />,
        title: "Instant Conversion",
        detail:
          "Upload your CV and get a beautifully designed portfolio website in seconds",
      },
      {
        icon: <CustomizeIcon />,
        title: "Customizable Themes",
        detail:
          "Choose from multiple professional themes to match your style, and tweets in one centralized location",
      },
      {
        icon: <UpdatingIcon />,
        title: "Easy Updates",
        detail: "Update your portfolio anytime with just a few clicks",
      },
    ],
  },
  section4: {
    title: "Professional Services",
    description: "Comprehensive solutions for your digital needs",
    cards: [
      {
        icon: <CodeIcon />,
        title: "Software Development",
        services: [
          "Custom Web Applications",
          "Mobile App Development",
          "API Integration",
        ],
      },
      {
        icon: <VideoIcon />,
        title: "Video Editing",
        services: ["Professional Editing", "Motion Graphics", "Color Grading"],
      },
      {
        icon: <DeployIcon />,
        title: "Deployment Services",
        services: [
          "Cloud Deployment",
          "Server Configuration",
          "Maintenance & Support",
        ],
      },
    ],
  },
  section5: {
    title: "Simple, Transparent Pricing",
    description: "Choose the plan that works best for you",
    cards: [
      {
        planType: "Basic",
        price: "$9",
        services: [
          "Basic Portfolio Website",
          "50 Link Storage",
          "Email Support",
        ],
      },
      {
        planType: "Pro",
        price: "$29",
        services: [
          "Advanced Portfolio Website",
          "Unlimited Link Storage",
          "Custom Development",
          "Custom Domain",
        ],
      },
      {
        planType: "Enterprise",
        price: "$99",
        services: [
          "Everything in Pro",
          "Full Software Services",
          "Video Editing Services",
          "24/7 Dedicated Support",
        ],
      },
    ],
  },
  section6: {
    title: "What Our Clients Say",
    description: "Trusted by professionals worldwide",
    clients: [
      {
        name: "John Doe",
        role: "Software Engineer",
        review:
          "The CV to portfolio conversion is amazing! It saved me hours of work and the result looks professional. The link management feature is exactly what I needed.",
        rating: 3,
      },
      {
        name: "Alice Smith",
        role: "Content Creator",
        review:
          "Their video editing services are top-notch! The team understood exactly what I wanted and delivered beyond my expectations. Highly recommended!",
        rating: 3,
      },
      {
        name: "Mark Brown",
        role: "Startup Founder",
        review:
          "The deployment services are exceptional. They handled everything seamlessly and their support team is always available when needed.",
        rating: 3,
      },
      {
        name: "Antonio Neir",
        role: "D2C Clothing",
        review: "The deployment services are exceptional. It saved me so much",
        rating: 3,
      },
      {
        name: "Sameer Ranjan Singh",
        role: "Saas Agency",
        review:
          "CV to portfolio conversion is amazing! It saved me hours of work and the result looks professional.",
        rating: 3,
      },
    ],
  },
  section7: {
    title: "Frequently Asked Questions",
    description: "Everything you need to know about our services",
    cards: [
      {
        ques: "",
        ans: "",
      },
    ],
  },
  section8: {
    title: "Connect With Us",
    phone: "",
    email: "",
    social: {
      title: "Follow Us",
      icon1: "",
      icon2: "",
      icon3: "",
    },
  },
  section9: {
    title: "Wow",
    description:
      "Your all-in-one platform for managing digital presence and professional services.",
    social: [
      { icon: <LinkedinIcon /> },
      { icon: <LpTwitterIcon /> },
      { icon: <LpGithubIcon /> },
    ],
    navLinks: [
      {
        title: "Quick Links",
        links: ["Home", "Features", "Services", "Pricing", "Contact"],
      },
      {
        title: "Services",
        links: [
          "CV to Portfolio",
          "Software Development",
          "Video Editing",
          "Deployment",
          "Link Management",
        ],
      },
    ],
  },
  section10: {
    title: "© 2024 LinkFolio. All rights reserved.",
    obj: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
};

const intro = allSections?.section1;
const features = allSections?.section2;
const portfolioFeature = allSections?.section3;
const services = allSections?.section4;
const servicePlans = allSections?.section5;
const testimonials = allSections?.section6;
const footer = allSections?.section9;

export const TestimonialStar = ({ rating }: { rating: number }) => {
  for (let i = 1; i <= rating; i++) {
    return <StarIcon />;
  }
};

export interface FeatureCard {
  title: String;
  icon: ReactElement | "#";
  detail: String;
}

const FeatureCard = ({ card }: { card: FeatureCard }) => {
  return (
    <div className="flex flex-col justify-start shadow-lg rounded-lg w-80 p-6 border-l-4 border-gray-400 bg-gradient-to-br from-neutral-800 to-neutral-900 || hover:border-gray-200  hover:to-neutral-950">
      <div className="mb-4">{card.icon}</div>
      <h1 className="font-bold mb-2 text-xl">{card?.title}</h1>
      <h2 className="font-semibold text-md text-gray-400 hover:text-gray-300 hover:font-semibold font-mono">
        {card?.detail}
      </h2>
    </div>
  );
};

export const LandingPage = () => {
  const navigate = useNavigate();
  const [showTheme, setShowTheme] = useState(false);

  const { themeStyle, themeName, toggleTheme } = useContext(ThemeContext);
  const [afterBox, setAfterBox] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };
  return (
    <div className="flex flex-col bg-gray-100 scroll-smooth">
      {/* Header */}
      <header
        id="header"
        className={`py-2 md:px-0 pl-10 flex md:justify-around justify-between items-center fixed w-full bg-opacity-90 ${themeStyle.BgGradient} `}
      >
        <h1 className="font-extrabold font-sans text-xl">Wow</h1>
        <div className="md:flex gap-4 text-md text-center font-semibold hidden">
          {linkToObj.map((obj) => (
            <a
              key={obj.label}
              href={"#" + `${obj.href}`}
              onClick={() => handleSectionClick(obj.href)}
              className={
                activeSection === obj.href
                  ? `${themeStyle.wowText}  w-16 scroll-smooth`
                  : `hover:font-bold w-16 scroll-smooth`
              }
            >
              {obj.label}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 ">
          <div onClick={() => setShowTheme(!showTheme)}>
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
        className="bg-gradient-to-b from-gray-100 to-gray-300 "
      >
        <div className="min-h-screen flex flex-wrap justify-center items-center m-2 my-10 gap-4">
          <div className="w-full md:w-2/6 md:mx-0 flex flex-col justify-center">
            <h1 className="md:text-start text-center text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-gray-500 to-black">
              {intro.span1}
              <br />
              {intro.span2}
              <br />
              <span className=" bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-600">
                {intro.span3}
              </span>
            </h1>
            <h2 className="md:text-start text-center font-bold my-5 text-gray-400">
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
            <div className=" w-full md:w-9/12 p-6 rounded-2xl shadow-xl bg-opacity-70 bg-gradient-to-br from-neutral-700 to-neutral-800  hover:from-neutral-900 hover:to-neutral-800 transition ease-in-out ">
              <div className="bg-neutral-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-end mb-3 space-x-2">
                  <div className="h-2 md:h-3 w-2 md:w-3 rounded-full bg-red-500"></div>
                  <div className="h-2 md:h-3 w-2 md:w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-2 md:h-3 w-2 md:w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 md:h-4 bg-neutral-600 rounded-full w-3/4 animate-pulse"></div>
                  <div className="h-2 md:h-4 bg-neutral-600 rounded-full w-1/2 animate-pulse"></div>
                  <div className="h-2 md:h-4 bg-neutral-600 rounded-full w-5/6 animate-pulse"></div>
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
        className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white border-b border-b-neutral-700"
      >
        <div className="min-h-screen flex flex-col justify-center items-center py-10 mx-2 gap-20">
          <div className="">
            <h1 className="text-2xl md:text-4xl font-semibold mb-5 text-center font-serif">
              {features.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 text-center font-sans">
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
        className="bg-gradient-to-b from-neutral-800 to-neutral-900"
      >
        <div className="min-h-screen flex flex-col justify-center items-center py-10 mx-2 gap-10">
          <div className="">
            <h1 className="text-2xl md:text-5xl font-semibold mb-1 text-center font-serif  gradient-title bg-gradient-to-br from-white to-gray-200 ">
              {portfolioFeature.title}
            </h1>
            <h2 className="text-lg md:text-2xl text-gray-400 text-center font-sans">
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
                  <div className="w-1/12 flex justify-start">{folio.icon}</div>
                  <div className="flex flex-col gap-2 mb-3">
                    <h3 className="font-bold text-md text-white text-xl">
                      {folio.title}
                    </h3>
                    <h4 className="font-bold text-md text-gray-400">
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
        className="bg-gradient-to-b from-white to-slate-200 py-20"
      >
        <div className="min-h-screen flex flex-col justify-center items-center mx-2 gap-10">
          <div className="">
            <h3 className="text-2xl md:text-5xl font-semibold mb-1 text-center font-serif  gradient-title bg-gradient-to-br from-blue-500 to-blue-900 ">
              {services.title}
            </h3>
            <p className="text-lg md:text-2xl text-gray-400 text-center font-mono">
              {services.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {services.cards.map((card) => (
              <div className="m-5 shadow-lg rounded-lg p-10 flex flex-col text-start justify-start gap-4 min-w-96 hover:bg-gradient-to-br to-slate-300">
                <div className="mb-4 animate-pulse">{card.icon}</div>
                <h1 className="text-lg md:text-2xl text-black font-bold text-start font-sans">
                  {card.title}
                </h1>
                <div className="mb-4">
                  {card.services.map((service) => (
                    <div className="flex gap-4 justify-start items-center mb-2">
                      <div className="text-green-600">
                        <CheckIcon />
                      </div>
                      <p className="text-gray-500 font-semibold font-mono">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate("/signup")}
                  className="w-full flex justify-start md:justify-center items-center gap-2 px-4 py-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 text-white font-sans rounded-lg "
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
      {/* Section-5 : ServicePlans- Price*/}
      <section
        id="plans"
        className="bg-gradient-to-b from-white to-slate-200 md:from-slate-200 md:to-white py-20 md:pb-20"
      >
        <div className="min-h-screen flex flex-col justify-center items-center mx-2 gap-10">
          <div className="">
            <h3 className="text-2xl md:text-5xl font-semibold mb-1 text-center font-serif  gradient-title bg-gradient-to-br from-lime-500 to-lime-700 ">
              {servicePlans.title}
            </h3>
            <p className="text-lg md:text-2xl text-gray-400 text-center font-mono">
              {servicePlans.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {servicePlans.cards.map((plan) => (
              <div className="m-5 shadow-lg rounded-2xl p-10 font-mono flex flex-col text-start justify-start gap-4 min-w-96 hover:bg-gradient-to-br to-slate-300 hover:border hover:border-lime-500">
                <h1 className="mb-2 text-xl font-bold text-center">
                  {plan.planType}
                </h1>
                <h1 className="text-lg md:text-5xl text-black font-bold  text-center font-sans">
                  {plan.price}
                  <span className="text-sm md:text-lg text-gray-400">
                    /Month
                  </span>
                </h1>
                <hr />
                <div className="mb-4">
                  {plan.services.map((service) => (
                    <div className="flex gap-4 justify-start items-center mb-2">
                      <div className="text-green-600">
                        <CheckIcon />
                      </div>
                      <p className="text-gray-500 font-semibold font-mono">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate("/signup")}
                  className="w-full flex justify-start md:justify-center items-center font-bold gap-2 px-4 py-3 transition ease-in-out delay-150 bg-lime-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 text-white font-sans rounded-lg "
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
                    <TestimonialStar rating={client.rating} />
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
                <div className="">{socialIcon.icon}</div>
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
