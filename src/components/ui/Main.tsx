import { LinkCounts } from "./LinkCounts";
import { QuickAccess } from "./QuickAccess";
import { MainHeader } from "./MainHeader";

export const Main = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
        {/* <div className="relative flex justify-center items-center h-screen">
          <BackgroundLogo />
        </div> */}
        <div className=" mx-8 flex flex-col items-center pt-8 pb-20 gap-8">
          <MainHeader title="Dashboard"/>
          <LinkCounts />
          <QuickAccess />
        </div>
      </div>
    </>
  );
};
