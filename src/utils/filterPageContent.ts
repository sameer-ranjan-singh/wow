import { FilterProp } from "../types/pageProps";

export function filterContentByPage({ contents, pageName }: FilterProp) {
  if(!pageName){
    const enabledContent = contents?.enabledData 
    return enabledContent;
  }
  const enabledContent = contents?.enabledData.filter(
    (content) => content.type === pageName
  );
  return enabledContent;
}
