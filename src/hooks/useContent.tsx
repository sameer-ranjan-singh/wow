import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";

export interface ContentProps {
  _id?: String;
  type: String;
  title: String;
  link: String;
  tags?: String;
  favourite: Boolean;
  disableCard?: Boolean;
  createdAt: String;
  updatedAt?: String
}
export interface ContentLiveOrDeleted {
  enabledData: ContentProps[]
  disabledData: ContentProps[]
}
export function useContent() {
  const [contents, setContent] = useState<ContentLiveOrDeleted>({enabledData: [], disabledData: []});

  async function fetchContent() {
    const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const contentData = await response.data.content;
    // console.log("contentData in useContent :",contentData)
    const enabledData = await contentData.filter((data: ContentProps)=> data.disableCard === false)
    const disabledData = await contentData.filter((data: ContentProps)=> data.disableCard === true)
    setContent({enabledData: enabledData, disabledData: disabledData});
  }

  useEffect(() => {
    fetchContent();
  }, []);
  return contents;
}

/*
todo:
check which renders first, return or useeffect then filter content as per disabled card = false
*/
