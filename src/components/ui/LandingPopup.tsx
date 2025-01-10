import Logo from "../../icons/Logo.png";
// .gradient-title{
//     @apply font-extrabold bg-gradient-to-br from-orange-600 to-orange-400 bg-clip-text tracking-tighter text-transparent pb-4 pr-2
//   }
const LandingPopup = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <img src={Logo} alt="Wow" className="opacity-5" />
    </div>
  );
};

export default LandingPopup;
