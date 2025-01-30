import { data } from "./data";
import { UserIcon } from "../../icons/UserIcon";

const S6Testimonial = () => {
  const testimonials = data?.section6;

  return (
    <section
      id="testimonials"
      className={`w-full bg-gradient-to-bl from-orange-500 to-orange-600`}
    >
      <div className="min-h-screen flex flex-col justify-center items-center mx-2 gap-10 mt-20">
        <div>
          <h3 className="text-3xl md:text-6xl font-extrabold mb-1 text-center font-serif  gradient-title bg-gradient-to-br from-gray-500 to-black ">
            {testimonials.title}
          </h3>
          <p className="text-lg md:text-xl text-gray-700 text-center font-mono">
            {testimonials.description}
          </p>
        </div>
        <div className=" flex justify-center items-center w-full">
          <div className=" h-80 flex justify-start w-full md:w-1/2 items-start p-2 gap-5 px-5 my-4 mx-2 rounded-lg overflow-x-auto overflow-y-hidden ">
            {testimonials.clients.map((client) => (
              <div className="flex flex-col justify-start items-start gap-5 rounded-lg shadow-lg p-10 bg-neutral-700">
                <div className="flex gap-3 justify-center">
                  <div className="text-orange-500 pt-1">
                    <UserIcon />
                  </div>
                  <div className="flex flex-col text-orange-400">
                    <h2 className="font-bold text-lg text-orange-400">
                      {client.name}
                    </h2>
                    <h1 className="text-orange-500">{client.role}</h1>
                  </div>
                </div>
                <p className="text-gray-300">{client.review}</p>
                <div className="">Todo : Stars</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default S6Testimonial;
