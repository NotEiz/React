import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../routes/routes";
import LogoImage from '../assets/images/logo.jpg'
function Logo() {

     const navigation = useNavigate()
     return (
          <div className="logoWrapper" onClick={() => navigation(HOME_PATH)}>
               <img src={LogoImage} alt="logo" className="navigation-logo"/> 
               <div className="logoText">
                    <h1>Auto</h1>
                    <h2>Car Shows</h2>
               </div>
          </div>
     );
}

export default Logo;