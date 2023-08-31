import './App.css';
import { useState } from "react";


const App = () => {
  const [data, setData] = useState([]);
  const [inputdata, setInputData] = useState('')


  const handleChanges = (event) => {
    event.preventDefault();
    {inputdata ? setData([...data, inputdata]) : ''}
    setInputData('')
  };

  const handelDelete = (index) => {
    const updatedData = data.filter(item => item !== index);
    setData(updatedData);
  };


  return (
    <div>
      <form onSubmit={handleChanges}>
        <div className='formHeading'>
          <h2>You have {data.length} todos</h2>
        </div>

        {data.map((todo, index) => <div className='todosWrapper' key={index}>
          <p >{todo}_{index + 1}</p>
          <input type="button" value='Delete' onClick={() => handelDelete(todo)}/>
        </div>)}

        <div className='inputWrapper'>
          <input value={inputdata} onChange={e => setInputData(e.target.value)}  placeholder='Enter your todo'
          style={{backgroundColor: inputdata ? 'rgb(98, 220, 98)' : 'pink'}}/>
          <input type="submit" value='Submit' />
        </div>

      </form>
    </div>
  );
};


export default App;