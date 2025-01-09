import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";

export interface ContentProps {
  type: String;
  title: String;
  link: String;
  tags: String;
}
export function useContent() {
  const [contents, setContent] = useState<ContentProps[]>([]);

  const fetchContent = async () => {
    const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const contentData = await response.data.content;
    setContent(contentData);
  };

  useEffect(() => {
    fetchContent();
  }, []);
  return contents;
}
