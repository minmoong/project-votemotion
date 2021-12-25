import styled from "styled-components";
import NavMenuContentLinkLayer from "../../component/NavMenuContentLinkLayer";
import LoginIcon from "../../icon/LoginIcon";
import RegisterIcon from "../../icon/RegisterIcon";
import InfoIcon from "../../icon/InfoIcon";
import nav_menu_isopen_store from "../../module/store/nav_menu_isopen_store";

const TitleLogo = styled.h1`
  margin-bottom: 15px;
`;

const MainBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100vh;
  width: 240px;
  padding: 15px;
  border-radius: 0 15px 15px 0;
  background: #ffffff;
  transform: ${ (props: { isOpen: boolean }) => (props.isOpen ? "none" : "translateX(-100%)") };
  transition: transform 0.2s;
`;

const MainBarCurtain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

type Props = {
  isOpen: boolean;
}

function NavMenuContent(props: Props) {
  return (
    <>
      <MainBar isOpen={ props.isOpen }>
        <TitleLogo>Votemotion</TitleLogo>
        <ul>
          <li>
            <NavMenuContentLinkLayer
              name="로그인"
              linkTo="/login"
              iconComponent={ LoginIcon }
            />
          </li>
          <li>
            <NavMenuContentLinkLayer
              name="회원가입"
              linkTo="/register"
              iconComponent={ RegisterIcon }
            />
          </li>
          <li>
            <NavMenuContentLinkLayer
              name="앱 정보"
              linkTo="/information"
              iconComponent={ InfoIcon }
            />
          </li>
        </ul>
      </MainBar>
      {
        props.isOpen ? <MainBarCurtain onClick={ () => {
          nav_menu_isopen_store.dispatch({ type: "CHANGE", isOpen: false })
        } } /> : <></>
      }
    </>
  );
}

export default NavMenuContent;