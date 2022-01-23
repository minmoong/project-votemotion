import styled from "styled-components";
import ComponentWithNavigation from "../../component/ComponentWithNavigation";
import created_at from "../../module/function/created_at";
import CheckboxIcon from "../../icons/CheckboxIcon.svg";

const Container = styled.div`
	transition: filter 0.5s;
`;

const Wrap = styled.div`
	height: 120px;
	background: rgba(0, 0, 0, 0.05);
	border-radius: 25px;
	cursor: pointer;
	padding: 15px;
`;

const Title = styled.span`
	font-size: 25px;
`;

const VoteInfo = styled.div`
	color: #aaa;
`;

const Dot = styled.div`
	position: relative;
	top: -1px;
	margin: 0 4px;
`;

type Props = {
	navigation: any;
	vote_object: VoteObject;
}

function VotecontentSuggestion(props: Props) {
	let title = props.vote_object.title.length > 13 ? props.vote_object.title.substring(0, 13) + "..." : props.vote_object.title;

	return (
		<Container onClick={ () => { props.navigation(props.vote_object.path); } }>
			<Wrap>
				<Title>{ title }</Title>
				<VoteInfo>
					<div style={ { display: "flex" } }>
						<div>{ props.vote_object.uploader }</div>
						<Dot>•</Dot>
						<div>{ created_at(props.vote_object.created_at) }</div>
					</div>
					<div style={ { marginTop: "5px" } }>
						<span>
							<span><img src={ CheckboxIcon } alt="투표된 개수" /></span>
							<span style={ { position: "relative", top: "-6px", marginLeft: "3px", color: "#0d6efd" } }>
								{ props.vote_object.votecontent_total_votes }
							</span>
						</span>
					</div>
				</VoteInfo>
			</Wrap>
		</Container>
	);
}

export default ComponentWithNavigation(VotecontentSuggestion);