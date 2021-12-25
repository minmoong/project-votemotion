import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const InputUnderline = styled.hr`
  position: absolute;
  z-index: 1;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #999;
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
  transform: scale(0);
  transform-origin: center;
  border: none;
`;

const InputUnfocusedUnderline = styled.hr`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #ccc;
  border: none;
`;

const Input = styled.input.attrs(() => ({
  type: "text",
  name: "VotecontentCreateVotecontentContentTitle",
  autoComplete: "off",
  placeholder: "제목을 입력하세요"
}))`
  width: 100%;
  outline: none;
  border: none;
  padding: 0 15px 15px 15px;
  font-size: 25px;
  background: transparent;
  color: #000;
  
  &::placeholder {
    color: #000;
  }

  &:focus + ${ InputUnderline } {
    opacity: 1;
    transform: scale(1);
  }
`;

function VotecontentCreateVotecontentContentTitle() {
  return (
    <Container>
      <Input />
      <InputUnderline />
      <InputUnfocusedUnderline />
    </Container>
  );
}

export default VotecontentCreateVotecontentContentTitle;