import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: fit-content;
    transform: scale(${ ({ isPressing }: { isPressing: boolean }) => isPressing ? "0.8" : "1" });
    transition: transform 0.3s;
`;

function FlickItemLayer(props: { elementItem: JSX.Element }) {
    const [isPressing, setIsPressing] = React.useState<boolean>(false);

    return (
        <Container
            onMouseDown={ () => { setIsPressing(true); } }
            onMouseUp={ () => { setIsPressing(false); } }
            onTouchStart={ () => { setIsPressing(true); } }
            onTouchEnd={ () => { setIsPressing(false); } }
            isPressing={ isPressing }
        >
            { props.elementItem }
        </Container>
    );
}

export default FlickItemLayer;