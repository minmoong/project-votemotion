import { createStore } from "redux";

export default createStore((count_list: number[] = [0], action) => {
    switch(action.type) {
        case "ADDBUTTON_CLICK":
            count_list = [...count_list, [...count_list].slice(-1)[0] + 1];
            return count_list;
        
        case "COUNT_LIST_CLEAR":
            count_list = [0];
            return count_list;
        
        default:
            return count_list;
    }
});