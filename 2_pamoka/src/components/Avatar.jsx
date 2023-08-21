import PropTypes from 'prop-types';
import './Avatar.css';

let symbols,color;
  symbols = '0123456789ABCDEF';

  color = '#';

  for(let i = 0;i < 6; i++){
    color = color + symbols[Math.floor(Math.random()*16)];
  }


const Avatar = ({name}) => {
     return <div style={{background: `${color}`}} className='avatar'>
          <h2>{`${name.split(' ')[0].charAt()}${name.split(' ')[1].charAt()}`}</h2>
     </div>
};


Avatar.propTypes = {
     name: PropTypes.string 
}

export default Avatar