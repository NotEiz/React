import Header from "../components/Header/Header"
import CarImage  from '../images/240sx.jpg';
import Footer from '../components/Footer/Footer';

const Home =  () => {
     return(
          <div style={{height: '100vh', width: '100%'}}>
               <Header/>
               <img id="carImg" src={CarImage} alt="Nissan  240sx stance image" />
               <Footer />
          </div>
     );
};


export   default  Home;