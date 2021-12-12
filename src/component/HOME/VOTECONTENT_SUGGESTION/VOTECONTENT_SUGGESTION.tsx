/* module */
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

/* component */
import FLICKCONTENT_LAYER from "../../FLICKCONTENT_LAYER/FLICKCONTENT_LAYER";

type Props = {
    to: string;
    title: string;
};

const CONTAINER = styled.div`
    box-sizing: border-box;
    transition: filter 0.5s;
`;

const WRAP = styled.div`
    height: 120px;
    background: #dbdbdb;
    border-radius: 25px;
    cursor: pointer;
    padding: 15px;
    box-sizing: border-box;
    position: relative;
`;

const CONTENT = styled.span`
    font-size: 25px;
`;

function VOTECONTENT_SUGGESTION(props: Props) {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <FLICKCONTENT_LAYER
                element={
                    <CONTAINER onClick={ () => { navigate(props.to); } }>
                        <WRAP>
                            <CONTENT>{ props.title }</CONTENT>
                        </WRAP>
                    </CONTAINER>
                }
            />
        </React.Fragment>
    );
}

export default VOTECONTENT_SUGGESTION;