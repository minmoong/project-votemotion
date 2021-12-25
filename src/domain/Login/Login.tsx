import React from "react";
import styled from "styled-components";
import InformationInputLayer from "./InformationInputLayer";
import BadgeIcon from "../../icon/Login/BadgeIcon";
import PasswordIcon from "../../icon/Login/PasswordIcon";

const Container = styled.div`
  position: relative;
  max-width: 290px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
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
  margin-bottom: 30px;
`;

const Submit = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const SubmitButton = styled.div`
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

class Login extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <LoginForm>
          <TitleLogo><h1>Votemotion</h1></TitleLogo>
          <InputForm>
            <InformationInputLayer
              type="text"
              placeholder="아이디"
              name="LoginInformationsUserID"
              iconComponent={ BadgeIcon }
            />
            <InformationInputLayer
              type="password"
              placeholder="비밀번호"
              name="LoginInformationsPassword"
              iconComponent={ PasswordIcon }
            />
          </InputForm>
          <Submit>
            <SubmitButton onClick={ () => { console.log("돈 땃쥐 더 로긴 버른!!"); } }>로그인</SubmitButton>
          </Submit>
        </LoginForm>
      </Container>
    );
  }
}

export default Login;