import axios from "axios";

function get_vote_comment(pathname: string) {
  return axios.post("/api/data/get_comment", new URLSearchParams({
    pathname
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(res => res.data.reverse());
}

export default get_vote_comment;