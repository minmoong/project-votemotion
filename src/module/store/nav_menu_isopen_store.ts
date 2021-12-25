import { createStore } from "redux";

export default createStore((isOpen: boolean = false, action: { type: string; isOpen: boolean; }) => {
  switch(action.type) {
    case "CHANGE":
      isOpen = action.isOpen;
      return isOpen;
    
    default:
      return isOpen;
  }
});