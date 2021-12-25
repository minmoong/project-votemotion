import axios from "axios";

function votecontent_upload() {
    let title = (document.getElementsByName("VotecontentCreateVotecontentContentTitle")[0] as HTMLInputElement).value;
    let nvbNodes: NodeList = document.getElementsByName("VotecontentCreateVotecontentContentInput");
    let content: string[] = [];

    for(let i = 0; i < nvbNodes.length; i++) {
        let value = (nvbNodes[i] as HTMLInputElement).value;

        if(value !== "") {
            content.push(value);
        }
    }
    
    return axios.post("http://localhost:4000/api/data/upload_votecontent", new URLSearchParams({
        title: title,
        content: JSON.stringify(content)
    }), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(response => {
        if(response.data.status === "OK") {
            return "OK";
        }

        else if(response.data.status === "FAILED") {
            return response.data;
        }
    });
}

export default votecontent_upload;