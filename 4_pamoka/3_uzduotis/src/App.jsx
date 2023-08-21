import Animals from "./components/Animal";

const animals = [
  {id:1,name:'bonis',type:'dog'},
  {id:2,name:'spenys',type:'cow'},
  {id:3,name:'dziumbras',type:'horse'}]

const App = () => {
  return(
    <div key={animals.id}>
      <Animals animals={animals} />
    </div>
  )
};

export default App;