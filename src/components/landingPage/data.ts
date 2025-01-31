import PortfolioIcon from "../../icons/PortfolioIcon";
import { LpLinkIcon } from "../../icons/LpLinkIcon";
import NoteIcon from "../../icons/NoteIcon";
import CodeIcon from "../../icons/CodeIcon";
import VideoIcon from "../../icons/VideoIcon";
import DeployIcon from "../../icons/DeployIcon";
import UpdatingIcon from "../../icons/UpdatingIcon";
import CustomizeIcon from "../../icons/CustomizeIcon";
import { LinkedinIcon } from "../../icons/LinkedinIcon";
import { LpTwitterIcon } from "../../icons/LpTwitterIcon";
import { LpGithubIcon } from "../../icons/LpGithubIcon";

export const data = {
  //intro
  section1: {
    span1: "Your Digital",
    span2: "Identity,",
    span3: "All in One Place",
    description:
      "Transform your CV into a stunning portfolio website. Store your links, documents, tweets, and notes in one central hub. Plus, get access to professional software and deployment services.",
  },
  //Features
  section2: {
    title: "All-in-One Digital Hub",
    description: "Everything you need to manage your digital presence",
    cards: [
      {
        icon: PortfolioIcon,
        title: "CV to Portfolio",
        detail:
          "Upload your CV and get an instant professional portfolio website customized to your experience",
      },
      {
        icon: LpLinkIcon,
        title: "Link Management",
        detail:
          "Store and organize all your important links, documents, and tweets in one centralized location",
      },
      {
        icon: NoteIcon,
        title: "Note Taking",
        detail:
          "Create, edit, and organize your notes with our powerful note-taking system",
      },
      {
        icon: CodeIcon,
        title: "Software Services",
        detail:
          "Custom software development and technical solutions for your business needs",
      },
      {
        icon: VideoIcon,
        title: "Video Editing",
        detail:
          "Professional video editing services to enhance your visual content",
      },
      {
        icon: DeployIcon,
        title: "Deployment Services",
        detail:
          "Seamless deployment solutions for your web applications and services",
      },
    ],
  },
  //hook Feature
  section3: {
    title: "See Your CV Transform",
    description:
      "Watch how we convert your CV into a professional portfolio website",
    cards: [
      {
        icon: UpdatingIcon,
        title: "Easy Updates",
        detail: "Update your portfolio anytime with just a few clicks",
      },
      {
        icon: CustomizeIcon,
        title: "Instant Conversion",
        detail:
          "Upload your CV and get a beautifully designed portfolio website in seconds",
      },
      {
        icon: CustomizeIcon,
        title: "Customizable Themes",
        detail:
          "Choose from multiple professional themes to match your style, and tweets in one centralized location",
      },
    ],
  },
  //Services
  section4: {
    title: "Professional Services",
    description: "Comprehensive solutions for your digital needs",
    cards: [
      {
        icon: CodeIcon,
        title: "Software Development",
        services: [
          "Custom Web Applications",
          "Mobile App Development",
          "API Integration",
        ],
      },
      {
        icon: VideoIcon,
        title: "Video Editing",
        services: ["Professional Editing", "Motion Graphics", "Color Grading"],
      },
      {
        icon: DeployIcon,
        title: "Deployment Services",
        services: [
          "Cloud Deployment",
          "Server Configuration",
          "Maintenance & Support",
        ],
      },
    ],
  },
  //Price
  section5: {
    title: "Simple, Transparent Pricing",
    description: "Choose the plan that works best for you",
    cards: [
      {
        planType: "Basic",
        price: "$5",
        services: [
          "Link Storage",
          "No customization",
          "Basic Portfolio Website",
        ],
      },
      {
        planType: "Pro",
        price: "$25",
        services: [
          "Advanced Business Website",
          "Custom Development",
          "2+ customizations",
          "Custom Domain",
        ],
      },
      {
        planType: "Enterprise",
        price: "$99",
        services: [
          "Everything in Pro",
          "Deployment Services",
          "Software Services",
          "Video Editing Services",
          "24/7 Dedicated Support",
        ],
      },
    ],
  },
  //Testimonials
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
  //FAQ
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
  //social Handles
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
  //Footer
  section9: {
    title: "Wow",
    description:
      "Your all-in-one platform for managing digital presence and professional services.",
    social: [
      { icon: LinkedinIcon },
      { icon: LpTwitterIcon },
      { icon: LpGithubIcon },
    ],
    navLinks: [
      {
        title: "Quick Links",
        labels: [
          { name: "Home", href: "intro" },
          { name: "Features", href: "features" },
          { name: "Services", href: "services" },
          { name: "Pricing", href: "plans" },
          { name: "Contact", href: "" },
        ],
      },
      {
        title: "Services",
        labels: [
          { name: "CV to Portfolio", href: "portfolio" },
          { name: "Software Development", href: "services" },
          { name: "Services", href: "services" },
          { name: "Link Management", href: "intro" },
          { name: "Video Editing", href: "services" },
        ],
      },
    ],
  },
  //Policy
  section10: {
    title: "© 2024 LinkFolio. All rights reserved.",
    obj: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
};
