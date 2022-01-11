import React from "react";
import styled from "styled-components";
import axios from "axios";
import NavMenuContentLinkLayer from "../../component/NavMenuContentLinkLayer";
import LoginIcon from "../../icon/LoginIcon";
import RegisterIcon from "../../icon/RegisterIcon";
import InfoIcon from "../../icon/InfoIcon";
import LogoutIcon from "../../icon/LogoutIcon";
import AddVoteIcon from "../../icon/AddVoteIcon";
import nav_menu_isopen_store from "../../module/store/nav_menu_isopen_store";
import PulseItemLayer from "../../component/PulseItemLayer";
import is_login_store from "../../module/store/is_login_store";
import user_store from "../../module/store/user_store";
import ComponentWithNavigation from "../../component/ComponentWithNavigation";
import user_common_profile from "../../icon/user_common_profile.png";

const Profile = styled.div`
  margin-bottom: 10px;
  display: flex;
  box-sizing: border-box;
  padding: 5px;
`;

const ProfileImageWrap = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("${ user_common_profile }");
  background-size: 40px;
  border-radius: 20px;
  border: 2px solid #afafaf;
`;

const ProfileNicknameWrap = styled.div`
  width: calc(100% - 40px);
`;

const ProfileNickname = styled.div`
  display: flex;
  word-break: break-all;
  font-weight: bold;
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
  transform: ${ ({ isOpen }: { isOpen: boolean }) => (isOpen ? "none" : "translateX(-100%)") };
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
  navigation: any;
}

type State = {
  isLogin: boolean;
  user: User;
}

class NavMenuContent extends React.Component<Props, State> {
  public isLoginUnsubscribe: any;
  public userUnsubscribe: any;

  state = {
    isLogin: is_login_store.getState(),
    user: user_store.getState()
  }

  componentDidMount() {
    this.isLoginUnsubscribe = is_login_store.subscribe(() => {
      this.setState({ isLogin: is_login_store.getState() });
    });

    this.userUnsubscribe = user_store.subscribe(() => {
      this.setState({ user: user_store.getState() });
    });
  }

  componentWillUnmount() {
    this.isLoginUnsubscribe();
    this.userUnsubscribe();
  }

  render() {
    let navMenuContentLinkData = [
      {
        name: "로그인",
        linkTo: "/login",
        iconComponent: LoginIcon
      },
      {
        name: "회원가입",
        linkTo: "/register",
        iconComponent: RegisterIcon
      },
      {
        name: "투표 업로드",
        buttonType: "unloginedVoteupload",
        iconComponent: AddVoteIcon,
      },
      {
        name: "앱 정보",
        linkTo: "/information",
        iconComponent: InfoIcon
      }
    ];

    let loginedNavMenuContentLinkData = [
      {
        name: "투표 업로드",
        buttonType: "voteupload",
        iconComponent: AddVoteIcon,
      },
      {
        name: "로그아웃",
        buttonType: "logout",
        iconComponent: LogoutIcon
      },
      {
        name: "앱 정보",
        linkTo: "/information",
        iconComponent: InfoIcon
      }
    ];

    return (
      <>
        <MainBar isOpen={ this.props.isOpen }>
          {
            this.state.isLogin ?
            <Profile>
              <ProfileImageWrap>
                <ProfileImage />
              </ProfileImageWrap>
              <ProfileNicknameWrap>
                <ProfileNickname>
                  { this.state.user.nickname }
                </ProfileNickname>
              </ProfileNicknameWrap>
            </Profile>
            :
            <></>
          }
          <ul>
            {
              (this.state.isLogin ? loginedNavMenuContentLinkData : navMenuContentLinkData).map((data: any, key) => (
                <li
                  key={ key }
                  onClick={ () => {
                    if(data.linkTo) this.props.navigation(data.linkTo);
                    
                    else if(data.buttonType) {
                      switch (data.buttonType) {
                        case "logout":
                          axios.get("/api/logout");
                          is_login_store.dispatch({ type: "SET", is_login: false });
                          user_store.dispatch({ type: "SET", user: {} });
                          break;
                        
                        case "voteupload":
                          this.props.navigation("/createVotecontent");
                          break;
                        
                        case "unloginedVoteupload":
                          this.props.navigation("/login?message_id=NPTUV&redirect=createVotecontent");
                          break;
                      }
                    }
                  } }>
                  <PulseItemLayer
                    elementItem={
                      <NavMenuContentLinkLayer
                        name={ data.name }
                        iconComponent={ data.iconComponent }
                      />
                    }
                  />
                </li>
              ))
            }
          </ul>
        </MainBar>
        {
          this.props.isOpen ? <MainBarCurtain onClick={ () => {
            nav_menu_isopen_store.dispatch({ type: "CHANGE", isOpen: false })
          } } /> : <></>
        }
      </>
    );
  }
}

export default ComponentWithNavigation(NavMenuContent);