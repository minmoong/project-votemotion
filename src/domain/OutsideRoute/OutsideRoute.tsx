import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loader from "../../component/Loader";
import Votecontent from "../Votecontent/Votecontent";
import NotFound from "../NotFound/NotFound";
import gorv from "../../module/function/gorv";

const LoaderWrap = styled.div`
	width: 100%;
	height: 120px;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
`;

function OutsideRoute() {
  const RouteLinks = [
    "createVotecontent",
    "login",
    "register",
    "developer",
    "information"
  ];
  const [vote_object, setVote_object] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { path } = useParams();

  React.useEffect(() => {
    if(!RouteLinks.includes(path as string)) gorver();
  }, []);

  if(RouteLinks.includes(path as string)) return <></>;

  const gorver = async () => {
    setIsLoading(true);
    let res = await gorv(path as string);
    if(res.status === 1) setVote_object(res.data);
    setIsLoading(false);
  }

  if (isLoading) return <LoaderWrap><Loader /></LoaderWrap>;
  else if (vote_object === null) return <NotFound />;

  return <Votecontent vote_object={ vote_object } />
}

export default OutsideRoute;