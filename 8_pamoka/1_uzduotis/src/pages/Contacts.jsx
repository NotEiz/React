import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import {useState} from 'react'
const Contacts =  () => {
     const[ name,setName] =useState('');
     const[ email,setEmail] =useState('');
     const[ message,setMessage] =useState('');

     const resetInputs = () => {
          setName('');
          setEmail('');
          setMessage('');
     }
     return(
          <div>
               <Header/>
               <div className="formWrapper">
                    <form onSubmit={(e) => {
                         e.preventDefault();
                         resetInputs()
                         name && email && message ? 
                         alert('Jus sekmigai pateikete kazka')
                          : 
                         alert('prasau uzpildyti visus langelius');
                         
                    }}>
                         <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter Your Name"/>
                         <input  value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Your Email"/>
                         <textarea  value={message} onChange={e => setMessage(e.target.value)} placeholder="Enter your message"></textarea>
                         <button>Send</button>
                    </form>
               </div>
               
               <Footer/>
               <h1>{name}{email}{message}</h1>
          </div>
     );
};


export   default  Contacts;