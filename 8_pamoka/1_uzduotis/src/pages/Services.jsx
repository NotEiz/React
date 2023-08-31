import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
const Services =  () => {
     return(
          <div>
               <Header/>
               <div className="cardWrapper">
                   <div className="Card">
                         <h1>Kazkokia paslauga</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae hic ullam assumenda necessitatibus sed quia ipsa quas rerum     laborum nobis, totam, autem nostrum cupiditate omnis illo nesciunt reiciendis obcaecati.</p>
                   </div>
                   <div className="Card">
                         <h1>Kazkokia paslauga</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae hic ullam assumenda necessitatibus sed quia ipsa quasrerum             laborum nobis, totam, autem nostrum cupiditate omnis illo nesciunt reiciendis obcaecati.</p>
                   </div>
                   <div className="Card">
                         <h1>Kazkokia paslauga</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae hic ullam assumenda necessitatibus sed quia ipsa quas rerum     laborum nobis, totam, autem nostrum cupiditate omnis illo nesciunt reiciendis obcaecati.</p>
                    </div> 
               </div>
               <Footer/>
          </div>
     );
};


export   default  Services;