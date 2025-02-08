import { FilterProp } from "../types/pageProps";

export function filterContentByPage({ contents, pageName }: FilterProp) {
  const enabledContent = contents?.enabledData.filter(
    (content) => content.type === pageName
  );
  return enabledContent;
}
