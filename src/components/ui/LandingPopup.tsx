import Logo from "../../icons/Logo.png";
// .gradient-title{
//     @apply font-extrabold bg-gradient-to-br from-orange-600 to-orange-400 bg-clip-text tracking-tighter text-transparent pb-4 pr-2
//   }
const LandingPopup = () => {
  return (
    // <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-slate-200">
    <div className="h-screen flex justify-center items-center ">
      <img src={Logo} alt="Wow" className="opacity-5" />
      {/* <h1 className="text-4xl border font-extrabold pt-10 bg-gradient-to-br from-lime-500 to-black bg-clip-text tracking-tighter text-transparent">Wow</h1> */}
    </div>
  );
};

export default LandingPopup;
