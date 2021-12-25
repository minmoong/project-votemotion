import styled from "styled-components";
import FlickItemLayer from "../../component/FlickItemLayer";
import count_list_store from "../../module/store/votecontentContent_count_list_store";

const Container = styled.div`
  cursor: pointer;
`;

const Wrap = styled.div`
  display: flex;
  height: 50px;
  background: transparent;
  border-radius: 15px;
  align-items: center;
  padding: 20px;
  border: 2px solid #0086e5;
  justify-content: center;
`;

const Content = styled.div`
  color: #0086e5;
  font-size: 30px;
`;

function VotecontentCreateVotecontentContentAddbutton() {
  return (
    <FlickItemLayer
      elementItem={
        <Container onClick={ () => { count_list_store.dispatch({ type: "ADDBUTTON_CLICK" }); } }>
          <Wrap>
            <Content>+</Content>
          </Wrap>
        </Container>
      }
    />
  );
}

export default VotecontentCreateVotecontentContentAddbutton;