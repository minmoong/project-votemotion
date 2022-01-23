import React from "react";
import styled from "styled-components";
import VotecontentCreateVotecontentContentTitle from "./VotecontentCreateVotecontentContentTitle";
import VotecontentCreateVotecontentContentContainer from "./VotecontentCreateVotecontentContentContainer";
import PrevButton from "../../component/PrevButton";
import UploadStatus from "./UploadStatus";
import VotecontentCreateUploadbutton from "./VotecontentCreateUploadbutton";
import count_list_store from "../../module/store/votecontentContent_count_list_store";
import change_title from "../../module/function/change_title";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

function VotecontentCreate() {
  React.useEffect(() => {
    count_list_store.dispatch({ type: "COUNT_LIST_CLEAR" });
    change_title("투표 업로드");
  }, []);

  return (
    <Container>
      <PrevButton />
      <VotecontentCreateUploadbutton />
      <UploadStatus />
      <VotecontentCreateVotecontentContentTitle />
      <VotecontentCreateVotecontentContentContainer />
    </Container>
  );
}

export default VotecontentCreate;