import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 43px;
  background: ${ (props: { isHover: boolean }) => (props.isHover ? "#0d6efd" : "#ffffff") };
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
`;

const LinkIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const LinkName = styled.div`
  font-weight: bold;
  color: ${ (props: { isHover: boolean }) => (props.isHover ? "#ffffff" : "#0d6efd") };
`;

type Props = {
  name: string;
  linkTo: string;
  iconComponent: (isHover: boolean) => JSX.Element;
}

function NavMenuContentLinkLayer(props: Props) {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  return (
    <>
      <Link
        to={ props.linkTo }
        onMouseEnter={ () => { setIsHover(true); } }
        onMouseLeave={ () => { setIsHover(false); } }
      >
        <Container isHover={ isHover }>
          <LinkIcon>
            { props.iconComponent(isHover) }
          </LinkIcon>
          <LinkName isHover={ isHover }>
            { props.name }
          </LinkName>
        </Container>
      </Link>
    </>
  );
}

export default NavMenuContentLinkLayer;