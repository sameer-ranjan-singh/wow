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
        <div className="h-screen mx-8 flex flex-col items-center py-8 gap-8">
          <MainHeader title="Overview"/>
          <LinkCounts />
          <QuickAccess />
        </div>
      </div>
    </>
  );
};
