import PropTypes from 'prop-types';
import './Product.css'

const Product = ({image,title,price}) => {
     return(
          <div className='product'>
               <img src={image}/>
               <p>{title}</p>
               <h2>€{price}</h2>
               <button>istrinti</button>
          </div>
     );
};

Product.propTypes = {
     image: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     price: PropTypes.number.isRequired
};

export default Product;