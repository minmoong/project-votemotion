import axios from "axios";
import user_store from "../store/user_store";

function votecontent_comment_upload(pathname: string) {
  let commentInputNode = (document.getElementsByName("VotecontentCommentCreateContent")[0] as HTMLInputElement);
  let comment = commentInputNode.value;
  let uploader = user_store.getState().nickname;
  
  return axios.post("/api/data/upload_comment", {
    pathname: pathname,
    comment: comment,
    uploader: uploader
  }).then(res => {
    commentInputNode.value = "";
    
    return res.data;
  });
}

export default votecontent_comment_upload;