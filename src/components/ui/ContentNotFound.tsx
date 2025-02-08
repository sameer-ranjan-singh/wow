import { Link } from "react-router-dom";

export const ContentNotFound = () => {
  return (
    <div className="mx-8 w-full flex flex-col justify-center items-center gap-4">
      <h1 className="md:text-xl text-gray-100 font-semibold">
        No Content Found !
      </h1>
      <Link to={"/dashboard"}>
        <h2 className="md:text-4xl text-white font-extrabold">
          Go back to{" "}
          <span className="underline underline-offset-8 decoration-4 decoration-gray-400 text-2xl md:text-6xl gradient-title from-gray-700 to-gray-800 bg-opacity-35  hover:from-orange-400 hover:to-orange-700">
            Dashboard
          </span>
        </h2>
      </Link>
    </div>
  );
};
