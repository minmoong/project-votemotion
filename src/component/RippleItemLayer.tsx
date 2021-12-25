import React from "react";
import styled from "styled-components";

const Button = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  padding: 10px 20px;
  background: #0d6efd;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  border-radius: 40px;
`;

const Ripple = styled.span`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  pointer-events: none;
  border-radius: 50%;
  animation: ripple 2s forwards;
  opacity: 0.5;

  @keyframes ripple {
    0% {
      width: 0px;
      height: 0px;
    }

    100% {
      width: 500px;
      height: 500px;
    }
  }
`;

function RippleItemLayer() {
  const [xCoord, setXCoord] = React.useState<number>(-1);
  const [isRippling, setIsRippling] = React.useState<boolean>(false);

  return (
    <>
      <Button
        onMouseDown={ (e) => {
          setXCoord(e.clientX - (e.target as HTMLElement).offsetLeft);
          setIsRippling(true);
        } }
        onMouseUp={ () => {
          setIsRippling(false);
        } }
      >
        {
          isRippling ? 
          <Ripple
            style={ { left: xCoord } }
          /> : <></>
        }
      </Button>
    </>
  );
}

export default RippleItemLayer;