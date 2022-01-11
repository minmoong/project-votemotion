import { createStore } from "redux";

export default createStore((vote_object: any = [], action: { type: string; vote_object?: any }) => {
  switch(action.type) {
    case "SET":
      vote_object = action.vote_object;
      return vote_object;

    case "REFRESH":
      vote_object = [];
      return vote_object;
    
    default:
      return vote_object;
  }
});