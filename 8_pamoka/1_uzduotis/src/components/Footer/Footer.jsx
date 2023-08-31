import  {Link} from 'react-router-dom';
import './Footer.css'
const Footer = () => {
     return(
          <footer id="footer">
               <nav>
                    <Link to='/'>HOME</Link>
                    <Link to='/naujienos'>NEWS</Link>
                    <Link to='/apie-mus'>ABOUT US</Link>
                    <Link to='/kontaktai'>CONTACTS</Link>
                    <Link to='/paslaugos'>SERVICES</Link>
                    <Link to='/atlikti-darbai'>JOBS DONE</Link>
               </nav>
               <p>@Kazkokios teisese</p>
               <p className='m10'>{new Date().toDateString()}</p>
          </footer>
     );
};

export default Footer;