import React from "react";
import styled from "styled-components";
import VotecontentContent from "./VotecontentContent";
import VotecontentComment from "./VotecontentComment";
import VotecontentCreateComment from "./VotecontentCreateComment";
import VotecontentCommentGuide from "./VotecontentCommentGuide";
import created_at from "../../module/function/created_at";

const Title = styled.div`
	font-size: 30px;
`;

const VoteInfo = styled.div`
	margin-bottom: 15px;
	display: flex;
	color: #aaa;
`;

const Dot = styled.div`
	position: relative;
	top: -1px;
	margin: 0 4px;
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

class Votecontent extends React.Component<Props, {}> {
	render() {
		return (
			<>
				<Title>{ this.props.vote_object.title }</Title>
				<VoteInfo>
					<div>{ this.props.vote_object.uploader }</div>
					<Dot>•</Dot>
					<div>{ created_at(+this.props.vote_object.created_at) }</div>
				</VoteInfo>
				<VotecontentContent vote_object={ this.props.vote_object } />
				<DivisionLine />
				<VotecontentCommentGuide />
				<VotecontentCreateComment />
				{
					this.props.vote_object.comment.map((comment: any, key) => (
						<VotecontentComment
							key={ key }
							uploader={ JSON.parse(comment).uploader }
							comment={ JSON.parse(comment).comment }
							created_at={ JSON.parse(comment).created_at }
						/>
					))
				}
			</>
		);
	}
}

export default Votecontent;