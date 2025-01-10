import LandingPopup from "../components/ui/LandingPopup";
import { Main } from "../components/ui/Main";
import { Navbar } from "../components/ui/Navbar";
import { SiedeBar } from "../components/ui/SideBar";
import { useRedirect } from "../hooks/useRedirect";

export const Dashboard = () => {
  useRedirect();

  return (
    <div className="flex justify-between">
      <div className="hidden md:block md:w-2/12">
        <SiedeBar />
      </div>
      <div className="md:w-10/12 w-screen h-screen flex flex-col ">
        <Navbar />
        <div className="flex justify-center">
          <div className="fixed flex justify-center items-center h-screen">
            <LandingPopup />
          </div>
          <div className="relative w-full ">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
