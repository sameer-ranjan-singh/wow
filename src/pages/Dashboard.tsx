import { Outlet } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { SiedeBar } from "../components/ui/SideBar";
import { useRedirect } from "../hooks/useRedirect";

export const DashboardLayout = () => {
  useRedirect();

  return (
    <div className="flex relative">
      <div className="hidden md:block fixed md:w-64">
        <SiedeBar />
      </div>
      <div className="w-full min-h-screen flex flex-col md:ml-[256px]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
