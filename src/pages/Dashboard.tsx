import LandingPopup from "../components/ui/LandingPopup";
import { Main } from "../components/ui/Main";
import { SiedeBar } from "../components/ui/SideBar";

export const Dashboard = () => {
  

  return (
    <div className="flex">
      <div className="hidden md:block">
        <SiedeBar />
      </div>
      <div className="md:w-10/12 w-screen flex justify-center">
        <div className="fixed flex justify-center items-center ">
          <LandingPopup />
        </div>
        <div className="relative w-full">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
