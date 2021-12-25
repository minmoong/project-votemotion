import styled from "styled-components";
import FlickItemLayer from "../../component/FlickItemLayer";
import votecontent_comment_upload from "../../module/function/votecontent_comment_upload";
import SendIcon from "../../icon/SendIcon";
import vote_comment_store from "../../module/store/vote_comment_store";

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: 5px;
`;

const Wrap = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  cursor: ${ (props: { isActive: boolean }) => (props.isActive ? "pointer" : "default") };
  border: 2px solid ${ (props: { isActive: boolean }) => (props.isActive ? "#0d6efd" : "#909090") };
  border-radius: 10px;
  text-align: center;
  color: #fff;
`;

const IconWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
`;

type Props = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

function VotecontentCommentUploadbutton(props: Props) {
  return (
    <Container onClick={ props.isActive ? async () => {
      let result = await votecontent_comment_upload(window.location.pathname);
      
      props.setIsActive(false);

      if(result === "OK") {
        vote_comment_store.dispatch({ type: "REFRESH", pathname: window.location.pathname });
      }
  
      else if(result.status === "FAILED") {
        console.log(`댓글 업로드에 실패하였습니다. 업로드 실패가 반복 될 경우 관리자에게 문의하십시오. errorCode: ${ result.errorCode }`);
      }
    } : () => {} }>
      <FlickItemLayer
        elementItem={
          <Wrap isActive={ props.isActive }>
            <IconWrap>
              <SendIcon isActive={ props.isActive } />
            </IconWrap>
          </Wrap>
        }
      />
    </Container>
  );
}

export default VotecontentCommentUploadbutton;