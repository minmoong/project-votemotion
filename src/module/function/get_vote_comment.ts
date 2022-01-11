import axios from "axios";

function get_vote_comment(pathname: string) {
  return axios.post("/api/data/get_comment", { pathname }).then(res => res.data.reverse());
}

export default get_vote_comment;