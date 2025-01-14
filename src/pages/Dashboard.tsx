import { Outlet } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { SiedeBar } from "../components/ui/SideBar";
import { useRedirect } from "../hooks/useRedirect";

export const DashboardLayout = () => {
  useRedirect();

  return (
    <div className="flex justify-between relative">
      <div className="hidden md:block fixed md:w-60">
        <SiedeBar />
      </div>
      <div className="h-screen w-full flex flex-col md:ml-60">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
