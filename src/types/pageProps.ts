import { ContentLiveOrDeleted } from "../hooks/useContent";

export interface FilterProp {
  contents: ContentLiveOrDeleted;
  pageName?: "Twitter" | "Doc" | "Youtube" | "Link" | "Fav";
}
