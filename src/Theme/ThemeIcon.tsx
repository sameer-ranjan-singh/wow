import { Dispatch, SetStateAction, useContext } from "react";
import { ThemeContext } from "./ThemeProvider"
import { ThemeEnum, themeVariantStyles } from "./themeVariantStyles"

export const ThemeIcon = () => {
  const { themeStyle, setShowTheme, showTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col text-center`}
      onMouseEnter={() => setShowTheme(!showTheme)}
      onMouseLeave={() => setShowTheme(!showTheme)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={`${themeStyle.header.btn.text} size-8 bg-gradient-to-b from-yellow-300 to-yellow-500 p-1 rounded-lg hover:rounded-b-none  animate-bounce shadow-md hover:shadow-lg `}
        onClick={() => setShowTheme(!showTheme)}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
      {showTheme && (
        <div className="">
          <SelectTheme setShowTheme={setShowTheme} />
        </div>
      )}
    </div>
  );
};

export const SelectTheme = ({
  setShowTheme,
}: {
  setShowTheme: Dispatch<SetStateAction<boolean>>;
}) => {
  const { themeStyle, toggleTheme } = useContext(ThemeContext);

  const handleSelectOptionClick = (themeName: ThemeEnum) => {
    toggleTheme(themeName);
    setShowTheme(false);
  };

  return (
    <ul
      id="selectedtheme"
      className={`absolute p-2 space-y-4 font-semibold font-mono outline-none capitalize bg-opacity-80 shadow-md rounded-lg rounded-t-none ${themeStyle.features.bgGradient}`}
    >
      {/* LIGHT */}
      <li
        onMouseEnter={() => toggleTheme(ThemeEnum.LIGHT)}
        onClick={() => handleSelectOptionClick(ThemeEnum.LIGHT)}
        className="cursor-pointer"
      >
        <div className="flex rounded-full border-2 border-blue-600">
          <span className={`rounded-l-full w-2 h-4 bg-blue-100`}></span>
          <span className={`rounded-r-full w-2 h-4 bg-blue-600`}></span>
        </div>
      </li>

      {/* DARK */}
      <li
        onMouseEnter={() => toggleTheme(ThemeEnum.DARK)}
        onClick={() => handleSelectOptionClick(ThemeEnum.DARK)}
        className="cursor-pointer"
      >
        <div className="flex rounded-full border-2">
          <div
            className={`rounded-full w-4 h-4 ${themeVariantStyles.dark.intro.bgGradient}`}
          ></div>
        </div>
      </li>

      {/* ALPHA */}
      <li
        onMouseEnter={() => toggleTheme(ThemeEnum.ALPHA)}
        onClick={() => handleSelectOptionClick(ThemeEnum.ALPHA)}
        className="cursor-pointer"
      >
        <div className="flex rounded-full border-2 border-yellow-400">
          <div className={`rounded-l-full w-2 h-4 bg-yellow-100`}></div>
          <div
            className={`rounded-r-full w-2 h-4 ${themeVariantStyles.alpha.intro.bgGradient}`}
          ></div>
        </div>
      </li>

      {/* SASSY */}
      <li
        onMouseEnter={() => toggleTheme(ThemeEnum.SAASY)}
        onClick={() => handleSelectOptionClick(ThemeEnum.SAASY)}
        className="cursor-pointer"
      >
        <div className="flex rounded-full border-2 border-gray-600">
          <div
            className={`rounded-l-full w-2 h-4 ${themeVariantStyles.sassy.intro.bgGradient}`}
          ></div>
          <div className={`rounded-r-full w-2 h-4 bg-neutral-900`}></div>
        </div>
      </li>

      {/* WOW */}
      <li
        onMouseEnter={() => toggleTheme(ThemeEnum.WOW)}
        onClick={() => handleSelectOptionClick(ThemeEnum.WOW)}
        className="cursor-pointer"
      >
        <div className="flex rounded-full border-2 border-orange-500">
          <div className={`rounded-l-full w-2 h-4 bg-orange-200`}></div>
          <div
            className={`rounded-r-full w-2 h-4 ${themeVariantStyles.wow.intro.bgGradient}`}
          ></div>
        </div>
      </li>
    </ul>

    // <select
    //   id="selectedtheme"
    //   name="selectedtheme"
    //   value={themeName}
    //   onChange={handleOnChange}
    //   className="p-2 font-semibold font-mono outline-none capitalize bg-opacity-80 bg-white shadow-md"
    // >
    //   <option value={ThemeEnum.LIGHT}>{ThemeEnum.LIGHT}</option>
    //   <option value={ThemeEnum.DARK}>{ThemeEnum.DARK}</option>
    //   <option value={ThemeEnum.WOW}>{ThemeEnum.WOW}</option>
    //   {/* <option value={ThemeEnum.SAASY}>{ThemeEnum.SAASY}</option>
    //   <option value={ThemeEnum.ALPHA}>{ThemeEnum.ALPHA}</option>
    //   <option value={ThemeEnum.ZEE}>{ThemeEnum.ZEE}</option> */}
    // </select>
  );
};
