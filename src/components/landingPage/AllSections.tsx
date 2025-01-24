import PortfolioIcon from "../../icons/PortfolioIcon";
import { LpLinkIcon } from "../../icons/LpLinkIcon";
import NoteIcon from "../../icons/NoteIcon";
import CodeIcon from "../../icons/CodeIcon";
import VideoIcon from "../../icons/VideoIcon";
import DeployIcon from "../../icons/DeployIcon";
import UpdatingIcon from "../../icons/UpdatingIcon";
import CustomizeIcon from "../../icons/CustomizeIcon";
import TickIcon from "../../icons/TickIcon";
import { LinkedinIcon } from "../../icons/LinkedinIcon";
import { LpTwitterIcon } from "../../icons/LpTwitterIcon";
import { LpGithubIcon } from "../../icons/LpGithubIcon";

export const AllSections = {
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
          icon: NoteIcon ,
          title: "Note Taking",
          detail:
            "Create, edit, and organize your notes with our powerful note-taking system",
        },
        {
          icon: CodeIcon ,
          title: "Software Services",
          detail:
            "Custom software development and technical solutions for your business needs",
        },
        {
          icon: VideoIcon ,
          title: "Video Editing",
          detail:
            "Professional video editing services to enhance your visual content",
        },
        {
          icon: DeployIcon ,
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
          icon: TickIcon ,
          title: "Instant Conversion",
          detail:
            "Upload your CV and get a beautifully designed portfolio website in seconds",
        },
        {
          icon: CustomizeIcon ,
          title: "Customizable Themes",
          detail:
            "Choose from multiple professional themes to match your style, and tweets in one centralized location",
        },
        {
          icon: UpdatingIcon ,
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
          icon: CodeIcon ,
          title: "Software Development",
          services: [
            "Custom Web Applications",
            "Mobile App Development",
            "API Integration",
          ],
        },
        {
          icon: VideoIcon ,
          title: "Video Editing",
          services: ["Professional Editing", "Motion Graphics", "Color Grading"],
        },
        {
          icon: DeployIcon ,
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
        { icon: LinkedinIcon  },
        { icon: LpTwitterIcon  },
        { icon: LpGithubIcon  },
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