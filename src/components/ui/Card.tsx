import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";

type cardThemeTypes = "dark" | "light";
interface CardProp {
  theme: cardThemeTypes;
  title: String;
  link: String;
  type: "youtube" | "twitter";
}

const cardTheme: Record<cardThemeTypes, string> = {
  dark: "bg-slate-500 text-white hover:bg-slate-400",
  light: "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-500",
};

const cardDefaultStyles =
  "max-w-80 min-h-96 rounded-md shadow-md p-2 m-2 font-semibold border border-slate-200 flex flex-col justify-between";

export const Card = ({ theme, title, link, type }: CardProp) => {
  return (
    <>
      <div className={`${cardDefaultStyles} ${cardTheme[theme]}`}>
        <div>
          <div className="flex justify-between items-center px-2">
            <div className="flex gap-2 items-center">
              <a href={link as string}>
                <ShareIcon size="md" />
              </a>
              <h1>{title}</h1>
            </div>
            <div className="flex gap-3 ">
              <a href={link as string}>
                <ShareIcon size="md" />
              </a>
              <a href={link as string}>
                <DeleteIcon size="md" />
              </a>
            </div>
          </div>
          <div className="pt-4">
            {type == "youtube" && (
              <iframe
                className="w-full "
                src={link as string}
                // src={link.replace("watch","embed").replace("?v=","/")}
                title="The ₹1 Crore Salary Race: Engineering vs Finance vs Startup"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            {type == "twitter" && (
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  At dawn from the gateway to Mars, the launch of Starship’s
                  second flight test
                  <a href="https://t.co/ffKnsVKwG4">
                    pic.twitter.com/ffKnsVKwG4
                  </a>
                </p>
                &mdash; SpaceX (@SpaceX)
                <a href={link.replace("x.com", "twitter.com")}>
                  December 7, 2023
                </a>
                {/* <a href="https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw">December 7, 2023</a> */}
              </blockquote>
            )}
          </div>
          <div className="pt-4">
            <ul className="flex gap-2">
              <li className="px-2 py-1 bg-green-100 text-green-600 rounded-3xl text-xs">
                #productivity
              </li>
              <li className="px-2 py-1 bg-green-100 text-green-600 rounded-3xl text-xs">
                #ideas
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <span className="text-gray-400 text-xs p-2">Added on 5/01/2025</span>
        </div>
      </div>
    </>
  );
};

/*
"use client";

import { useUser } from "@clerk/nextjs";
import { BarChart, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarLoader } from "react-spinners";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/meetings", label: "Meetings", icon: Users },
  { href: "/availability", label: "Availability", icon: Clock },
];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded } = useUser();
  const pathname = usePathname();
  return (
    <>
      {!isLoaded && <BarLoader width={"100%"} color="#36d7b7" />}
      <div className="flex flex-col h-screen bg-orange-50 md:flex-row">
        <aside className="hidden md:block w-64 bg-white">
          <nav className="mt-8">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100
                              ${pathname === item.href && "bg-orange-100"}`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <header className="flex justify-center items-center mb-1">
            <h2 className="text-5xl md:text-6xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full">
              {navItems.find((item) => item.href === pathname)?.label ||
                "Dashboard"}
            </h2>
          </header>
          {children}
        </main>
        <nav className="md:hidden fixed bottom-4 left-2 right-2 bg-white shadow-md rounded-lg">
          <ul className="flex justify-around">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex flex-col items-center px-4 py-2 gap-1
                              ${pathname === item.href && "text-orange-600" || "text-gray-600"}`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default AppLayout;

*/
