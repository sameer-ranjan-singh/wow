import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import Logo from "../icons/Logo.png";

export const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center ">
      <div className="animate-pulse w-full md:w-1/2 flex justify-center md:justify-end">
        <img src={Logo} alt="..." />
      </div>
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 md:h-1/2 ">
        <div className="flex flex-col justify-center items-start gap-4 tracking-wide">
          <h1 className="md:text-4xl md:font-bold">
            <span className="md:text-6xl md:font-extrabold font-serif text-center bg-gradient-to-br from-gray-950 to-slate-300 bg-clip-text text-transparent">
              Wow
            </span>
          </h1>
          <Button size="md" text="Start For Free -->" variant="primary" onClick={() => navigate("/signup")}/>
        </div>
      </div>
    </div>
  );
};
