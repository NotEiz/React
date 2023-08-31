import {useState,useEffect} from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
const News =  () => {
     const [news, setNews] = useState([])

     useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(resp => resp.json())
          .then(posts => setNews(posts))
     })
     return(
          <div>
               <Header/>
               <div className='postWrapper'>
                    {news.map(post => <div key={post.id}>
                         <h2>{post.title}</h2>
                         <p>{post.body}</p>
                    </div> )}
               </div>
               <Footer />
          </div>
     );
};


export   default  News;