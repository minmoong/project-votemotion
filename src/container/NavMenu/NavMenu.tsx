import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import NavMenuContent from "./NavMenuContent";
import FlickItemLayer from "../../component/FlickItemLayer";
import nav_menu_isopen_store from "../../module/store/nav_menu_isopen_store";

const BurgerWrap = styled.div`
  position: relative;
  top: -15px;
  right: -15px;
  z-index: 3;
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-bottom: 0;
  cursor: pointer;
`;

type State = {
  isOpen: boolean;
};

class NavMenu extends React.Component<{}, State> {
  public unsubscribe: any;

	state = {
		isOpen: false
	}

	componentDidMount() {
    this.setState({ isOpen: nav_menu_isopen_store.getState() });
    
		this.unsubscribe = nav_menu_isopen_store.subscribe(() => {
			this.setState({ isOpen: nav_menu_isopen_store.getState() });
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

  render() {
    return (
      <>
        <BurgerWrap onClick={ () => {
            nav_menu_isopen_store.dispatch({ type: "CHANGE", isOpen: !this.state.isOpen });
          } }>
          <FlickItemLayer
            elementItem={
              <Burger isOpen={ this.state.isOpen } />
            }
          />
        </BurgerWrap>
        <NavMenuContent isOpen={ this.state.isOpen } />
      </>
    );
  }
}

export default NavMenu;