import styled from "styled-components";

const PointerEventsNoneLayer = styled.div`
  pointer-events: none;

  & * {
    pointer-events: none;
  }
`;

const Layer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;
    left: 0;
    background: #000000;
    pointer-events: none;
    width: 100%;
    height: 100%;
    opacity: 0.15;
  }
`;

type Props = {
  elementItem: JSX.Element;
};

function PulseItemLayer(props: Props) {
  let pulse = document.createElement("span");

  return (
    <Layer
      onMouseDown={ (e) => { (e.target as HTMLElement).appendChild(pulse); } }
      onMouseUp={ () => { pulse.remove(); } }
    >
      <PointerEventsNoneLayer>
        { props.elementItem }
      </PointerEventsNoneLayer>
    </Layer>
  );
}

export default PulseItemLayer;