import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { primaryColour, linkColour, boxShadow } from "../colours";

export const Nav = props => {
  return <div className={props.className}>
    <nav>
      <Link className="nav-elem" to="/">Home</Link>
      <Link className="nav-elem" to="/settings">Settings</Link>
    </nav>
  </div>
};

export const StyledNav = styled(Nav)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .nav-elem {
    margin: 2rem;
    color: ${linkColour};
    text-decoration: none;
    :hover {
      color: ${linkColour};
    }
  }

  background-color: ${primaryColour};
  height: 5vmin;
  box-shadow: ${boxShadow};
`;
