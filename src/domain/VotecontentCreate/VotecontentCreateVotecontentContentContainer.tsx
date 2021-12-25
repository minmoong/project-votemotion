import styled from "styled-components";
import VotecontentCreateVotecontentContent from "./VotecontentCreateVotecontentContent";
import VotecontentCreateVotecontentContentAddbutton from "./VotecontentCreateVotecontentContentAddbutton";

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

function VotecontentCreateVotecontentContentContainer() {
  return (
    <Container>
      <VotecontentCreateVotecontentContent />
      <VotecontentCreateVotecontentContentAddbutton />
    </Container>
  );
}

export default VotecontentCreateVotecontentContentContainer;