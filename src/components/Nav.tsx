import React from 'react';
import {NavLink} from "react-router-dom";
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

        &.selected {
          color: #706f6f;

          .icon {
            fill: #706f6f;
          }
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
                    <NavLink to="/tags" activeClassName='selected'>
                        <Icon name='tags'/>
                        Tags
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName='selected'>
                        <Icon name='dollars'/>
                        Money
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName='selected'>
                        <Icon name='statistics'/>
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;