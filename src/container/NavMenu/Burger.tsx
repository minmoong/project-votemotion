import styled from "styled-components";

const Circle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 27%;
  border: 1px solid #0d6efd;
`;

const StyledBugger = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 14px;

  span {
    position: absolute;
    left: 0;
    opacity: 1;
    border: none;
    width: 100%;
    height: 2px;
    background-color: #0d6efd;
    transition: 0.2s linear;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2), span:nth-child(3) {
    top: 6px;
  }

  span:nth-child(4) {
    top: 12px;
  }

  ${ (props: { isOpen: boolean }) => ( props.isOpen ? `
    span:nth-child(1) {
      width: 0%;
      left: 50%;
      opacity: 0;
    }

    span:nth-child(2) {
      transform: rotate(45deg);
    }

    span:nth-child(3) {
      transform: rotate(-45deg);
    }

    span:nth-child(4) {
      width: 0%;
      left: 50%;
      opacity: 0;
    }
  ` : `` ) }
`;

type Props = {
  isOpen: boolean;
}

function Burger(props: Props) {
  return (
    <Circle>
      <StyledBugger isOpen={ props.isOpen }>
        <span />
        <span />
        <span />
        <span />
      </StyledBugger>
    </Circle>
  );
}

export default Burger;