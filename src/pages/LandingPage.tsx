import Header from "../components/landingPage/Header";
import S1Intro from "../components/landingPage/S1Intro";
import S2Features from "../components/landingPage/S2Features";
import S3HookFeature from "../components/landingPage/S3HookFeature";
import S4Services from "../components/landingPage/S4Services";
import S5Price from "../components/landingPage/S5Price";
import S7Footer from "../components/landingPage/S7Footer";
import { ThemeProvider } from "../components/landingPage/theme/ThemeProvider";

export const LandingPage = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col bg-gray-100 items-center">
        {/* Header */}
        <Header />

        {/* Section-1 : Basic Intro */}
        <S1Intro />

        {/* Section-2 : All Features */}
        <S2Features />

        {/* Section-3 : Highlighted Feature- CV to Portfolio  */}
        <S3HookFeature />

        {/* Section-4 : Services inside features*/}
        <S4Services />

        {/* Section-5 : ServicePlans- Price*/}
        <S5Price />

        {/* Section-9 : Footer */}
        <S7Footer />
      </div>
    </ThemeProvider>
  );
};
