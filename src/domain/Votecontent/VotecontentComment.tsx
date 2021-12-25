import React from "react";
import styled from "styled-components";
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
  commentUsername: string;
  commentUserProfileImageSource: string;
  commentContent: string;
};

class VotecontentComment extends React.Component<Props, {}> {
  render() {
    return (
      <Comment>
        <div>
          <Profile />
        </div>
        <CommentInfoWrap>
          <Username>
            { this.props.commentUsername }
          </Username>
          <Content>
            { this.props.commentContent }
          </Content>
        </CommentInfoWrap>
      </Comment>
    );
  }
}

export default VotecontentComment;