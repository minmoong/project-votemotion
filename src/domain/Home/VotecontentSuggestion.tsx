import React from "react";
import styled from "styled-components";
import FlickItemLayer from "../../component/FlickItemLayer";
import withNavigation from "../../component/ComponentWithNavigation";

const Container = styled.div`
	transition: filter 0.5s;
`;

const Wrap = styled.div`
	height: 120px;
	background: #dbdbdb;
	border-radius: 25px;
	cursor: pointer;
	padding: 15px;
`;

const Title = styled.span`
	font-size: 25px;
`;

type Props = {
	navigation: any;
	to: string;
	title: string;
}

class VotecontentSuggestion extends React.Component<Props, {}> {
	render() {
		return (
			<FlickItemLayer
				elementItem={
					<Container onClick={ () => { this.props.navigation(this.props.to); } }>
						<Wrap>
							<Title>{ this.props.title }</Title>
						</Wrap>
					</Container>
				}
			/>
		);
	}
}

export default withNavigation(VotecontentSuggestion);