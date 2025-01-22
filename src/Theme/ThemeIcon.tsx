import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeProvider";
import { ThemeEnum } from "./Themes";

export const ThemeIcon = () => {
  const [showTheme, setShowTheme] = useState(false);

  return (
    <div className="flex flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-8 hover:bg-neutral-200 p-1 rounded-lg animate-pulse active:text-red-600 hover:shadow-lg"
        onClick={() => setShowTheme(!showTheme)}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
    </div>
  );
};

export const SelectTheme = () => {
  const { themeStyle, themeName, toggleTheme } = useContext(ThemeContext);

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    toggleTheme(e.target.value as ThemeEnum);
  };

  return (
    <select
      id="selectedtheme"
      name="selectedtheme"
      value={themeName}
      onChange={handleOnChange}
      className="p-2 font-semibold font-mono outline-none capitalize bg-opacity-80 bg-white shadow-md"
    >
      <option value={ThemeEnum.LIGHT}>{ThemeEnum.LIGHT}</option>
      <option value={ThemeEnum.DARK}>{ThemeEnum.DARK}</option>
      <option value={ThemeEnum.WOW}>{ThemeEnum.WOW}</option>
      <option value={ThemeEnum.SAASY}>{ThemeEnum.SAASY}</option>
      <option value={ThemeEnum.ALPHA}>{ThemeEnum.ALPHA}</option>
      <option value={ThemeEnum.ZEE}>{ThemeEnum.ZEE}</option>
    </select>
  );
};
