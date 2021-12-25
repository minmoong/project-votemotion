import axios from "axios";

function votecontent_comment_upload(pathname: string) {
  let commentInputNode = (document.getElementsByName("VotecontentCommentCreateContent")[0] as HTMLInputElement);
  let comment = commentInputNode.value;
  
  return axios.post("http://localhost:4000/api/data/upload_comment", new URLSearchParams({
    pathname: pathname,
    comment: comment
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(response => {
    commentInputNode.value = "";
    if(response.data.status === "OK") {
      return "OK";
    }

    else if(response.data.status === "FAILED") {
      return response.data;
    }
  });
}

export default votecontent_comment_upload;