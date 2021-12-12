/* module */
import React from "react";
import styled from "styled-components";

interface Props {
    turnout: number;
};

const CONTAINER = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${ ({ turnout }: Props ) => (turnout) }%;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
`;

function VOTECONTENT_PROGRESSBAR(props: Props) {
    return (
        <React.Fragment>
            <CONTAINER turnout={ props.turnout }></CONTAINER>
        </React.Fragment>
    );
}

export default VOTECONTENT_PROGRESSBAR;