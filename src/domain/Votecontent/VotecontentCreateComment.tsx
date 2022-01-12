import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import user_common_profile from "../../icons/user_common_profile.png";
import VotecontentCommentInput from "./VotecontentCommentInput";
import is_login_store from "../../module/store/is_login_store";
import ComponentWithNavigation from "../../component/ComponentWithNavigation";

const Comment = styled.div`
  display: flex;
  margin-bottom: 23px;
`;

const Profile = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("${ user_common_profile }");
  background-size: 40px;
  border-radius: 20px;
  margin-right: 12px;
`;

const VotecontentCommentInputWrap = styled.div`
  width: 100%;
  height: 40px;
`;

function VotecontentCreateComment() {
  const [isLogin, setIsLogin] = React.useState<boolean>(is_login_store.getState());
  const navigation = useNavigate();

  React.useEffect(() => {
    let isLoginUnsubscribe: any;
    
    isLoginUnsubscribe = is_login_store.subscribe(() => {
      setIsLogin(is_login_store.getState());
    });

    return () => {
      isLoginUnsubscribe();
    };

  }, []);

  return (
    <Comment>
      {
        isLogin ? 
        <>
          <div>
            <Profile />
          </div>
          <VotecontentCommentInputWrap>
            <VotecontentCommentInput />
          </VotecontentCommentInputWrap>
        </> 
        :
        <>
          <div>
            <Profile />
          </div>
          <VotecontentCommentInputWrap onClick={ () => { navigation("/login?message_id=NPTUC&redirect=" + window.location.pathname.slice(1)) } }>
            <VotecontentCommentInput />
          </VotecontentCommentInputWrap>
        </>
      }
    </Comment>

  );
}

export default ComponentWithNavigation(VotecontentCreateComment);