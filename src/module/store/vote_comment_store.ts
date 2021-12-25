import { createStore } from "redux";
import get_vote_comment from "../function/get_vote_comment";

export default createStore((vote_comment: any = [], action: { type: string; pathname: string }) => {
  switch(action.type) {
    case "REFRESH":
      vote_comment = get_vote_comment(action.pathname);
      return vote_comment;

    case "CLEAR":
      vote_comment = [];
      return vote_comment;
    
    default:
      return vote_comment;
  }
});