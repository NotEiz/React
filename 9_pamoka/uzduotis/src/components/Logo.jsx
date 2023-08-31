import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../routes/routes";
function Logo() {
     const navigation = useNavigate()
     return (
          <div>
               <h3 onClick={() => navigation(HOME_PATH)} className="navigation-logo">Events.com</h3>
          </div>
     );
}

export default Logo;