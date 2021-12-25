import React from "react";
import styled from "styled-components";
import user_common_profile from "../../icon/user_common_profile.png";
import VotecontentCommentInput from "./VotecontentCommentInput";

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

const VotecontentCommentInputWrap = styled.div`
  width: 100%;
  height: 40px;
`;

function VotecontentCreateComment() {
  return (
    <Comment>
      <div>
        <Profile />
      </div>
      <VotecontentCommentInputWrap>
        <VotecontentCommentInput />
      </VotecontentCommentInputWrap>
    </Comment>
  );
}

export default VotecontentCreateComment;