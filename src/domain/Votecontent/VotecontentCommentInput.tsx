import React from "react";
import styled from "styled-components";
import VotecontentCommentUploadbutton from "./VotecontentCommentUploadbutton";

const Container = styled.div`
  display: flex;
`;

const Wrap = styled.div`
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
  name: "VotecontentCommentCreateContent",
  autoComplete: "off",
  placeholder: "댓글을 입력하세요"
}))`
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  padding-bottom: 10px;
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

function VotecontentCommentInput() {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  return (
    <Container>
      <Wrap >
        <Input onChange={ (event) => {
          if(event.target.value === "") setIsActive(false);
          else if(event.target.value !== "") setIsActive(true);
        } } />
        <InputUnderline />
        <InputUnfocusedUnderline />
      </Wrap>
      <VotecontentCommentUploadbutton isActive={ isActive } setIsActive={ setIsActive } />
    </Container>
  );
}

export default VotecontentCommentInput;