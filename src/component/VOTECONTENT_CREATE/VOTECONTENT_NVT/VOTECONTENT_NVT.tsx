/* VOTECONTENT_NVT = VOTECONTENT_NEWVOTECONTENTTITLE */

/* module */
import React from "react";
import styled from "styled-components";

const CONTAINER = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;
`;

const INPUT_UNDERLINE = styled.hr`
    position: absolute;
    z-index: 1;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #999;
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
    transform: scale(0);
    transform-origin: center;
    border: none;
`;

const INPUT_UNDERLINE_UNFOCUSED = styled.hr`
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ccc;
    border: none;
`;

const INPUT = styled.input.attrs(() => ({
    type: "text",
    name: "votecontent_nvt",
    autoComplete: "off",
    placeholder: "제목을 입력하세요"
}))`
    width: 100%;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding: 0 15px 15px 15px;
    font-size: 25px;
    background: transparent;
    color: #000;
    
    &::placeholder {
        color: #000;
    }

    &:focus + ${ INPUT_UNDERLINE } {
        opacity: 1;
        transform: scale(1);
    }
`;

function VOTECONTENT_NVT() {
    return (
        <React.Fragment>
            <CONTAINER>
                <INPUT />
                <INPUT_UNDERLINE />
                <INPUT_UNDERLINE_UNFOCUSED />
            </CONTAINER>
        </React.Fragment>
    );
}

export default VOTECONTENT_NVT;