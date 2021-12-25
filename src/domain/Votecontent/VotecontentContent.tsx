import styled from "styled-components";
import FlickItemLayer from "../../component/FlickItemLayer";
import VotecontentContentFiller from "./VotecontentContentFiller";

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
};

function VotecontentContent(props: Props) {
	return (
		<Container>
			{
				props.vote_object.content.map((contentTitle, index) => {
					const turnout = (props.vote_object.content_votes[index] / props.vote_object.content_totalVotes) * 100;

					return (
						<FlickItemLayer
							key={ index }
							elementItem={
								<VotecontentContentFiller
									contentTitle={ contentTitle }
									turnout={ turnout }
								/>
							}
						/>
					);
				})
			}
		</Container>
	);
}

export default VotecontentContent;