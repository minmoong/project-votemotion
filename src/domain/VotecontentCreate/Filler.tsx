import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Wrap = styled.div`
  display: flex;
  height: 50px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input.attrs(() => ({
	type: "text",
	name: "VotecontentCreateVotecontentContentInput",
	autoComplete: "off",
	placeholder: "항목을 입력하세요"
}))`
	height: 50px;
	width: 100%;
	outline: none;
	border: none;
	background: transparent;
	font-size: 17px;
`;

function Filler() {
  return (
    <Container>
      <Wrap>
        <Input />
      </Wrap>
    </Container>
  );
}

export default Filler;