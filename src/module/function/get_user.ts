import axios from "axios";

function get_user() {
  return axios.get("/api/logged-in").then(res => res.data);
}

export default get_user;