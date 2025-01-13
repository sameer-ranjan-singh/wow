import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-2 md:gap-4">
        <div className="text-gray-400 font-medium md:text-4xl">Sorry ! Page Not Found</div>
        <div className=" md:text-3xl flex gap-2">
            <div className="">Go back to </div>
            <div  className="font-extrabold hover:underline animate-pulse">
                <Link to={"/dashboard"}>Dashboard</Link> 
            </div>
        </div>
    </div>
  )
}
