/* module */
import React from "react";
import styled from "styled-components";

/* component */
import VOTECONTENT_NVT from "./VOTECONTENT_NVT/VOTECONTENT_NVT";
import VOTECONTENT_NVB from "./VOTECONTENT_NVB/VOTECONTENT_NVB";
import VOTECONTENT_UPLOADBUTTON from "./VOTECONTENT_UPLOADBUTTON/VOTECONTENT_UPLOADBUTTON";

/* function */

/* store */
import count_list_store from "../../store/count_list_store";

const CONTAINER = styled.div`
    width: 100%;
    height: 100%;
`;

function VOTECONTENT_CREATE() {
    React.useEffect(() => {
        count_list_store.dispatch({ type: "COUNT_LIST_CLEAR" });
    }, []);

    return (
        <React.Fragment>
            <CONTAINER>
                <VOTECONTENT_UPLOADBUTTON />
                <VOTECONTENT_NVT />
                <VOTECONTENT_NVB />
            </CONTAINER>
        </React.Fragment>
    );
}

export default VOTECONTENT_CREATE;