import PropTypes from 'prop-types';
import './diagnostics.css';


const Diagnostics = ({image,title,text}) => {
     return <div className='info'>
          <img src={image} />
          <h1>{title}</h1>
          <p>{text}</p>
          
     </div>
}

Diagnostics.propTypes = {
     image: PropTypes.string,
     title: PropTypes.string,
     text: PropTypes.string,
     btnText: PropTypes.string
}


export default Diagnostics;
