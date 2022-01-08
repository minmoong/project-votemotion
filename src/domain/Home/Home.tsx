import styled from "styled-components";
import VotecontentSuggestion from "./VotecontentSuggestion";
import NavMenu from "../../container/NavMenu/NavMenu";

const Wrap = styled.div`
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
	vote_object: VoteObject[];
}

function Home({ vote_object }: Props) {
	return (
		<>
			<NavMenu />
			<Wrap>
				{
					vote_object.map((value: any, index: any) => (
						<VotecontentSuggestion
							key={ index }
							vote_object={ value }
						/>
					))
				}
			</Wrap>
		</>
	);
}

export default Home;