import PropTypes from 'prop-types';
import './services.css';

const Services = ({icon,title}) => {
     return <div className='card'>
          <img src={icon} />
          <h3>{title}</h3>
     </div>
};

Services.propTypes = {
     icon: PropTypes.string,
     title: PropTypes.string
}


export default Services;