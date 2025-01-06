import { ReactElement } from "react"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { DocsIcon } from "../../icons/DocsIcon"
import { LinkIcon } from "../../icons/LinkIcon"
import Logo from "../../icons/Logo.png"
import { TagIcon } from "../../icons/TagIcon"

export interface NavItemProps {
    iconLabel: string
    icon: ReactElement | "#"
    href: string
}
const navItmes: NavItemProps[] = [
    {href: "",iconLabel: "Twitter",icon: <TwitterIcon/> },
    {href: "",iconLabel: "Videos",icon: <YoutubeIcon/> },
    {href: "",iconLabel: "Docs",icon: <DocsIcon/> },
    {href: "",iconLabel: "Links",icon: <LinkIcon/> },
    {href: "",iconLabel: "Tags",icon: <TagIcon/> }
]

export function SiedeBar(){
    return (
        <aside className="hidden md:block w-72 h-screen font-semibold bg-slate-100 border-r">
          <div className="flex justify-center items-center pb-4">
            <img src={Logo} className="w-12 h-12"/>
            <h1 className="font-extrabold text-2xl py-4">Wow</h1>
          </div>
            <nav className="">
              <ul className=" flex flex-col">
                {navItmes.map((item)=> (
                  <li key={item.iconLabel} className="flex justify-start ">
                    <a href={item.href} className="text-gray-700 hover:bg-gray-200 hover:text-lime-500 hover:font-bold hover:uppercase border-b flex gap-4  p-2 py-3 w-full justify-center items-center">
                      <span className="w-3/12  flex justify-center items-center h-12">
                       {item.icon} 
                      </span>
                      <span className="w-9/12 ">
                       {item.iconLabel}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
        </aside>
    )
}

/*
"use client";

import { BarChart, Calendar, Clock, Users } from "lucide-react";

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