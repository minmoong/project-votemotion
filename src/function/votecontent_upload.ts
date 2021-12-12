import axios from "axios";

function votecontent_upload() {
    let title = (document.getElementsByName("votecontent_nvt")[0] as HTMLInputElement).value;
    let nvbNodes: NodeList = document.getElementsByName("votecontent_nvb");
    let contents: string[] = [];

    for(let i = 0; i < nvbNodes.length; i++) {
        let value = (nvbNodes[i] as HTMLInputElement).value;

        if(value !== "") {
            contents.push(value);
        }
    }
    
    return axios.post("http://localhost:4000/api/data/upload_votecontent", new URLSearchParams({
        title: title,
        contents: JSON.stringify(contents)
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