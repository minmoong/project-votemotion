import React from "react";
import axios from "axios";
import styled from "styled-components";
import VotecontentSuggestion from "./VotecontentSuggestion";
import NavMenu from "../../container/NavMenu/NavMenu";
import Loader from "../../component/Loader";
import vote_object_store from "../../module/store/vote_object_store";

const TargetElement = styled.div`
	width: 100%;
	height: 120px;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
`;

const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;

	& > *:not(${ TargetElement }) {
		@media (max-width: 1000px) {
			width: 100%;
			margin: 0 0 15px 0;
		}

		@media (min-width: 1001px) and (max-width: 1500px) {
			width: calc(100% / 3 - 15px);
			margin: 0 15px 15px 0;
		}

		@media (min-width: 1501px) {
			width: calc(25% - 15px);
			margin: 0 15px 15px 0;
		}
	}
`;

function Home() {
  const [target, setTarget] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
	const [isEnded, setIsEnded] = React.useState(false);

	React.useEffect(() => {
		let observer: any;
		if(target) {
			observer = new IntersectionObserver(onIntersect, { threshold: 0.3 });
			observer.observe(target);
		}
		return () => observer && observer.disconnect();
	}, [target]);

	const getMoreItem = async () => {
		setIsLoaded(true);

		let res = await axios(
			{
				method: "POST",
				url: "/api/data/get_votecontent_object",
				data: {
					voc: vote_object_store.getState().length
				}
			}
		).then(res => res.data);

		if(res.status === 0) {
			setIsLoaded(false);
			return 0;
		}
		
		vote_object_store.dispatch({ type: "SET", vote_object: vote_object_store.getState().concat(res.data) });

		setIsLoaded(false);
		return 1;
	};

	const onIntersect = async ([entry]: any, observer: any) => {
		if(entry.isIntersecting && !isLoaded) {
			observer.unobserve(entry.target);
			let res = await getMoreItem();
			if (res === 1) observer.observe(entry.target);
			else if (res === 0) setIsEnded(true);
		}
	};

	return (
		<>
			<NavMenu />
			<Wrap>
				{
					vote_object_store.getState().map((v: any, i: any) => (
						<VotecontentSuggestion
							key={ i }
							vote_object={ v }
						/>
					))
				}
				{
					!isEnded &&
					<TargetElement ref={ setTarget as any }>
						{ isLoaded && <Loader /> }
					</TargetElement>
				}
			</Wrap>
		</>
	);
}

export default Home;


// function A({ vote_object }: Props) {
// 	const [l, setL] = React.useState<number>(0);

// 	React.useEffect(() => {
// 		a();
// 	}, []);

// 	const f = () => {
// 		console.log(l);
// 	}

// 	const a = () => {
// 		setInterval(() => {
// 			setL(length => length + 1);
// 			f();
// 		}, 1000);
// 	}

// 	return (<></>);
// }

// export default A;

// function A({ vote_object }: Props) {
// 	const [l, setL] = React.useState<number>(0);

// 	React.useEffect(() => {
// 		a();
// 	}, []);

// 	React.useEffect(() => {
// 		f();
// 	}, [l]);

// 	const f = () => {
// 		console.log(l);
// 	}

// 	const a = () => {
// 		setInterval(() => {
// 			setL(length => length + 1);
// 		}, 1000);
// 	}

// 	return (<></>);
// }

// export default A;