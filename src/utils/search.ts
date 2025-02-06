import { ContentProps } from "../hooks/useContent"

interface searchInputProps {
  input: string
  searchList: ContentProps[]
  setSearchResult: React.Dispatch<React.SetStateAction<String[]>>
}

export const searchInput = ({input, searchList, setSearchResult}: searchInputProps)=> {
    const expectedContent = searchList.filter((content)=> ( content.title.toLowerCase().includes(input.toLowerCase())))
    console.log("expectedContent :",expectedContent)
    const titleList = expectedContent.map(content => content.title)
    setSearchResult(titleList)
    console.log(titleList)
  //  return titleList
}