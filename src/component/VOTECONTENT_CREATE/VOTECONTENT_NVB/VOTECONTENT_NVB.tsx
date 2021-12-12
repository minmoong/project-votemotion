/* VOTECONTENT_NVB = VOTECONTENT_NEWVOTECONTENTBOX */

/* module */
import React from "react";
import styled from "styled-components";

/* component */
import NVB_FILLER from "./NVB_FILLER/NVB_FILLER";
import VOTECONTENT_ADDBUTTON from "./VOTECONTENT_ADDBUTTON/VOTECONTENT_ADDBUTTON";

const CONTAINER = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > * {
        box-sizing: border-box;

        @media (max-width: 1000px) {
            width: 100%;
            margin: 0 0 15px 0;
        }

        @media (min-width: 1001px) and (max-width: 1500px) {
            width: calc(100% / 3 - 15px);
            margin: 0 15px 15px 0;
        }

        @media (min-width: 1501px) {
            width: calc(25% - 15px);
            margin: 0 15px 15px 0;
        }
    }
`;

function VOTECONTENT_NVB() {
    return (
        <React.Fragment>
            <CONTAINER>
                <NVB_FILLER />
                <VOTECONTENT_ADDBUTTON />
            </CONTAINER>
        </React.Fragment>
    );
}

export default VOTECONTENT_NVB;