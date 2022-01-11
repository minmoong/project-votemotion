import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InformationInputLayer from "../../component/InformationInputLayer";
import PulseItemLayer from "../../component/PulseItemLayer";
import BadgeIcon from "../../icon/BadgeIcon";
import PasswordIcon from "../../icon/PasswordIcon";

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

const RegisterForm = styled.div`
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

const RegisterStatus = styled.div`
  width: fit-content;
  height: 35px;
  line-height: 35px;
  margin: 0 auto;
  color: red;
  font-size: 14px;
`;

const Submit = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
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

function Register() {
  const navigation = useNavigate();
  const [nicknameReg, setNicknameReg] = React.useState("");
  const [passwordReg, setPasswordReg] = React.useState("");

  const [registerStatus, setRegisterStatus] = React.useState("");

  function doRegister() {
    if(nicknameReg === "" || passwordReg === "") setRegisterStatus("뭐라도 입력해줘요!😥");
    else {
      axios.post("/api/register", {
        nickname: nicknameReg,
        password: passwordReg
      }).then(res => {
        if(res.data.message) setRegisterStatus(res.data.message);
        else navigation("/login");
      });
    }
  }

  return (
    <Container>
      <RegisterForm>
        <TitleLogo><h3>계정을 추가해보세요!</h3></TitleLogo>
        <InputForm>
          <InformationInputLayer
            type="text"
            placeholder="닉네임(필수입력)"
            inputState={ nicknameReg }
            setInputState={ setNicknameReg }
            iconComponent={ BadgeIcon }
          />
          <InformationInputLayer
            type="password"
            placeholder="비밀번호(필수입력)"
            inputState={ passwordReg }
            setInputState={ setPasswordReg }
            iconComponent={ PasswordIcon }
          />
        </InputForm>
        <RegisterStatus>
          { registerStatus }
        </RegisterStatus>
        <Submit onClick={ doRegister }>
          <PulseItemLayer
            elementItem={
              <SubmitButton>회원가입</SubmitButton>
            }
          />
        </Submit>
      </RegisterForm>
    </Container>
  );
}

export default Register;
