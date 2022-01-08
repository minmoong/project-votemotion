import React from "react";
import styled from "styled-components";
import created_at from "../../module/function/created_at";
import user_common_profile from "../../icon/user_common_profile.png";

const Comment = styled.div`
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
    </Comment>
  );
}

export default VotecontentComment;