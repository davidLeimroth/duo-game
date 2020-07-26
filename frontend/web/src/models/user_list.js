import React from "react";
import styled from "styled-components";
import { secondaryBackgroundColour, boxShadow } from "../colours";

export class UserList extends React.Component {
  constructor(props) {
    super(props);

    console.log("constructor")
    if (!this.props.users) this.props.users = [];

    this.state = {
      users: [
        ...this.props.users.map(u => ({name: u.name[0], id: u.id}))
      ]
    };
  }

  mouseEnter(e) {
    const modId = e.target.attributes.uid.value;

    this.setState({
      ...this.state,
      users: [...this.state.users.map((u, i) => {
        if (i != modId) {
          return u;
        }
        return {
          ...u,
          name: this.props.users[modId].name
        }
      })]
    })
  }

  mouseLeave(e) {
    const modId = e.target.attributes.uid.value;

    this.setState({
      ...this.state,
      users: [...this.state.users.map((u, i) => {
        if (i != modId) {
          return u;
        }
        return {
          ...u,
          name: this.props.users[modId].name[0]
        }
      })]
    })
  }

  render() {
    console.log(this.props.className)
    return <div className={this.props.className}>
    {
      this.state.users.map(u => <p onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} className="user-list-elem" uid={u.id} key={"game-user-list-"-u.id}>{u.name}</p>)
    }
  </div>

  }
}

export const StyledUserList = styled(UserList)`
  display: flex;
  flex-direction: column;
  align-items: start;
  .user-list-elem {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    height: 4rem;
    width: 4rem;
    background-color: ${secondaryBackgroundColour};
    box-shadow: ${boxShadow};
    transition: padding-left 1s, padding-right 1s;

    :hover {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

`;