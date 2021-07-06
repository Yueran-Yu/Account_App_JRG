import {Link} from "react-router-dom";
import styled from "styled-components";
// TreeShaking is not applicable to 'require'
require('icons/tags.svg');
require('icons/dollars.svg');
require('icons/statistics.svg');


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
                    <svg className='icon'>
                        <use xlinkHref='#tags'/>
                    </svg>
                    <Link to="/tags">Tags</Link>
                </li>
                <li>
                    <svg className='icon'>
                        <use xlinkHref='#dollars'/>
                    </svg>
                    <Link to="/money">Money</Link>
                </li>
                <li>
                    <svg className='icon'>
                        <use xlinkHref='#statistics'/>
                    </svg>
                    <Link to="/statistics">Statistics</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}


export default Nav;