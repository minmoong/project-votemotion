import axios from "axios";

function get_vote_objects() {
    return axios.get("http://localhost:4000/api/data/get_votecontent_objects").then(response => response);
};

export default get_vote_objects;