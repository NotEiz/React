
const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return(
    <div style={{display: 'flex',gap:10}}>
      {numbers.map(
        number =>  <p key={number}> {number % 2===0 ? `${number}(${number * 2})` : number}</p> 
        )}
    </div>
  )
};


export default App


