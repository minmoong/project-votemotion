/* module */
import React from "react";
import styled from "styled-components";

/* component */
import HOME_UPLOADBUTTON from "./HOME_UPLOADBUTTON/HOME_UPLOADBUTTON";
import VOTECONTENT_SUGGESTION from "./VOTECONTENT_SUGGESTION/VOTECONTENT_SUGGESTION";

/* store */
import vote_objects_store from "../../store/vote_objects_store";

const CONTAINER = styled.div``;

const WRAP = styled.div`
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

function HOME() {
    let [vote_objects, vote_objects_change] = React.useState([]);

    React.useEffect(() => {
        let unsubscribe = vote_objects_store.subscribe(async () => {
            vote_objects_change((await vote_objects_store.getState()).data);
        });
        
        vote_objects_store.dispatch({ type: "REFRESH" });
        
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <React.Fragment>
            <CONTAINER>
                <HOME_UPLOADBUTTON />
                <WRAP>
                    {
                        vote_objects.map((value: any, index: any) => (
                            <VOTECONTENT_SUGGESTION
                                key={ index }
                                to={ value.path }
                                title={ value.title } 
                            />
                        ))
                    }
                </WRAP>
            </CONTAINER>
        </React.Fragment>
    );
}

export default HOME;