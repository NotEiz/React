import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import  JobsDoneImg from  '../images/aboutus.jpg'
const JobsDone =  () => {
     return(
          <div>
               <Header/>
               <div id="JobsWrapper">
                    <img src={JobsDoneImg} alt="vasd" />
                    <img src={JobsDoneImg} alt="vasd" />
                    <img src={JobsDoneImg} alt="vasd" />
                    <img src={JobsDoneImg} alt="vasd" />
                    <img src={JobsDoneImg} alt="vasd" />
                    <img src={JobsDoneImg} alt="vasd" />
                    <img src={JobsDoneImg} alt="vasd" />
                    <img src={JobsDoneImg} alt="vasd" />
               </div>
               <Footer/>
          </div>
     );
};


export   default  JobsDone;