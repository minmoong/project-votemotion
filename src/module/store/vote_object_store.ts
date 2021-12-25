import { createStore } from "redux";
import get_vote_object from "../function/get_vote_object";

export default createStore((vote_object: any, action) => {
  switch(action.type) {
    case "REFRESH":
      vote_object = get_vote_object();
      return vote_object;
    
    default:
      return vote_object;
  }
});