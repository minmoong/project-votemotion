import React from "react";
import styled from "styled-components";
import VotecontentContent from "./VotecontentContent";
import VotecontentComment from "./VotecontentComment";
import VotecontentCreateComment from "./VotecontentCreateComment";
import VotecontentCommentGuide from "./VotecontentCommentGuide";
import vote_comment_store from "../../module/store/vote_comment_store";

const Title = styled.div`
	font-size: 30px;
  margin-bottom: 20px;
`;

const DivisionLine = styled.hr`
  width: 100%;
  height: 1px;
  background: #ccc;
  border: none;
  margin-top: 20px;
  margin-bottom: 35px;
`;

type Props = {
	vote_object: VoteObject;
};

type State = {
	vote_comment: string[];
};

class Votecontent extends React.Component<Props, State> {
	public unsubscribe: any;

	state = {
		vote_comment: []
	}

	componentDidMount() {
		this.unsubscribe = vote_comment_store.subscribe(async () => {
			this.setState({ vote_comment: (await vote_comment_store.getState()) });
		});

		vote_comment_store.dispatch({ type: "REFRESH", pathname: window.location.pathname });
	}

	componentWillUnmount() {
		this.unsubscribe();

		vote_comment_store.dispatch({ type: "CLEAR", pathname: window.location.pathname });
	}

	render() {
		return (
			<>
				<Title>{ this.props.vote_object.title }</Title>
				<VotecontentContent vote_object={ this.props.vote_object } />
				<DivisionLine />
				<VotecontentCommentGuide />
				<VotecontentCreateComment />
				{
					this.state.vote_comment.map((comment, key) => (
						<VotecontentComment
							key={ key }
							commentUsername="unknown"
							commentUserProfileImageSource="../../icon/user_common_profile.png"
							commentContent={ comment }
						/>
					))
				}
			</>
		);
	}
}

export default Votecontent;