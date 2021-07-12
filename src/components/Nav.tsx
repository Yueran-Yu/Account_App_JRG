import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Icon} from './Icon';

const NavWrapper = styled.nav`
  background: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  font-size: 14px;
  color: #515151;
  padding-top: 3px;

  > ul {
    display: flex;
    justify-content: space-around;
    text-align: center;

    > li {
      padding-top: 6px;
      padding-bottom: 2px;

      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
          width: 20px;
          height: 20px;
          fill: #515151;
        }

        &.selected {
          color: #5678de;

          .icon {
            fill: #5678de;
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
                        <Icon name='money'/>
                        Add
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