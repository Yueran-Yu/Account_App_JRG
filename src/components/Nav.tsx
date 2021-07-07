import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Icon} from './Icon';


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;

  > ul {
    display: flex;
    justify-content: space-around;

    > li {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4px 0;
      justify-content: center;

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name='tags'/>
                    <Link to="/tags">Tags</Link>
                </li>
                <li>
                    <Icon name='dollars'/>
                    <Link to="/money">Money</Link>
                </li>
                <li>
                    <Icon name='statistics'/>
                    <Link to="/statistics">Statistics</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;