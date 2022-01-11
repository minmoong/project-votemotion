import React from "react";
import styled from "styled-components";
import upload_status_store from "../../module/store/upload_status_store";

const Container = styled.div`
  text-align: center;
  margin-bottom: 10px;
  color: red;
`;

function UploadStatus() {
  const [status, setStatus] = React.useState<string>("");

  React.useEffect(() => {
    let unsub = upload_status_store.subscribe(() => {
      setStatus(upload_status_store.getState());
    });

    return () => {
      unsub();
    };
  });

  return (
    <>
      {
        status !== "" ?
        <Container>{ status }</Container>
        :
        <></>
      }
    </>
  );
}

export default UploadStatus;