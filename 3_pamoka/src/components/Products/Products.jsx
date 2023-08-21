import PropTypes from 'prop-types';
import './Products.css';
const secPrice = document.querySelector('.secondPrice');
console.log(secPrice)

const Product = ({category, name, firstPrice,}) => {

     return <div className='product'>
          <h4>{category}</h4>
          <h2>{name}</h2>
          <h3>{firstPrice}</h3>
               
     </div>
     
};


Product.propTypes = {
     category: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     firstPrice: PropTypes.string.isRequired
}

export default Product