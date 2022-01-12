import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 43px;
  padding: 10px;
`;

const LinkIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const LinkName = styled.div`
  font-weight: bold;
  color: #0d6efd;
`;

type Props = {
  name: string;
  iconComponent: any;
}

function NavMenuContentLinkLayer(props: Props) {
  return (
    <>
      <Container>
        <LinkIcon>
          <props.iconComponent />
        </LinkIcon>
        <LinkName>
          { props.name }
        </LinkName>
      </Container>
    </>
  );
}

export default NavMenuContentLinkLayer;