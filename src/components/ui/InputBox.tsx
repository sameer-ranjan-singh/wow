import React, { useState } from "react";
import { searchInput } from "../../utils/search";
import { SearchSuggestion } from "./SearchSuggestion";
import { ContentProps } from "../../hooks/useContent";
import { SearchIcon } from "../../icons/SearchIcon";

export const InputBox = ({ searchList }:{searchList: ContentProps[]}) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<String[]>([]);

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
    searchInput({ input: search, searchList, setSearchResult });
  };
  return (
    <div className="relative flex justify-center items-center border px-2 rounded-lg focus:border-red-500">
      <SearchIcon/>
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={handleSearchOnChange}
        className="p-2 rounded-md outline-none w-24 md:w-auto"
      />
      {search !== "" && <SearchSuggestion searchResult={searchResult} />}
    </div>
  );
};
