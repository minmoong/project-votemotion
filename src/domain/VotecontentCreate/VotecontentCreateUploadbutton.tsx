import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FlickItemLayer from "../../component/FlickItemLayer";
import vote_object_store from "../../module/store/vote_object_store";
import user_store from "../../module/store/user_store";

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-bottom: 25px;
  cursor: pointer;
`;

const Wrap = styled.div`
  cursor: pointer;
  width: 70px;
  height: 30px;
  background: #0d6efd;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  line-height: 30px;
`;

function VotecontentCreateUploadbutton() {
  const navigate = useNavigate();

  return (
    <Container onClick={ () => {
      let title = (document.getElementsByName("VotecontentCreateVotecontentContentTitle")[0] as HTMLInputElement).value;
      let nvbNodes: NodeList = document.getElementsByName("VotecontentCreateVotecontentContentInput");
      let votecontent: string[] = [];

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
    } }>
      <FlickItemLayer
        elementItem={
          <Wrap>
            업로드
          </Wrap>
        }
      />
    </Container>
  );
}

export default VotecontentCreateUploadbutton;