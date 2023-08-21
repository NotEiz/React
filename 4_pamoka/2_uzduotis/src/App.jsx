import DogBreeds from "./components/dogBreeds";

const App = () => {
     const dogs = ['grybas','dziuumbras','dar kazkoks','labradoras','rotveileris','biglis'];
     return(
          <div>
               <DogBreeds dogs={dogs} />
          </div>
     )
};

export default App