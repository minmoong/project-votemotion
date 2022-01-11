import { createStore } from "redux";

export default createStore((status: string = "", action: { type: string; status: string; }) => {
  switch(action.type) {
    case "SET":
      status = action.status;
      return status;
    
    default:
      return status;
  }
});