import React from "react";
import { Route, Routes } from "react-router-dom";
import Votecontent from "./domain/Votecontent/Votecontent";
import Home from "./domain/Home/Home";
import VotecontentCreate from "./domain/VotecontentCreate/VotecontentCreate";
import Login from "./domain/Login/Login";
import Register from "./domain/Register/Register";
import Developer from "./domain/Developer/Developer";
import Information from "./domain/Information/Information";
import vote_object_store from "./module/store/vote_object_store";


import RippleItemLayer from "./component/RippleItemLayer";

type State = {
  vote_object: VoteObject[];
};

class App extends React.Component<{}, State> {
  public unsubscribe: any;

	state = {
		vote_object: []
	}

	componentDidMount() {
		this.unsubscribe = vote_object_store.subscribe(async () => {
			this.setState({ vote_object: (await vote_object_store.getState()) });
		});

		vote_object_store.dispatch({ type: "REFRESH" });
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

  render() {
    return (
      <Routes>
        <Route path="/" element={ <Home vote_object={ this.state.vote_object } /> } />
        {
          this.state.vote_object.map((value: VoteObject, index) => {
            return <Route key={ index } path={ value.path } element={ <Votecontent vote_object={ value } /> } />
          })
        }
        <Route path="/votecontentCreate" element={ <VotecontentCreate /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/developer" element={ <Developer /> } />
        <Route path="/information" element={ <Information /> } />
        <Route path="/test" element={ <RippleItemLayer /> } />
      </Routes>
    );
  }
}

export default App;