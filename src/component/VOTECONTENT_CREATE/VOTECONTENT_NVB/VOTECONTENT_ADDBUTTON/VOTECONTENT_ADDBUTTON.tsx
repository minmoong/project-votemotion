/* module */
import React from "react";
import styled from "styled-components";

/* component */
import FLICKCONTENT_LAYER from "../../../FLICKCONTENT_LAYER/FLICKCONTENT_LAYER";

/* store */
import count_list_store from "../../../../store/count_list_store";

const CONTAINER = styled.div`
    cursor: pointer;
`;

const WRAP = styled.div`
    display: flex;
    height: 50px;
    background: transparent;
    border-radius: 15px;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    border: 2px solid #0086E5;
    justify-content: center;
`;

const CONTENT = styled.div`
    color: #0086E5;
    font-size: 30px;
`;

function VOTECONTENT_ADDBUTTON() {
    return (
        <React.Fragment>
            <FLICKCONTENT_LAYER
                element={
                    <CONTAINER onClick={ () => { count_list_store.dispatch({ type: "ADDBUTTON_CLICK" }); } }>
                        <WRAP>
                            <CONTENT>+</CONTENT>
                        </WRAP>
                    </CONTAINER>
                }
            />
        </React.Fragment>
    );
}

export default VOTECONTENT_ADDBUTTON;