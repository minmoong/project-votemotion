import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FlickItemLayer from "../../component/FlickItemLayer";
import votecontent_upload from "../../module/function/votecontent_upload";
import vote_object_store from "../../module/store/vote_object_store";

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
  <Container onClick={ async () => {
    let result = await votecontent_upload();
    
    if(result === "OK") {
      vote_object_store.dispatch({ type: "REFRESH" });
      navigate("/");
    }

    else if(result.status === "FAILED") {
      console.log(`업로드에 실패하였습니다. 업로드 실패가 반복 될 경우 관리자에게 문의하십시오. errorCode: ${ result.errorCode }`);
    }
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