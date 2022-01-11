import { createStore } from "redux";
import get_vote_comment from "../function/get_vote_comment";

export default createStore((comment: any, action: { type: string; path?: string }) => {
  switch(action.type) {
    case "REFRESH":
      comment = get_vote_comment(action.path as string);
      return comment;

    case "CLEAR":
      comment = [];
      return comment;
    
    default:
      return comment;
  }
});