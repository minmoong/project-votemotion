import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FlickItemLayer from "../../component/FlickItemLayer";
import user_store from "../../module/store/user_store";
import vote_object_store from "../../module/store/vote_object_store";
import upload_status_store from "../../module/store/upload_status_store";
import UploadIcon from "../../icons/UploadIcon.svg";

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 2px solid #0d6efd;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
`;

function VotecontentCreateUploadbutton() {
  const navigate = useNavigate();

  return (
    <Container onClick={ () => {
      let title = (document.getElementsByName("VotecontentCreateVotecontentContentTitle")[0] as HTMLInputElement).value;
      let nvbNodes: NodeList = document.getElementsByName("VotecontentCreateVotecontentContentInput");
      let votecontent: string[] = [];

      if (
        !(title === "" ||
        (nvbNodes[0] as HTMLInputElement).value === "" ||
        (nvbNodes[1] as HTMLInputElement).value === "")
      ) {
        if(title.length > 40) upload_status_store.dispatch({ type: "SET", status: "제목은 40글자 이내로요!🦄" });
        else if((nvbNodes[0] as HTMLInputElement).value.length > 20 || (nvbNodes[1] as HTMLInputElement).value.length > 20) upload_status_store.dispatch({ type: "SET", status: "항목은 20글자 이내로요!✨" });
        else {
          for(let i = 0; i < nvbNodes.length; i++) {
            let value = (nvbNodes[i] as HTMLInputElement).value;
    
            if(value !== "") votecontent.push(value);
          }
          
          axios.post("/api/data/upload_votecontent", {
            title: title,
            votecontent: votecontent,
            uploader: user_store.getState()
          });
    
          vote_object_store.dispatch({ type: "REFRESH" });
    
          navigate("/");
        }
      } else upload_status_store.dispatch({ type: "SET", status: "빈칸을 채워줘요!😎" });
    } }>
      <FlickItemLayer
        elementItem={
          <Wrap>
            <img src={ UploadIcon } alt="투표 업로드하기 버튼" style={ {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            } } />
          </Wrap>
        }
      />
    </Container>
  );
}

export default VotecontentCreateUploadbutton;