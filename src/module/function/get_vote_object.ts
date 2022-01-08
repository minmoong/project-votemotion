import axios from "axios";

function get_vote_object() {
    return axios.get("/api/data/get_votecontent_object").then(response => response.data.reverse());
}

export default get_vote_object;