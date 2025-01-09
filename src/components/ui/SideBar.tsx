
import Logo from "../../icons/Logo.png";
import { SideItem } from "./SideItem";



export function SiedeBar() {
  return (
    <aside className="h-screen font-semibold bg-slate-100 border-r ">
      <div className="flex justify-center items-center pb-4">
        <img src={Logo} className="w-12 h-12" />
        <h1 className="font-extrabold text-2xl py-4">Wow</h1>
      </div>
      <nav className="">
       <SideItem/>
      </nav>
    </aside>
  );
}