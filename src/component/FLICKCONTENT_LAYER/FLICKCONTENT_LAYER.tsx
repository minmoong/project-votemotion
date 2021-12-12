import React from "react";
import styled from "styled-components";


interface Props {
    element: JSX.Element;
}

interface CONTAINERProps {
    is_pressed: boolean;
}

const CONTAINER = styled.div<CONTAINERProps>`
    width: fit-content;
    cursor: pointer;
    transform: scale(${ ({ is_pressed }) => is_pressed ? "0.85" : "1" });
    transition: transform 0.3s;
`;

function FLICKCONTENT_LAYER(props: Props) {
    const [is_pressed, is_pressed_change] = React.useState(false);

    return (
        <React.Fragment>
                <CONTAINER
                    onMouseDown={ () => { is_pressed_change(true); } }
                    onMouseUp={ () => { is_pressed_change(false); } }
                    onTouchStart={ () => { is_pressed_change(true); } }
                    onTouchEnd={ () => { is_pressed_change(false); } }
                    is_pressed={ is_pressed }
                >
                    { props.element }
                </CONTAINER>
        </React.Fragment>
    );
}

export default FLICKCONTENT_LAYER;