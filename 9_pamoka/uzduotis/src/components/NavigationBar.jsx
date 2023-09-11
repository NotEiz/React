import { Link } from "react-router-dom";
import {topNavigationItems } from "../routes/routes";
import styled from 'styled-components';
import Logo from "./Logo";
import "./NavigationBar.scss";

// === CSS === //
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  background-color: rgb(35, 35, 35);
`
const Nav = styled.nav`
margin-right: 3rem;
`

const NavigationBar = () => {

  return (
    <Header>
      <Logo />
      <Nav>
        {topNavigationItems.map((navItem) => (
          <Link
            key={navItem.path}
            to={navItem.path}
            className="navigation-item"
          >
            {navItem.title}
          </Link>
        ))}
      </Nav>
    </Header>
  );
};

export default NavigationBar;
