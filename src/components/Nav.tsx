import {Link} from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;

  > ul {
    display: flex;
    justify-content: space-around;

    > li {
      text-align: center;
      padding: 16px;
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">Tags</Link>
                </li>
                <li>
                    <Link to="/money">Money</Link>
                </li>
                <li>
                    <Link to="/statistics">Statistics</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}


export default Nav;