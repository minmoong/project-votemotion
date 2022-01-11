import axios from "axios";

function gorv(path: string) {
  return axios({
    method: "POST",
    url: "/api/data/gorv",
    data: {
      path: path
    }
  }).then(res => { if(res.data.status === 1) return res.data; else return { status: 0 } });
}

export default gorv;