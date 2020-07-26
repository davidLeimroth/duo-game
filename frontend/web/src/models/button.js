import React, { Children, isValidElement, cloneElement } from "react";
import styled from "styled-components";
import { primaryBackgroundColour, textColour, boxShadow, primaryColour, boxShadowBig, secondaryBackgroundColour } from "../colours";

const button = props => <div className={props.className} onClick={props.onClick}>{props.children}</div>;

export const StyledButton = styled(button)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 2rem;
    min-height: 2rem;
    border-radius: 1rem;
    background-color: ${props => props.backgroundColour || primaryColour};
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    cursor: pointer;
`;


const closeButton = props => <div onClick={props.onClick} className={props.className}>X</div>;

export const RoundCloseButton = styled(closeButton)`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  background-color: ${primaryBackgroundColour};
  color: ${textColour};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
`

const plusButton = props => <div onClick={props.onClick} className={props.className}>+</div>;

export const PlusButton = styled(plusButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  cursor: pointer;

  top: 95vh;
  left: 32vw;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  width: 3rem;
  height: 3rem;
  box-shadow: ${boxShadow};
  background-color: ${primaryColour};
  :hover {
    box-shadow: ${boxShadowBig}
  }
`;

export class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    if (props.children.length != 2) {
      throw new Error("OverlayButton must have 2 children, the first beeing the button and the second the overlays content")
    }

    if (isValidElement(props.children[0])) {
      this.button = cloneElement(props.children[0], { toggle: this.toggle.bind(this) })
    } else {
      const Elem = props.children[0];
      this.button = <Elem toggle={this.toggle.bind(this)} />
      // throw new Error("the first child must be a valid react element")
    }

    if (isValidElement(props.children[1])) {
      let className = props.children[1].props.className? props.children[1].props.className + " fullscreen": "fullscreen"
      this.content = cloneElement(props.children[1], { toggle: this.toggle.bind(this), className: className })
    } else {
      const Elem = props.children[1];
      this.content = <Elem toggle={this.toggle.bind(this)} />;
      // throw new Error("the second child must be a valid react element")
    }

    this.state = {
      expanded: false
    }
  }

  toggle() {
    this.setState({
      ...this.state,
      expanded: !this.state.expanded
    });
  }

  render() {
    // return <div className={this.props.className}>
    //     <span className={this.props.expanded? "fullscreen": "show-content-button"}>
    //       {this.props.expanded?
    //         this.content: this.button}
    //     </span>
    //   </div>;
    if (this.state.expanded) {
      return <div className={this.props.className}><span className="fullscreen">{this.content}</span></div>
    }
    return <span className={this.props.className}><span className="show-content-button">{this.button}</span></span>
  }
}

export const OverlayButton = styled(ToggleButton)`

  transition: all .6s ease-in;
  .fullscreen {
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100vh;
    background-color: ${secondaryBackgroundColour};
    border-radius: 0;
    top: 0;
    left: 0;
    transform: translate(0%, 0%);
  }

  .show-content-button {
    cursor: pointer;
  }

`;