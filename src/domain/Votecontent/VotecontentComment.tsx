import styled from "styled-components";
import axios from "axios";
import Vert from "../../component/Vert";
import created_at from "../../module/function/created_at";
import user_store from "../../module/store/user_store";
import comment_store from "../../module/store/comment_store";
import user_common_profile from "../../icons/user_common_profile.png";
import { ReactComponent as DeleteIcon } from "../../icons/DeleteIcon.svg";

const Comment = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 23px;
`;

const Profile = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("${ user_common_profile }");
  background-size: 40px;
  border-radius: 20px;
  margin-right: 12px;
`;

const CommentInfoWrap = styled.div`
  width: 100%;
`;

const Username = styled.div`
  position: relative;
  top: -3px;
  font-weight: bold;
  display: flex;
`;

const CommentStatus = styled.div`
  position: relative;
  top: 3px;
  margin-left: 5px;
  color: #aaa;
  font-size: 13px;
`;

const Content = styled.div`
  position: relative;
  top: -5px;
  user-select: text;
  width: 100%;

  &::selection {
    background: #afc9f3;
  }
`;

const CommentFixer = styled.div``;

const Dropdown = styled.div`
  position: absolute;
  z-index: 1;
  top: 30px;
  right: 0;
  width: 70px;
  height: 30px;
  background: #0d6efd;
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  uploader: string;
  comment: string;
  created_at: number;
};

function VotecontentComment(props: Props) {
  return (
    <Comment>
      <div>
        <Profile />
      </div>
      <CommentInfoWrap>
        <Username>
          <div>
            { props.uploader }
          </div>
          <CommentStatus>
            { created_at(props.created_at) }
          </CommentStatus>
        </Username>
        <Content>
          { props.comment }
        </Content>
      </CommentInfoWrap>
      <CommentFixer>
        {
          props.uploader === user_store.getState().nickname
          &&
          <Vert>
            <Dropdown onClick={() => {
              axios({
                method: "POST",
                url: "/api/data/delete-comment",
                data: {
                  path: window.location.pathname,
                  created_at: props.created_at
                }
              }).then(res => {
                comment_store.dispatch({ type: "REFRESH", path: window.location.pathname });
              });
            }}>
              <DeleteIcon style={{ height: "15px", width: "15px" }} />
              삭제
            </Dropdown>
          </Vert>
        }
      </CommentFixer>
    </Comment>
  );
}

export default VotecontentComment;