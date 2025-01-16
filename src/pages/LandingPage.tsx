import { NavLink, useNavigate } from "react-router-dom";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { ReactElement, useState } from "react";
import PortfolioIcon from "../icons/PortfolioIcon";
import { LinkIcon } from "../icons/LinkIcon";
import NoteIcon from "../icons/NoteIcon";
import CodeIcon from "../icons/CodeIcon";
import VideoIcon from "../icons/VideoIcon";
import DeployIcon from "../icons/DeployIcon";
import UpdatingIcon from "../icons/UpdatingIcon";
import CustomizeIcon from "../icons/CustomizeIcon";
import TickIcon from "../icons/TickIcon";
import beforeImage from "../icons/BeforeImage.png";

const linkToObj = [
  { href: "home", label: "Home" },
  { href: "features", label: "Features" },
  { href: "portfolio", label: "Portfolio" },
  { href: "Services", label: "Services" },
  { href: "pricing", label: "Pricing" },
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
        icon: <LinkIcon />,
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
        icon: "",
        title: "Software Development",
        services: [
          "Custom Web Applications",
          "Mobile App Development",
          "API Integration",
        ],
      },
      {
        icon: "",
        title: "Video Editing",
        services: ["Professional Editing", "Motion Graphics", "Color Grading"],
      },
      {
        icon: "",
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
    cards: [],
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
    title: "",
    description: "",
    social: {
      icon1: "",
      icon2: "",
      icon3: "",
    },
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
  const [afterBox, setAfterBox] = useState(false);
  return (
    <div className="flex flex-col bg-gray-100">
      {/* Header */}
      <header className=" my-2 flex md:justify-around justify-between m-4 items-center">
        <h1 className="font-extrabold font-sans text-md md:text-lg">Wow</h1>
        <div className="md:flex gap-4 text-md text-center font-semibold hidden">
          {linkToObj.map((obj) => (
            <NavLink
              to={obj.href}
              key={obj.label}
              className={`hover:font-bold w-16`}
            >
              {obj.label}
            </NavLink>
          ))}
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="w-36 flex justify-center items-center px-2 py-2 border bg-blue-500 hover:bg-blue-600 text-white font-mono rounded-lg"
        >
          Get Started
        </button>
      </header>
      {/* Section-1 */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-300 ">
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
      {/* Section-2 */}
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white ">
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
      {/* Section-3 */}
      <section className="bg-gradient-to-b from-neutral-800 to-neutral-900">
        <div className="min-h-screen flex flex-col justify-center items-center py-10 mx-2 gap-10">
          <div className="">
            <h1 className="text-2xl md:text-5xl font-semibold mb-1 text-center font-serif  gradient-title bg-gradient-to-br from-blue-500 to-blue-900 ">
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
                      : `bg-neutral-600 text-blue-100`
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
    </div>
  );
};

/*
<div class="bg-neutral-800 p-6 rounded-2xl shadow-2xl animate__animated animate__fadeInLeft" id="el-g4c160ck">
          <div class="tabs flex mb-6 bg-neutral-700 rounded-lg p-1" id="el-246gapgu">
            <button class="tab-btn active w-1/2 py-2 text-center rounded-md text-white bg-indigo-500 transition-all duration-300" id="el-73t0zbmq">Before</button>
            <button class="tab-btn w-1/2 py-2 text-center rounded-md text-gray-400 hover:text-white transition-all duration-300" id="el-58jof8jh">After</button>
          </div>

          <div class="tab-content relative" id="el-24k3q61u">
            <!-- CV View -->
            <div class="tab-pane active" id="el-iiqp4lee">
              <div class="bg-white rounded-lg p-6" id="el-k56hti72">
                <div class="space-y-4" id="el-p1ep5v6p">
                  <div class="h-8 bg-gray-200 rounded-full w-3/4" id="el-md7fpx77"></div>
                  <div class="h-4 bg-gray-200 rounded-full w-1/2" id="el-7en8sy4v"></div>
                  <div class="space-y-2" id="el-h8jcflwk">
                    <div class="h-4 bg-gray-200 rounded-full" id="el-5s4hi2wl"></div>
                    <div class="h-4 bg-gray-200 rounded-full w-5/6" id="el-nev0fcxn"></div>
                    <div class="h-4 bg-gray-200 rounded-full w-4/6" id="el-bfuvzxnd"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Portfolio View -->
            <div class="tab-pane hidden" id="el-q1vfkru0">
              <div class="bg-neutral-700 rounded-lg p-6" id="el-ge9biqhz">
                <div class="space-y-4" id="el-2njzg799">
                  <div class="flex items-center justify-between mb-6" id="el-g5bvk942">
                    <div class="h-10 w-10 bg-indigo-500 rounded-full" id="el-22l846gz"></div>
                    <div class="flex space-x-4" id="el-2zjj2vy3">
                      <div class="h-4 w-16 bg-neutral-600 rounded-full" id="el-hmot0uar"></div>
                      <div class="h-4 w-16 bg-neutral-600 rounded-full" id="el-oxeojau1"></div>
                      <div class="h-4 w-16 bg-neutral-600 rounded-full" id="el-iv28286c"></div>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-4" id="el-hhvdcy0c">
                    <div class="h-32 bg-neutral-600 rounded-lg" id="el-syszjhs4"></div>
                    <div class="h-32 bg-neutral-600 rounded-lg" id="el-q6hlo6xv"></div>
                  </div>
                  <div class="h-24 bg-neutral-600 rounded-lg" id="el-n38ytqff"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
*/
