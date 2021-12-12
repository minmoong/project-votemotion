/* module */
import { createStore } from "redux";

/* function */
import get_vote_objects from "../function/get_vote_objects";

export default createStore((vote_object: any, action) => {
    switch(action.type) {
        case "REFRESH":
            vote_object = get_vote_objects();
            return vote_object;
        
        default:
            return vote_object;
    }
});