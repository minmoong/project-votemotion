import axios from "axios";

function get_turnout_list(path: string) {
  return axios.post("/api/get-turnout-list", { pathname: path }).then(res => {
    let votecontent_total_votes = +res.data.votecontent_total_votes;
    let votecontent_each_votes: number[] = JSON.parse(res.data.votecontent_each_votes);

    if(votecontent_total_votes === 0) return ([...votecontent_each_votes.map(val => 0)]);
    else return ([...votecontent_each_votes.map(val => (val / votecontent_total_votes) * 100)]);
  });
}

export default get_turnout_list;