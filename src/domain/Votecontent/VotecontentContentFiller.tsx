import styled from "styled-components";

const ProgressbarContainer = styled.span`
	position: absolute;
	border-radius: inherit;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const VotecontentContentContainer = styled.div`
	position: relative;
	height: 50px;
	background: #dbdbdb;
	border-radius: 15px;
	display: flex;
	align-items: center;
	padding: 20px;
	cursor: pointer;
`;

const Turnout = styled.span`
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
`;

const Radio = styled.input.attrs(() => ({
	type: "radio",
	name: "VotecontentRadio"
}))`
	display: none;

	&:checked + ${ VotecontentContentContainer } > ${ ProgressbarContainer } {
		border: 2px solid #0d6efd;
	}
`;

const ProgressbarLayer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: ${ ({ turnout }: { turnout: number }) => (turnout) }%;
	background: rgba(30, 144, 255, 0.35);
	border-radius: 15px;
`;

type Props = {
  contentTitle: string;
  turnout: number;
}

function Filler(props: Props) {
  return (
		<label>
			<Radio />
			<VotecontentContentContainer>
				<span>{ props.contentTitle }</span>
				<Turnout>{ props.turnout + "%" }</Turnout>
				<ProgressbarContainer>
					<ProgressbarLayer turnout={ props.turnout } />
				</ProgressbarContainer>
			</VotecontentContentContainer>
		</label>
  );
}

export default Filler;