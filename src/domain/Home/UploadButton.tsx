import React from "react";
import styled from "styled-components";
import FlickItemLayer from "../../component/FlickItemLayer";
import withNavigation from "../../component/ComponentWithNavigation";

const Container = styled.div`
  margin: 0 0 20px 0;
`;

const Wrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 35px;
	border: 1px solid #0d6efd;
	border-radius: 35px;
	padding: 0 15px;
	cursor: pointer;
`;

const Content = styled.span`
	font-size: 18px;
	font-weight: bold;
	color: #0d6efd;
`;

type Props = {
  navigation: any;
};

function UploadButton(props: Props) {
		return (
			<FlickItemLayer elementItem={
				<Container onClick={ () => { props.navigation("/votecontentCreate"); } }>
					<Wrap>
						<Content>+</Content>
						<Content>업로드</Content>
					</Wrap>
				</Container>
			} />
		);
}

export default withNavigation(UploadButton);