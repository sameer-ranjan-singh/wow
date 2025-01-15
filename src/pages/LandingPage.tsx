import { NavLink, useNavigate } from "react-router-dom";
import { RightArrowIcon } from "../icons/RightArrowIcon";

const linkToObj = [
  { href: "home", label: "Home" },
  { href: "features", label: "Features" },
  { href: "portfolio", label: "Portfolio" },
  { href: "Services", label: "Services" },
  { href: "pricing", label: "Pricing" },
];

export const allSections = {
  section1: {
    title: "Your Digital Identity",
    span1: "All in One Place",
    description:
      "Transform your CV into a stunning portfolio website. Store your links, documents, tweets, and notes in one central hub. Plus, get access to professional software and deployment services.",
  },
  section2: {
    title: "All-in-One Digital Hub",
    description: "Everything you need to manage your digital presence",
    cards: [
      {
        icon: "",
        title: "CV to Portfolio",
        detail:
          "Upload your CV and get an instant professional portfolio website customized to your experience",
      },
      {
        icon: "",
        title: "Link Management",
        detail:
          "Store and organize all your important links, documents, and tweets in one centralized location",
      },
      {
        icon: "",
        title: "Note Taking",
        detail:
          "Create, edit, and organize your notes with our powerful note-taking system",
      },
      {
        icon: "",
        title: "Software Services",
        detail:
          "Custom software development and technical solutions for your business needs",
      },
      {
        icon: "",
        title: "Video Editing",
        detail:
          "Professional video editing services to enhance your visual content",
      },
      {
        icon: "",
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
        icon: "",
        title: "Instant Conversion",
        detail:
          "Upload your CV and get a beautifully designed portfolio website in seconds",
      },
      {
        icon: "",
        title: "Customizable Themes",
        detail:
          "Choose from multiple professional themes to match your style, and tweets in one centralized location",
      },
      {
        icon: "",
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
const features = allSections?.section2;
const FeatureCard = ({ card }) => {
  return (
    <div className="flex flex-col justify-start rounded-lg w-80 p-6 border-l-2 border-blue-700 bg-gradient-to-br from-neutral-800 to-neutral-900 ">
      <img src="" alt="logo" className="mb-4" />
      <h1 className="font-bold mb-2 text-xl">{card?.title}</h1>
      <h2 className="font-semibold text-md text-gray-400 ">{card?.detail}</h2>
    </div>
  );
};
export const LandingPage = () => {
  const navigate = useNavigate();
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
      <section className="h-screen flex flex-wrap justify-center items-center m-2 gap-4">
        <div className="w-full md:w-2/6 md:mx-0 flex flex-col justify-center">
          <h1 className="md:text-start text-center text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-gray-500 to-black">
            Your Digital
            <br />
            Identity,
            <br />
            <span className=" bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-600">
              All in One Place
            </span>
          </h1>
          <h2 className="md:text-start text-center font-bold my-5 text-gray-400">
            Transform your CV into a stunning portfolio website. Store your
            links, documents, tweets, and notes in one central hub. Plus, get
            access to professional software and deployment services.
          </h2>
          <div className="flex flex-col md:flex-row  gap-4 mt-8">
            <button
              onClick={() => navigate("/signup")}
              className="w-full md:w-36 flex justify-start md:justify-center items-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-mono rounded-lg "
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
          <div className=" w-full md:w-9/12 p-6 rounded-2xl shadow-xl bg-opacity-70 bg-gradient-to-br from-neutral-700 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700">
            <div className="bg-neutral-700 rounded-lg p-4 mb-4">
              <div className="flex items-center mb-3 space-x-2">
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
            <div className="flex justify-between items-center p-3 rounded-lg mb-4 bg-neutral-700">
              <div className="w-4 md:w-8 h-4 md:h-8 bg-indigo-500 rounded-full"></div>
              <div className="h-4 md:h-4 bg-neutral-600 rounded-full w-2/3"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="h-10 md:h-20 bg-neutral-700 rounded-lg"></div>
              <div className="h-10 md:h-20 bg-neutral-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-2 */}
      <section className="h-screen bg-neutral-900 text-white flex flex-col justify-center items-center gap-20">
        <div className="">
          <h1 className="text-4xl font-semibold mb-5 text-center">
            {features.title}
          </h1>
          <p className="text-2xl text-gray-500">{features.description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {features.cards.map((card) => (
            <FeatureCard card={card} />
          ))}
        </div>
      </section>
    </div>
  );
};
