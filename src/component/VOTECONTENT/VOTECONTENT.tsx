/* module */
import React from "react";
import styled from "styled-components";

/* component */
import VOTECONTENT_PROGRESSBAR from "./VOTECONTENT_PROGRESSBAR/VOTECONTENT_PROGRESSBAR";
import FLICKCONTENT_LAYER from "../FLICKCONTENT_LAYER/FLICKCONTENT_LAYER";

interface Props {
    vote_objects: VoteObjects;
};

const TITLE = styled.h2`
    margin: 0 0 20px 0;
`;

const CONTAINER = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > * {
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

const WRAP = styled.div`
    box-sizing: border-box;
`;

const LABEL = styled.label``;

const VOTECONTAINER = styled.div`
    position: relative;
    height: 50px;
    background: #dbdbdb;
    border-radius: 15px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    cursor: pointer;
`;

const VOTECONTENT_TITLE = styled.span``;

const VOTECONTENT_TURNOUT = styled.span`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
`;

const VOTECONTENT_PROGRESSBAR_CONTAINER = styled.span`
    position: absolute;
    border-radius: inherit;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
`;

const VOTEINPUTRADIO = styled.input.attrs(() => ({
    type: "radio",
    name: "VOTECONTENT-radio"
}))`
    display: none;

    &:checked + ${ VOTECONTAINER } > ${ VOTECONTENT_PROGRESSBAR_CONTAINER } {
        border: 2px solid #0086E5;
    }
`;

function VOTECONTENT(props: Props) {
    return (
        <React.Fragment>
            <TITLE>{ props.vote_objects.title }</TITLE>
            <CONTAINER>
                {
                    props.vote_objects.contents.map((title, index) => {
                        const turnout = (props.vote_objects.contents_votes[index] / props.vote_objects.contents_totalVotes) * 100;

                        return (
                            <React.Fragment key={ index }>
                                <FLICKCONTENT_LAYER
                                    element={
                                        <WRAP>
                                            <LABEL>
                                                <VOTEINPUTRADIO />
                                                <VOTECONTAINER>
                                                    <VOTECONTENT_TITLE>{ title }</VOTECONTENT_TITLE>
                                                    <VOTECONTENT_TURNOUT>{ turnout + "%" }</VOTECONTENT_TURNOUT>
                                                    <VOTECONTENT_PROGRESSBAR_CONTAINER><VOTECONTENT_PROGRESSBAR turnout={ turnout } /></VOTECONTENT_PROGRESSBAR_CONTAINER>
                                                </VOTECONTAINER>
                                            </LABEL>
                                        </WRAP>
                                    }
                                />
                            </React.Fragment>
                        );
                    })
                }
            </CONTAINER>
        </React.Fragment>
    );
}

export default VOTECONTENT;