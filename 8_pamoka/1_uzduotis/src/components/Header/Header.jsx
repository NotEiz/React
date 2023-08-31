import  {Link} from 'react-router-dom';
import './Header.css'
const Header = () => {
     return(
          <header id="header">
               <h1>RANDOM</h1>
               <nav>
                    <Link to='/'>HOME</Link>
                    <Link to='/naujienos'>NEWS</Link>
                    <Link to='/apie-mus'>ABOUT US</Link>
                    <Link to='/kontaktai'>CONTACTS</Link>
                    <Link to='/paslaugos'>SERVICES</Link>
                    <Link to='/atlikti-darbai'>JOBS DONE</Link>
               </nav>
          </header>
     );
};

export default Header;