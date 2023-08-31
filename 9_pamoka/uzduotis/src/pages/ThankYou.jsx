import {useNavigate } from "react-router-dom";
const ThankYou = () => {
     const navigate = useNavigate();
     const retrunToMain = () => {
          navigate('/')
     }
     return (
          <div className="thankYouPage">
               <h1>Thank You!</h1>
               <p>For Your FeedBack</p>
               <button onClick={retrunToMain}>Return To Home</button>
          </div>
     );
};


export default ThankYou;