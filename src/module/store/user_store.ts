import { createStore } from "redux";

export default createStore((user: User = {}, action: { type: string; user: User; }) => {
  switch(action.type) {
    case "SET":
      user = action.user;
      return user;

    case "LOGOUT":
      user = {};
      return user;

    default:
      return user;
  }
});