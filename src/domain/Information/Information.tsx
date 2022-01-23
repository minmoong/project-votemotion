import React from 'react';
import styled from "styled-components";
import PrevButton from "../../component/PrevButton";
import FlickItemLayer from "../../component/FlickItemLayer";
import change_title from '../../module/function/change_title';
import MinmoongProfile from "../../icons/MinmoongProfile.png";
import WinterProfile from "../../icons/WinterProfile.png";
import { ReactComponent as CodeIcon } from "../../icons/CodeIcon.svg";
import { ReactComponent as FacebookIcon } from "../../icons/FacebookIcon.svg";
import { ReactComponent as YoutubeIcon } from "../../icons/YoutubeIcon.svg";
import { ReactComponent as GithubIcon } from "../../icons/GithubIcon.svg";
import { ReactComponent as NoteIcon } from "../../icons/NoteIcon.svg";
import { ReactComponent as InfoIcon } from "../../icons/InfoIcon.svg";

const Container = styled.div`
  & * {
    user-select: text;
  }

  & *::selection {
    background: #afc9f3;
  }
`

const Wrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 20px;
  margin-left: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const TitleName = styled.div`
  font-size: 25px;
  color: #0d6efd;
  display: flex;
  align-items: center;
  font-weight: bold;
`

const Profile = styled.div`
  width: 170px;
  margin: 0 auto 100px auto;
`

// const ProfileBg = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: calc(100vw - 50px);
//   height: 100px;
//   background: #abcded;
// `

const ProfileWrap = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  margin-bottom: 15px;
`

const Line = styled.hr`
  width: 100%;
  height: 1px;
  background: #cccccc;
  border: none;
  margin-bottom: 20px;
`
const Name = styled.div`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-bottom: 5px;
`

const Desc = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
`

const NoteTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 20px;
  margin-left: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const NoteName = styled.div`
  font-size: 25px;
  color: #0d6efd;
  text-align: center;
  font-weight: bold;
  margin-right: 10px;
`

const NoteDesc = styled.div`
  @media (min-width: 768px) {
    text-align: center;
  }
`

const ContentTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`

const ConDesc = styled.div`
  text-align: center;
`

const ConTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 20px;
  margin-left: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ConName = styled.div`
  font-size: 25px;
  color: #0d6efd;
  text-align: center;
  font-weight: bold;
  margin-right: 10px;
`;

function Information() {
  React.useEffect(() => {
    change_title("앱 정보");
  }, []);

  return (
    <>
      <Wrap>
        <PrevButton />
      </Wrap>
      <Container>
        <div>
          <Title>
            <CodeIcon style={{ width: "50px", height: "50px", marginRight: "10px" }} />
            <TitleName>
              개발자를 소개합니다!
            </TitleName>
          </Title>
          <Line />
          <Profile>
            <ProfileWrap>
              {/* <ProfileBg /> */}
              <FlickItemLayer
                elementItem={
                    <img src={ MinmoongProfile } alt="개발자 민뭉 프로필" style={{
                      width: "170px",
                      height: "170px",
                      border: "2px solid #0d6efd",
                      borderRadius: "50%"
                    }} />
                }
              />
            </ProfileWrap>
            <Name>민 뭉</Name>
            <Desc>
            ❥H워얼V
            </Desc>
            <Contacts>
              <FlickItemLayer
                elementItem={
                  <a href="https://www.facebook.com/profile.php?id=100056053027942" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                }
              />
              <FlickItemLayer
                elementItem={
                  <a href="https://www.youtube.com/channel/UCNkdgxDSgQMgUWashOG6GQg" target="_blank" rel="noreferrer"><YoutubeIcon /></a>
                }
              />
              <FlickItemLayer
                elementItem={
                  <a href="https://github.com/minmoong" target="_blank" rel="noreferrer"><GithubIcon /></a>
                }
              />
            </Contacts>
          </Profile>
          <Profile>
            <ProfileWrap>
              {/* <ProfileBg /> */}
              <FlickItemLayer
                elementItem={
                    <img src={ WinterProfile } alt="개발자 윈터 프로필" style={{
                      width: "170px",
                      height: "170px",
                      border: "2px solid #0d6efd",
                      borderRadius: "50%"
                    }} />
                }
              />
            </ProfileWrap>
            <Name>윈 터</Name>
            <Desc>
              Hey world, Good Night.
            </Desc>
          </Profile>
        </div>
        <div>
          <ConTitle>
            <InfoIcon style={{ width: "50px", height: "50px", marginRight: "10px" }} />
            <ConName>콘택트</ConName>
          </ConTitle>
          <Line />
          <ConDesc>
            언제든 연락줘요!
            <br />
            민뭉: 010-8553-2379
          </ConDesc>
        </div>
        {/* <div>
          <NoteTitle>
            <NoteIcon style={{ width: "50px", height: "50px", marginRight: "10px" }} />
            <NoteName>개발 노트 & 일기</NoteName>
          </NoteTitle>
          <Line />
          <NoteDesc>
            <ContentTitle>개발자의 꿈을 가진 두 16살 학생이 시작한 작은 프로젝트</ContentTitle>
            <br />
            처음엔 여행 계획을 자동으로 짜주는 프로그램(project-hetrip, 2021/11/03 ~ 2021/11/13)을 개발하려 했지만 미흡한 계획과 실패적인 성과의 연속으로 개발 아이템을 피버팅하여 투표 관련 시스템을 만들기로 했다.(지금 생각해보면 이 프로그램은 도움이 안 될 것 같다.)
            <br />
            그렇게 votemotion 프로젝트는 시작되었고 나(민뭉)는 벡엔드와 프론트엔드를 담당하고 윈터는 디스코드로 내가 체계적인 프로젝트 폴더 관리나 계획을 할 수 있는 공간을 마련해줬다. 환경이 정말 중요한 것 같다. 고맙다!
            <br />
            팀으로 개발 프로젝트를 하는건 처음이였다! 팀으로 개발 프로젝트를 하면서 느낀것들 중 하나는 정말 팀이 정신적으로 도움이 많이 된다는 것이다. 내가 게을러지지 않도록 붙잡고있는 느낌.
            <br />
            그렇게 집에 있는 거의 10년이 다 되어가는 컴퓨터로 시험기간이여도, 우울한 날이여도, 미친듯이 졸린 날이여도
            프로젝트를 꾸준히 해서 결국 3587줄 정도 되는 코드를 1달만에 작성했다.
            <br />
            코딩을 하면서 여러가지 문제점이 있었겠지만 단연 가장 큰 문제는 내 컴퓨터였다!
            <br />
            사양이 CPU: Intel Pentium G3240, RAM: 4GB(크롬브라우저가 10초만에 켜진다.) 인 내 컴퓨터는 꼭 하루에 한 번 씩은 혼자 모니터가 나가버린다던가 몇십 초 동안 응답없음 상태로 벙쪄있는다.
            <br />
            비록 컴퓨터는 이랬지만 프로젝트를 할 때 컴퓨터의 한계를 노력으로 극복하려고 노력 한 것 같다.
            <br />
            <ContentTitle>나라에서 허용한 유일한 마약</ContentTitle>
            <br />
            내 유튜브 채널 재생목록에 들어가면 플레이리스트가 있다. 그 곡들은 내가 10번 이상 들은 좋은 곡들만 엄선하여 내 취향에 맞춰 넣어놓은 것들이다!
            <br />
            그중 가장 많이 들은 노래는 &lt;에어맨이 쓰러지지 않아&gt; 이다..!
          </NoteDesc>
        </div> */}
      </Container>
    </>
  );
}

export default Information;

// <div>
//   여러분의 멋진 투표 아이디어들은 세상을 빛나게 할 거에요!
//   <br />
//   <br />
//   민뭉 - 소개
//   <br />
//   "10년 된 집 컴퓨터로도 멋진 코딩 프로젝트를 할 수 있어요"
//   <br />
//   "제가 4차원 이라구요??!"
//   <br />
//   "처세는 힘들어"
//   <br />
//   "미움받을 용기"
//   <br />
//   "수백만 가지의 변화를 겪고"
//   <br />
//   "배는 항구에 있을 때 가장 안전하다. 하지만 그것이 배의 존재 이유는 아니다."
//   <br />
//   "좋아하는 일에 미쳐보세요. 세상의 모든것에 궁금해해 보세요."
//   <br />
//   개발 일기장
//   <CodeIcon style={{ width: "100px", height: "100px" }} />
// </div>