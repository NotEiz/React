import PropTypes from 'prop-types';
import './heading.css';


const Heading = ({image,title,text,btnText}) => {
     return <div className='heading'>
          <img src={image} />
          <div className='inner'>
               <h1>{title}</h1>
               <p>{text}</p>
               <button>{btnText}</button>
          </div>
     </div>
}

Heading.propTypes = {
     image: PropTypes.string,
     title: PropTypes.string,
     text: PropTypes.string,
     btnText: PropTypes.string
}


export default Heading;