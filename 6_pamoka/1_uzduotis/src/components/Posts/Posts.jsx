import { useEffect, useState } from "react";
import Post from "../post/Post";

const Posts = () => {
     const [Posts, setPosts] = useState([]);

     useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(resp => resp.json())
          .then((users) => setPosts(users))
     }, []);
     return(
          <div>
               {Posts.map(user => <Post key={user.id}  title={user.title} body={user.body}/>)}
          </div>
     )
};


export default Posts;