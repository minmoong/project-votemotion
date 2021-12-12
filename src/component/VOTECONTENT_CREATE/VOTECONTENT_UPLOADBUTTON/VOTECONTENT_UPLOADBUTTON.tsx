/* module */
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

/* component */
import FLICKCONTENT_LAYER from "../../FLICKCONTENT_LAYER/FLICKCONTENT_LAYER";

/* function */
import votecontent_upload from "../../../function/votecontent_upload";

/* store */
import vote_objects_store from "../../../store/vote_objects_store";

const CONTAINER = styled.div`
    width: fit-content;
    margin-left: auto;
    margin-bottom: 25px;
`;

const WRAP = styled.div`
    cursor: pointer;
    width: 70px;
    height: 30px;
    background: #0086E5;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    line-height: 30px;
`;

function VOTECONTENT_UPLOADBUTTON() {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <CONTAINER onClick={ async () => {
                let result = await votecontent_upload();
                
                if(result === "OK") {
                    console.log("업로드에 성공하였습니다.");
                    navigate("/");
                }

                else if(result.status === "FAILED") {
                    console.log(`업로드에 실패하였습니다. 업로드 실패가 반복 될 경우 관리자에게 문의하십시오. errorCode: ${ result.errorCode }`);
                }
            } }>
                <FLICKCONTENT_LAYER
                    element={
                        <WRAP>
                            업로드
                        </WRAP>
                    }
                />
            </CONTAINER>
        </React.Fragment>
    );
}

export default VOTECONTENT_UPLOADBUTTON;