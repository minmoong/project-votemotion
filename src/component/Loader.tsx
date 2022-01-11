import { memo } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoaderWrap = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LoaderWrap>
      <ReactLoading type="spin" color="#0d6efd" />
    </LoaderWrap>
  );
};

export default memo(Loader);