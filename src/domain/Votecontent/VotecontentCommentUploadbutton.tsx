import styled from "styled-components";
import FlickItemLayer from "../../component/FlickItemLayer";
import votecontent_comment_upload from "../../module/function/votecontent_comment_upload";
import SendIcon from "../../icons/SendIcon";
import comment_store from "../../module/store/comment_store";

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
      await votecontent_comment_upload(window.location.pathname);
      comment_store.dispatch({ type: "REFRESH", path: window.location.pathname });
      props.setIsActive(false);
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