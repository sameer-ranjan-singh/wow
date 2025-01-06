import { Main } from "../components/ui/Main";
import { SiedeBar } from "../components/ui/SideBar";


export const Dashboard = () => {
    return (
      <div className="flex">
        <SiedeBar/>
        <Main/>
      </div>
    );
}

export default Dashboard