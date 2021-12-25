import React from "react";
import FlickItemLayer from "../../component/FlickItemLayer";
import Filler from "./Filler";
import votecontentContent_count_list_store from "../../module/store/votecontentContent_count_list_store";

type State = {
  votecontentContent_count_list: number[];
};

class VotecontentCreateVotecontentContent extends React.Component<{}, State> {
	public unsubscribe: any;

	state = {
		votecontentContent_count_list: []
	}

	componentDidMount() {
		this.unsubscribe = votecontentContent_count_list_store.subscribe(() => {
			this.setState({ votecontentContent_count_list: votecontentContent_count_list_store.getState() });
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<>
				<FlickItemLayer
						elementItem={
							<Filler />
						}
				/>
				<FlickItemLayer
						elementItem={
							<Filler />
						}
				/>
				{
					this.state.votecontentContent_count_list.map((i: number) => (
						i + 1 < this.state.votecontentContent_count_list.length ?
							<FlickItemLayer key={ i }
								elementItem={
									<Filler />
								}
							/> : ""
					))
				}
			</>
    );
	}
}

export default VotecontentCreateVotecontentContent;