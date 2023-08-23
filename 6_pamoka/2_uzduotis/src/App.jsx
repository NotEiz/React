import { useState } from "react";
import Products from './components/Product/Product.jsx';
import { useEffect } from "react";

const App = () => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://sophisticated-humane-dandelion.glitch.me')
    .then(resp => resp.json())
    .then(product => setProduct(product))
    .catch(err => console.log(err));
  }, [] );

  return(
    <main>
      <div id="productWrapper">
          {Product.map(product => !product ? 'Loading' : <Products 
          key={product.id} 
          image={product.image}
          title={product.title}
          price={product.price} /> )};
      </div>
     
    </main>
  );
};

export default App;