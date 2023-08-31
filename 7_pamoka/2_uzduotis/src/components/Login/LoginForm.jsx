import { useState } from 'react';

const Login = () => {
     const [mail,setMail] = useState('');
     const [password, setPassword] = useState('');
     const [isLogged, setIsLogged] = useState(false);

     const handleLogin = (e) => {
          e.preventDefault();
          setIsLogged(true)
          setMail('')
          setPassword('')
     }
     return(
          <div>
               <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input value={mail} type="email" name='email' onChange={e => setMail(e.target.value)} placeholder='Enter Email'/>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input value={password} type="password" name='password' onChange={e => setPassword(e.target.value)} placeholder='Enter Password'/>
                    <br />
                    <input type="submit" value='Prisijungti' />
               </form>
               {isLogged ? <h1>Sekmingai prisijungete</h1> : '' }
          </div>
          
          
          
     );
};



export default Login;