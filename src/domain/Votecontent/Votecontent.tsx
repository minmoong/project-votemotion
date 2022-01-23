import React from "react";
import styled from "styled-components";
import axios from "axios";
import VotecontentContent from "./VotecontentContent";
import VotecontentComment from "./VotecontentComment";
import VotecontentCreateComment from "./VotecontentCreateComment";
import Vert from '../../component/Vert';
import PrevButton from '../../component/PrevButton';
import created_at from "../../module/function/created_at";
import comment_store from "../../module/store/comment_store";
import user_store from "../../module/store/user_store";
import change_title from "../../module/function/change_title";
import { ReactComponent as DeleteIcon } from "../../icons/DeleteIcon.svg";

const Wrap = styled.div`
	position: relative;
	top: 0;
	left: 0;
`

const Container = styled.div`
	margin-top: 40px;
`

const Title = styled.div`
	position: relative;
	font-size: 30px;
	word-break: break-all;
`;

const VoteInfo = styled.div`
	margin-bottom: 15px;
	display: flex;
	color: #aaa;
`;

const Dot = styled.div`
	position: relative;
	top: -1px;
	margin: 0 4px;
`;

const DivisionLine = styled.hr`
  width: 100%;
  height: 1px;
  background: #ccc;
  border: none;
  margin-top: 20px;
  margin-bottom: 35px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 1;
  width: 70px;
  height: 30px;
	background: #0d6efd;
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
	vote_object: VoteObject;
};

type State = {
	comments: any;
};

class Votecontent extends React.Component<Props, State> {
	public unsub: any;

	state = {
		comments: []
	}

	addAd() {
		let ins = document.createElement('ins');
		let scr = document.createElement('script');

		ins.className = 'kakao_ad_area';
		ins.setAttribute('style', 'display:none; width:100%;');
		scr.async = true;
		scr.type = 'text/javascript';
		scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
		ins.setAttribute('data-ad-width', '320');
		ins.setAttribute('data-ad-height', '100');
		ins.setAttribute('data-ad-unit', 'DAN-omncjw2j18ROJoQB');

		(document.querySelector('.adfit') as HTMLDivElement).appendChild(ins);
		(document.querySelector('.adfit') as HTMLDivElement).appendChild(scr);
	}

	componentDidMount() {
		this.unsub = comment_store.subscribe(async () => {
			this.setState({ comments: await comment_store.getState() });
		});
		comment_store.dispatch({ type: "REFRESH", path: window.location.pathname });
		change_title(this.props.vote_object.title);

		this.addAd();
	}

	componentWillUnmount() {
		this.unsub();
		comment_store.dispatch({ type: "CLEAR" });
	}

	render() {
		return (
			<>
				<Wrap>
					<PrevButton />
				</Wrap>
				<Container>
					<Title>
						<div style={{ position: "absolute", bottom: "0px", right: "0px", fontSize: "16px" }}>
							{
								this.props.vote_object.uploader === user_store.getState().nickname &&
								<Vert>
									<Dropdown onClick={() => {
										axios({
											method: "POST",
											url: "/api/data/delete-votecontent",
											data: {
												path: window.location.pathname
											}
										}).then(res => window.location.href = "/");
									}}>
										<DeleteIcon style={{ height: "15px", width: "15px" }} />
										삭제
									</Dropdown>
								</Vert>
							}
						</div>
						{ this.props.vote_object.title }
					</Title>
					<VoteInfo>
						<div>{ this.props.vote_object.uploader }</div>
						<Dot>•</Dot>
						<div>{ created_at(this.props.vote_object.created_at) }</div>
					</VoteInfo>
					<VotecontentContent vote_object={ this.props.vote_object } />
					<DivisionLine />
					<div className="adfit" style={{ width: "320px", margin: "0 auto", marginBottom: "35px" }} />
					<VotecontentCreateComment />
					{
						this.state.comments.map((comment: any, key) => (
							<VotecontentComment
								key={ key }
								uploader={ comment.uploader }
								comment={ comment.comment }
								created_at={ comment.created_at }
							/>
						))
					}
				</Container>
			</>
		);
	}
}

export default Votecontent;