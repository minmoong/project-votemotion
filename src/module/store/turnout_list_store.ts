import { createStore } from "redux";
import get_turnout_list from "../function/get_turnout_list";

export default createStore((turnoutList: any, action: { type: string; path: string }) => {
  switch(action.type) {
    case "REFRESH":
      turnoutList = get_turnout_list(action.path);
      return turnoutList;
    
    default:
      return turnoutList;
  }
});