import { useNavigate } from "react-router-dom";
import { useSession } from "../../hooks/useSession";
import { Button } from "./Button";
import Logo from "../../icons/Logo.png";
import { HamburgerIcon } from "./Hamburger";
import { useState } from "react";

const navBarItems = [
  { href: "/linkstore", label: "Link Store", icon: "" },
  { href: "/cv", label: "CV", icon: "" },
];

const sessionKeys = {
  true: "Logout",
  false: "Signup",
};

export const Navbar = () => {
  const [isHamburgerOpen, setHamburgurOpen] = useState(false);
  const navigate = useNavigate();
  const SessionExist = useSession();

  const handleSession = () => {
    if (SessionExist) {
      localStorage.setItem("token", "");
      navigate("/");
    } else {
      navigate("/signup");
    }
  };
  return (
    <div className="md:hidden flex justify-around md:justify-end items-center p-4 border-b h-12">
      <img src={Logo} className="w-8 h-6" />
      <div className="flex justify-center items-center gap-4 w-full">
        {navBarItems.map((item) => (
          <h2
            key={item.label}
            className="font-mono text-sm md:text-md hover:border-b hover:font-bold"
          >
            {item.label}
          </h2>
        ))}
      </div>
      <div onClick={() => setHamburgurOpen(!isHamburgerOpen)}>
        <HamburgerIcon />
      </div>
      {isHamburgerOpen && (
        <div
          className="absolute z-30 w-full right-0 top-12 flex justify-end h-screen bg-black bg-opacity-50"
          onClick={() => setHamburgurOpen(!isHamburgerOpen)}
        >
          <div className="text-end w-1/2 px-4 pt-2 bg-gray-100 bg-opacity-95">
            <Button
              size="md"
              onClick={handleSession}
              variant="secondary"
              text={sessionKeys[`${SessionExist}`]}
            />
          </div>
        </div>
      )}
    </div>
  );
};
