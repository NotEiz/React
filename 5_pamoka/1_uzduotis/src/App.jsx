import { useState } from "react";

const App = () => {
  const [Balance , setBalance] = useState(2000);
  const buttons =['Ideti 500$','issimti 500$','issimti visus pinigus'];

  return(
    <div>
      <div style={{textAlign: 'center'}}>
        <h1>{Balance}$</h1>
        <button onClick={() => setBalance(Balance + 500)}>{buttons[0]}</button>
        <button onClick={() => setBalance(Balance - 500)}>{buttons[1]}</button>
        <button onClick={() => setBalance(0)}>{buttons[2]}</button>
      </div>
    </div>
  )
};


export default  App;