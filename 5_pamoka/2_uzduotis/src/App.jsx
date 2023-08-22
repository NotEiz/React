import { useState } from "react";

const App = () => {
  const [Color, setColor] =useState('black')
  const colors = ['blue','red','yellow','gray','green',]
  return(
    <div>
      <div style={{width:100,height:100,backgroundColor: Color,borderRadius:'50%'}}></div>
      {colors.map(color => <button onClick={() => setColor(color)}
      key={color} 
      style={{backgroundColor: color}}>{color}</button> )}
    </div>
  )
};

export default App;