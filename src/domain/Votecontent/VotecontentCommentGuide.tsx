import styled from "styled-components";

const CommentGuideWrap = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px;
  margin-bottom: 35px;
  border-radius: 15px;
  border: 1px solid tomato;
`;

const CommentGuide = styled.div`
  text-align: center;
`;

function VotecontentCommentGuide() {
  return (
    <CommentGuideWrap>
      <CommentGuide>
        댓글 커뮤니티 가이드를 위반한 댓글은 삭제 될 수 있습니다.
      </CommentGuide>
    </CommentGuideWrap>
  );
}

export default VotecontentCommentGuide;