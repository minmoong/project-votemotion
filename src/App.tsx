import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Votecontent from "./domain/Votecontent/Votecontent";
import Home from "./domain/Home/Home";
import VotecontentCreate from "./domain/VotecontentCreate/VotecontentCreate";
import Login from "./domain/Login/Login";
import Register from "./domain/Register/Register";
import Information from "./domain/Information/Information";
import OutsideRoute from "./domain/OutsideRoute/OutsideRoute";
import DomainNotFound from "./domain/DomainNotFound/DomainNotFound";
import vote_object_store from "./module/store/vote_object_store";
import is_login_store from "./module/store/is_login_store";
import user_store from "./module/store/user_store";

type State = {
  vote_object: VoteObject[];
  is_login: boolean;
  user: User;
};

class App extends React.Component<{}, State> {
  public voteObjectUnsubscribe: any;
  public isLoginUnsubscribe: any;
  public userUnsubscribe: any;

	state = {
		vote_object: [],
    is_login: is_login_store.getState(),
    user: user_store.getState()
	}

	componentDidMount() {
		this.voteObjectUnsubscribe = vote_object_store.subscribe(async () => {
			this.setState({ vote_object: vote_object_store.getState() });
		});

    this.isLoginUnsubscribe = is_login_store.subscribe(() => {
      this.setState({ is_login: is_login_store.getState() });
    });

    this.userUnsubscribe = user_store.subscribe(() => {
      this.setState({ user: user_store.getState() });
    });

    axios.get("/api/logged-in").then(res => {
      if(res.data.loggedIn === true) {
        is_login_store.dispatch({ type: "SET", is_login: true });

        let parsedUser = JSON.parse(JSON.stringify(res.data.user));

        user_store.dispatch(
          {
            type: "SET",
            user: {
              nickname: parsedUser.nickname,
              voted_at: parsedUser.voted_at === "" ? [] : JSON.parse(parsedUser.voted_at)
            }
          }
        );
      }
    });
	}

	componentWillUnmount() {
		this.voteObjectUnsubscribe();
    this.isLoginUnsubscribe();
    this.userUnsubscribe();
	}

  render() {
    return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        {
          this.state.vote_object.map((value: VoteObject, index) => <Route key={ index } path={ value.path } element={ <Votecontent vote_object={ value } /> } />)
        }
        {
          this.state.is_login ?
          <>
            <Route path="/createVotecontent" element={ <VotecontentCreate /> } />
            <Route path="/login" element={ <DomainNotFound /> } />
            <Route path="/register" element={ <DomainNotFound /> } />
          </>
          :
          <>
            <Route path="/createVotecontent" element={ <DomainNotFound /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
          </>
        }
        <Route path="/information" element={ <Information /> } />
        <Route path="/:path" element={ <OutsideRoute /> } />
      </Routes>
    );
  }
}

export default App;