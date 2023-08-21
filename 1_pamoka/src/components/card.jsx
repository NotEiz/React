import PropTypes from 'prop-types';
import './card.css'

const Card = ({imgURL,title,subtitle}) => {
     return <div className='card'>
          <img className='cardImage' src={imgURL} alt="" />
          <h1>{title}</h1>
          <p>{subtitle}</p>
     </div>
}

Card.propTypes = {
     imgURL: PropTypes.string,
     title: PropTypes.string,
     subtitle: PropTypes.string
}

export default Card