import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

const Icon = styled.div`
  margin-right: 10px;
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
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: scale(0);
  transform-origin: center;
  border: none;

  ${ (props: { isFocus: boolean }) => (props.isFocus ? `
    opacity: 1;
    transform: scale(1);
  ` : "") }
`;

const InputUnfocusedUnderline = styled.hr`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #cccccc;
  border: none;
`;

const Input = styled.input`
  width: 240px;
  outline: none;
  border: none;
  font-size: 16px;
  padding-bottom: 10px;
  background: transparent;
  color: #000000;
  user-select: text;

  &::selection {
    background: #afc9f3;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  transition: all 0.3s;

  ${ (props: { isFocus: boolean }) => (props.isFocus ? `
    top: -20px;
    font-size: 14px;
    color: #0d6efd;
  ` : "") }
`;

type Props = {
  type: string;
  placeholder: string;
  inputState: string;
  setInputState: (inputState: string) => void;
  iconComponent: any;
};

function InformationInputLayer(props: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = React.useState<boolean>(false);

  return (
    <Container onClick={ () => {
      if(inputRef.current instanceof HTMLInputElement) {
        inputRef.current.focus();
      }
    } }>
      <Icon>
        <props.iconComponent />
      </Icon>
      <label>
        <Input
          ref={ inputRef }
          spellCheck="false"
          type={ props.type }
          onChange={ (e) => { props.setInputState(e.target.value); } }
          onFocus={ () => { setIsFocus(true); } }
          onBlur={ (e) => { if(e.target.value === "") setIsFocus(false); } }
        />
        <Placeholder isFocus={ isFocus }>
          { props.placeholder }
        </Placeholder>
      </label>
      <InputUnderline isFocus={ isFocus } />
      <InputUnfocusedUnderline />
    </Container>
  );
}

export default InformationInputLayer;