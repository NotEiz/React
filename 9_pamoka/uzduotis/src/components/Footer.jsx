import './Footer.scss';
import { Link } from "react-router-dom";
import {topNavigationItems } from "../routes/routes";
const Footer = () => {
     return(
          <footer className='footer'>        
                    <p>Copyright © 2021 Event</p>
               <nav>
                    {topNavigationItems.map((navItem) => (
                    <Link
                      key={navItem.path}
                      to={navItem.path}
                      className="footer-item"
                    >
                      {navItem.title}
                    </Link>
                    ))}
               </nav>
               
          </footer>
     );
};

export default Footer;