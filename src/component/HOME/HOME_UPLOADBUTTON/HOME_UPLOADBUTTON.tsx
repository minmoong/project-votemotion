/* module */
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

/* component */
import FLICKCONTENT_LAYER from "../../FLICKCONTENT_LAYER/FLICKCONTENT_LAYER";

const CONTAINER = styled.div`
    margin: 0 0 20px 0;
`;

const WRAP = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 35px;
    border: 1px solid #0086E5;
    border-radius: 35px;
    padding: 0 15px;
    cursor: pointer;
`;

const CONTENT = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #0086E5;
`;

function HOME_UPLOADBUTTON() {
    const navigate = useNavigate();
    
    return (
        <React.Fragment>
            <FLICKCONTENT_LAYER element={
                <CONTAINER>
                    <WRAP onClick={() => { navigate("/votecontentCreate") }}>
                        <CONTENT>+</CONTENT>
                        <CONTENT>업로드</CONTENT>
                    </WRAP>
                </CONTAINER>
            } />
        </React.Fragment>
    );
}

export default HOME_UPLOADBUTTON;