import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import  AboutUsImg from  '../images/aboutus.jpg'
const AboutUs =  () => {
     return(
          <div>
               <Header/>
               <div  id="aboutUsWrapper">
                    <h1>Site Title</h1>
                    <div className="aboutUs">
                    <img src={AboutUsImg} alt="image of four porshe cars" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel impedit debitis deleniti maxime recusandae voluptatem optio est veniam pariatur quia quos repellendus numquam nemo, cupiditate alias laboriosam ea quas magni temporibus tempore. Explicabo voluptatibus cum minus modi totam? Inventore dolorem, tempore architecto accusantium excepturi qui quidem sit voluptatem nihil rerum?</p>
                    </div>
                    
               </div>
               <Footer />
          </div>
     );
};


export   default  AboutUs;