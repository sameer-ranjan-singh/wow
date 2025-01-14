import { useNavigate } from "react-router-dom";
import { useSession } from "../../hooks/useSession";
import { Button } from "./Button";
import Logo from "../../icons/Logo.png";

const navBarItems = [
  { href: "/cv", label: "CV", icon: "" },
  { href: "/AI", label: "askAI", icon: "" },
];

const sessionKeys = {
  true: "Logout",
  false: "Signup",
};
export const Navbar = () => {
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
    <div className="flex justify-around md:justify-end items-center p-4 border-b h-12">
      <div className="md:hidden">
        <img src={Logo} className="w-8 h-6" />
      </div>
      <div className="flex justify-center items-center gap-4 w-full">
        {navBarItems.map((item) => (
          <h2
            key={item.label}
            className="font-serif text-sm md:text-md hover:border-b hover:font-bold"
          >
            {item.label}
          </h2>
        ))}
      </div>
      <div className="text-end">
        <Button
          size="sm"
          onClick={handleSession}
          variant="primary"
          text={sessionKeys[`${SessionExist}`]}
        />
      </div>
    </div>
  );
};
