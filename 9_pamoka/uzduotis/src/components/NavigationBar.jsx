import { Link } from "react-router-dom";
import {topNavigationItems } from "../routes/routes";
import Logo from "./Logo";
import "./NavigationBar.scss";

const NavigationBar = () => {

  return (
    <header className="navigation-header">
      <Logo />
      <nav>
        {topNavigationItems.map((navItem) => (
          <Link
            key={navItem.path}
            to={navItem.path}
            className="navigation-item"
          >
            {navItem.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default NavigationBar;
