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
    text-align: center;

    > li {
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4px 0;

        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">
                        <Icon name='tags'/>
                        Tags
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <Icon name='dollars'/>
                        Money
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <Icon name='statistics'/>
                        Statistics
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;