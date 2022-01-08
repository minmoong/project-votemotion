import { createStore } from "redux";

export default createStore((is_login: boolean = false, action: { type: string; is_login: boolean; }) => {
  switch(action.type) {
    case "SET":
      is_login = action.is_login;
      return is_login;
    
    default:
      return is_login;
  }
});