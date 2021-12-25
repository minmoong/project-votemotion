import axios from "axios";

function get_vote_comment(pathname: string) {
  return axios.post("http://localhost:4000/api/data/get_votecontent_comment", new URLSearchParams({
    pathname: pathname
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(response => response.data.reverse());
}

export default get_vote_comment;