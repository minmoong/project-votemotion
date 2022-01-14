import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import QueryString from "qs";
import InformationInputLayer from "../../component/InformationInputLayer";
import PrevButton from "../../component/PrevButton";
import { ReactComponent as BadgeIcon } from "../../icons/BadgeIcon.svg";
import { ReactComponent as PasswordIcon } from "../../icons/PasswordIcon.svg";
import PulseItemLayer from "../../component/PulseItemLayer";
import is_login_store from "../../module/store/is_login_store";
import user_store from "../../module/store/user_store";

const Container = styled.div`
  position: relative;
  max-width: 290px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Wrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

const TitleLogo = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

const LoginForm = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  height: fit-content;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 95px;
`;

const LoginStatus = styled.div`
  width: fit-content;
  height: 35px;
  line-height: 35px;
  margin: 0 auto;
  color: red;
  font-size: 14px;
`;

const ButtonForm = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  display: flex;
`;

const Button = styled.div`
  width: 100px;
  height: 35px;
  border-radius: 35px;
  border: 1px solid #0d6efd;
  color: #0d6efd;
  line-height: 35px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;

function Login() {
  const location = useLocation();
  const messages = {
    DEFAULT: "로그인 플리즈..!",
    NPTUV: "로그인 후 투표를 올릴 수 있어요!", // No Permission To Upload Votecontent
    NPTUC: "로그인 하고 댓글 달아줘요!", // No Permission To Upload Comment
    NPTDV: "투표는 로그인 한 뒤에요!" // No Permission To Do Vote
  }
  type Message = "DEFAULT" | "NPTUV" | "NPTUC" | "NPTDV";

  let queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true }) as { message_id: Message; redirect: string; };

  let message_id = queryData.message_id;
  if(message_id == null) message_id = "DEFAULT";
  let message = messages[message_id];

  let redirect = queryData.redirect && queryData.redirect;
  if(redirect == null) redirect = "";

  const navigation = useNavigate();
  const [nicknameReg, setNicknameReg] = React.useState("");
  const [passwordReg, setPasswordReg] = React.useState("");

  const [loginStatus, setLoginStatus] = React.useState("");

  function doLogin() {
    axios.post("/api/login", {
      nickname: nicknameReg,
      password: passwordReg
    }).then(res => {
      if(res.data.message) setLoginStatus(res.data.message);
      else {
        is_login_store.dispatch({ type: "SET", is_login: true });
        user_store.dispatch({ type: "SET", user: { nickname: res.data.user.nickname, voted_at: res.data.user.voted_at === "" ? [] : JSON.parse(res.data.user.voted_at) } });
        navigation("/" + redirect);
      };
    });
  }

  return (
    <>
      <Wrap>
        <PrevButton />
      </Wrap>
      <Container>
        <LoginForm>
          <TitleLogo><h3>{ message }</h3></TitleLogo>
          <InputForm>
            <InformationInputLayer
              type="text"
              placeholder="닉네임"
              inputState={ nicknameReg }
              setInputState={ setNicknameReg }
              iconComponent={ BadgeIcon }
            />
            <InformationInputLayer
              type="password"
              placeholder="비밀번호"
              inputState={ passwordReg }
              setInputState={ setPasswordReg }
              iconComponent={ PasswordIcon }
            />
          </InputForm>
          <LoginStatus>
            { loginStatus }
          </LoginStatus>
          <ButtonForm>
            <div onClick={ () => { navigation("/register"); } } style={ { marginRight: "10px" } }>
              <PulseItemLayer
                elementItem={
                  <Button>회원가입</Button>
                }
              />
            </div>
            <div onClick={ doLogin }>
              <PulseItemLayer
                elementItem={
                  <Button>로그인</Button>
                }
              />
            </div>
          </ButtonForm>
        </LoginForm>
      </Container>
    </>
  );
}

export default Login;