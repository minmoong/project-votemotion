import React from "react";
import styled from "styled-components";
import axios from "axios";
import FlickItemLayer from "../../component/FlickItemLayer";
import VotecontentContentFiller from "./VotecontentContentFiller";
import ComponentWithNavigation from "../../component/ComponentWithNavigation";
import turnout_list_store from "../../module/store/turnout_list_store";
import is_login_store from "../../module/store/is_login_store";
import vote_object_store from "../../module/store/vote_object_store";
import user_store from "../../module/store/user_store";
import get_user from "../../module/function/get_user";

const Container = styled.div`
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

type Props = {
	vote_object: VoteObject;
	navigation: (navigate: string) => void;
};

type State = {
	isLogin: boolean;
	isCheckedList: boolean[];
	turnoutList: number[];
	user: User;
};

class VotecontentContent extends React.Component<Props, State> {
	public turnOutListUnsubscribe: any;
	public isLoginUnsubscribe: any;
	public userUnsubscribe: any;

	state = {
		isLogin: is_login_store.getState(),
		isCheckedList: Array(this.props.vote_object.votecontent.length).fill(false),
		turnoutList: Array(this.props.vote_object.votecontent.length).fill(0),
		user: user_store.getState()
	}

	componentDidMount() {
		this.turnOutListUnsubscribe = turnout_list_store.subscribe(async () => {
			this.setState({ turnoutList: await turnout_list_store.getState() });
		});

		turnout_list_store.dispatch({ type: "REFRESH", path: window.location.pathname });

		this.isLoginUnsubscribe = is_login_store.subscribe(() => {
			this.setState({ isLogin: is_login_store.getState() });
		});

		this.userUnsubscribe = user_store.subscribe(() => {
			this.setState({ user: user_store.getState() });
		});

		(async () => {
			let res = await get_user();

			user_store.dispatch(
				{
					type: "SET",
					user: {
						nickname: res.nickname,
						voted_at: res.voted_at === "" ? [] : JSON.parse(res.voted_at)
					}
				}
			);
		
			let votedData = this.state.user.voted_at?.filter(data => data.path === window.location.pathname);
			if(votedData?.length === 1) {
				let asdf = this.state.isCheckedList;
				asdf[votedData[0].votedIdx] = true;
				this.setState({ isCheckedList: asdf });
			}
		})();
	}

	componentWillUnmount() {
		this.turnOutListUnsubscribe();
		this.isLoginUnsubscribe();
		this.userUnsubscribe();
	}

	afterVoting() {
		turnout_list_store.dispatch({ type: "REFRESH", path: window.location.pathname });
		vote_object_store.dispatch({ type: "REFRESH" });
		(async () => {
			let res = await get_user();

			user_store.dispatch(
				{
					type: "SET",
					user: {
						nickname: res.nickname,
						voted_at: res.voted_at === "" ? [] : JSON.parse(res.voted_at)
					}
				}
			);
		})();
	}

	render() {
		return (
			<Container>
				{
					this.props.vote_object.votecontent.map((title, idx) => (
						<FlickItemLayer
							key={ idx }
							onClick={ () => {
								if(this.state.isLogin === true) {
									(() => {
										let list: boolean[] = this.state.isCheckedList;
										let type: string;
										let pathname = window.location.pathname;
										
										if(list[idx] === true) type = "DECREMENT";
										else if(!list.includes(true)) type = "INCREMENT";
										else type = "CHANGEMENT";
		
										switch(type) {
											case "INCREMENT":
												list.fill(false);
												list[idx] = true;
		
												axios.post("/api/voting", {
													type: "INCREMENT",
													pathname: pathname,
													nickname: user_store.getState().nickname,
													voteAtIdx: idx
												}).then(res => this.afterVoting());
												break;
												
											case "CHANGEMENT":
												let changementDecreaseAtIdx;
												list.forEach((val, idx) => { if(list[idx] === true) changementDecreaseAtIdx = idx; });
												list.fill(false);
												list[idx] = true;
		
												axios.post("/api/voting", {
													type: "CHANGEMENT",
													pathname: pathname,
													nickname: user_store.getState().nickname,
													voteAtIdx: idx,
													decreaseAtIdx: changementDecreaseAtIdx
												}).then(res => this.afterVoting());
												break;
		
											case "DECREMENT":
												let decrementDecreaseAtIdx;
												list.forEach((val, idx) => { if(list[idx] === true) decrementDecreaseAtIdx = idx; });
												list.fill(false);
		
												axios.post("/api/voting", {
													type: "DECREMENT",
													pathname: pathname,
													nickname: user_store.getState().nickname,
													decreaseAtIdx: decrementDecreaseAtIdx
												}).then(res => this.afterVoting());
												break;
										}
									})();
								} else if(this.state.isLogin === false) this.props.navigation("/login?message_id=NPTDV&redirect=" + window.location.pathname.slice(1));
							} }
							elementItem={
								<VotecontentContentFiller
									title={ title }
									turnout={ this.state.turnoutList[idx] }
									isChecked={ this.state.isCheckedList[idx] }
								/>
							}
						/>
					))
				}
			</Container>
		);
	}
}

export default ComponentWithNavigation(VotecontentContent);