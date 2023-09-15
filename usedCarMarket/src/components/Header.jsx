import { Link, useNavigate } from "react-router-dom";
import { StyledHeader } from "./styled/StyledHeader";
import { Logo } from "./styled/Logo";
import { StyledNavBar } from "./styled/NavItems";
import { HOME_PATH, navbarLinks } from "../routes/routeConsts";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="underlineHeader">
      <StyledHeader>
        <Logo onClick={() => navigate(HOME_PATH)}>
          <span>Used</span>Cars<span>.</span>com
        </Logo>

        <StyledNavBar>
          {navbarLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.title}
            </Link>
          ))}
        </StyledNavBar>
      </StyledHeader>
    </header>
  );
};

export default Header;
