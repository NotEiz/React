import Button from '../Button/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Product.css'

const Product = ({image,title,price,description,availability,category}) => {
     const [Count, setCount] = useState(1)
     return(
          <div id='productWrapper'>
               <div className='hero'><img src={image}/>

               </div>
               <div className='main'>
                    <h1>{title}</h1>
                    <h2>{price}.00$</h2>
                    <p>12 unique designs</p>
                    <p>{description}</p>
                    <p>Limited to 50 pieces</p>
                    <div>
                         <p>One size:</p>
                         <p>11.7x16.5 inch/(297x420mm) </p>
                    </div>
                    <h3>Availability:<span style={{color: 'lime'}}>{availability} in stock</span></h3>
                    <div className='allBtns'>
                        <button onClick={() => setCount(Count - 1)}> - </button>
                        <p>{Count >= 1 ? Count : setCount(1)}</p>
                        <button onClick={() => setCount(Count + 1)}> + </button> 
                        <Button />
                    </div>
                    <p> Category:{category}</p>
               </div>
          </div>
     )
};

Product.propTypes = {
     image: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     price: PropTypes.number.isRequired,
     description: PropTypes.string.isRequired,
     availability: PropTypes.number.isRequired,
     category: PropTypes.string.isRequired,
}

export default Product

