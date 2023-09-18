import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledHeader } from "./styled/StyledHeader";
import { Logo } from "./styled/Logo";
import { StyledNavBar } from "./styled/NavItems";
import { HOME_PATH, LOGIN_PATH, NEW_CAR_PATH } from "../routes/routeConsts";
import { UserContext } from "../contexts/userContext";
import { StyledButton } from "./styled/StyledButton";
const Header = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const { user } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  };

  const navigate = useNavigate();
  return (
    <header className="underlineHeader">
      <StyledHeader>
        <Logo onClick={() => navigate(HOME_PATH)}>
          <span>Used</span>Cars<span>.</span>com
        </Logo>

        <StyledNavBar>
          {user ? <p>{user.email.split("@")[0]}</p> : ""}
          {isLoggedIn && (
            <StyledButton onClick={() => navigate(NEW_CAR_PATH)} type="button">
              + ADD CAR
            </StyledButton>
          )}
          {isLoggedIn ? (
            <Link to={HOME_PATH} onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to={LOGIN_PATH}>Login</Link>
          )}

          <Link to={HOME_PATH}>Home</Link>
        </StyledNavBar>
      </StyledHeader>
    </header>
  );
};

export default Header;
