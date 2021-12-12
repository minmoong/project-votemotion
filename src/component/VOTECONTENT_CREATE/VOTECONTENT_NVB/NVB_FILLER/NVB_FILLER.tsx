/* module */
import React from "react";
import styled from "styled-components";

/* component */
import FLICKCONTENT_LAYER from "../../../FLICKCONTENT_LAYER/FLICKCONTENT_LAYER";

/* store */
import count_list_store from "../../../../store/count_list_store";

const CONTAINER = styled.div`
    position: relative;
`;

const WRAP = styled.div`
    display: flex;
    height: 50px;
    background: #dbdbdb;
    border-radius: 15px;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
`;

const NVB_INPUT = styled.input.attrs(() => ({
    type: "text",
    name: "votecontent_nvb",
    autoComplete: "off",
    placeholder: "항목을 입력하세요"
}))`
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: none;
    background: transparent;
    font-size: 17px;
`;

function NVB_FILLER() {
    let [count_list, count_list_change] = React.useState<number[]>([0]);

    count_list_store.subscribe(() => {
        count_list_change(count_list_store.getState());
    });

    return (
        <React.Fragment>
            <FLICKCONTENT_LAYER
                element={
                    <CONTAINER>
                        <WRAP>
                            <NVB_INPUT />
                        </WRAP>
                    </CONTAINER>
                }
            />
            <FLICKCONTENT_LAYER
                element={
                    <CONTAINER>
                        <WRAP>
                            <NVB_INPUT />
                        </WRAP>
                    </CONTAINER>
                }
            />
            {
                count_list.map((i: any) => {
                    if(i + 1 < count_list.length) {
                        return (
                            <React.Fragment key={ i }>
                                <FLICKCONTENT_LAYER
                                    element={
                                        <CONTAINER>
                                            <WRAP>
                                                <NVB_INPUT />
                                            </WRAP>
                                        </CONTAINER>
                                    }
                                />
                            </React.Fragment>
                        );
                    }

                    else {
                        return;
                    }
                })
            }
        </React.Fragment>
    );
}

export default NVB_FILLER;