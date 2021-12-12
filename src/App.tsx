/* module */
import React from "react";
import { Route, Routes } from "react-router-dom";

/* component */
import VOTECONTENT from "./component/VOTECONTENT/VOTECONTENT";
import HOME from "./component/HOME/HOME";
import VOTECONTENT_CREATE from "./component/VOTECONTENT_CREATE/VOTECONTENT_CREATE";

/* function */
import get_vote_objects from "./function/get_vote_objects";

/* variable */

/* store */
import vote_objects_store from "./store/vote_objects_store";

/* css */
import "./App.css";

/* test */


function App() {
  let [vote_objects, vote_objects_change] = React.useState([]);

  React.useEffect(() => {
    let unsubscribe = vote_objects_store.subscribe(async () => {
      vote_objects_change((await vote_objects_store.getState()).data);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={ <HOME /> } />
        {
          vote_objects.map((value: any, index: any) => (
            <Route key={ index } path={ value.path } element={ <VOTECONTENT vote_objects={ value } /> } />
          ))
        }
        <Route path="/votecontentCreate" element={ <VOTECONTENT_CREATE /> }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
