import {useState} from 'react';


const App = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState();

  const submitForm = (event) =>{
    event.preventDefault();
    {age > 10 ? alert('Draugai visam gyveniumui'):alert('Geri Draugai')}
    resetAfterSubmit();
  };
  
  const resetAfterSubmit = () => {
    setName('');
    setSurname('');
    setAge()
  };
  
  return(
    <div>
      <form onSubmit={submitForm}>
        <input onChange={(e) =>   setName(e.target.value)} placeholder='Enter name'/>
        <br />
        <input onChange={e => setSurname(e.target.value)} placeholder='Enter Surname'/>
        <br />
        <input type="number" onChange={e => setAge(e.target.value)}placeholder='Enter Age'/>
        <button>Submit</button>
        
      </form>
      <h1>Vardas: {name}</h1>
      <h2>Pavarde: {surname}</h2>
      <h3>Kiek metu: {age}</h3>
    </div>
  );
  
};


export default App;