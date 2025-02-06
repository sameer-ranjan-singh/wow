import { useNavigate } from "react-router-dom";
import Logo from "../../icons/Logo.png";
import { Button } from "./Button";
import { SideItem } from "./SideItem";
import { useSession } from "../../hooks/useSession";

const sessionKeys = {
  true: "Logout",
  false: "Signup",
};

export function SiedeBar() {
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
    <aside className="h-screen font-semibold bg-slate-100 border-r flex flex-col justify-between">
      <div>
        <div className="flex justify-center items-center pb-4">
          <img src={Logo} className="w-12 h-12" />
          <h1 className="font-extrabold text-2xl py-4">Wow</h1>
        </div>
        <SideItem />
      </div>
      <div className="flex justify-center mb-4">
        <Button
          size="md"
          onClick={handleSession}
          variant="primary"
          text={sessionKeys[`${SessionExist}`]}
        />
      </div>
    </aside>
  );
}
