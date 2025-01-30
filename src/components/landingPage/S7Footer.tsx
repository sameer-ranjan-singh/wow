import { data } from "./data";

const S7Footer = () => {
  const footer = data?.section9;

  return (
    <section
      id="footer"
      className={`w-full md:px-20 bg-gradient-to-b from-neutral-800 to bg-neutral-950`}
    >
      <div className="flex flex-wrap gap-10 justify-between items-start text-gray-400 mx-5 my-20">
        <div className="flex flex-col border-neutral-800">
          <h1 className="font-bold text-2xl text-white mb-5">{footer.title}</h1>
          <p>{footer.description}</p>
          <div className="gap-2 flex my-4">
            {footer.social.map((socialIcon) => (
              // <div>{socialIcon.icon}</div>
              <div className="">
                <socialIcon.icon />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-28">
          {footer.navLinks.map((nav) => (
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-white mb-6">
                {nav.title}
              </h1>
              <div className="">
                <ul className="space-y-4">
                  {nav.labels.map((label) => (
                    <li key={label.name}>
                      <a
                        href={"#" + `${label.href}`}
                        className="hover:text-white transition duration-300"
                      >
                        {label.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default S7Footer;
