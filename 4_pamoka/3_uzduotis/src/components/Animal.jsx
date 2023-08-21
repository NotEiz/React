import PropTypes from 'prop-types';

const Animals = ({animals}) => {
     return(
          <div>
               <ul>
               {animals.map(animal => <li key={animal.id}>
                     {animal.id} {animal.name} {animal.type} </li> )}
               </ul>
          </div>
     )
};

Animals.propTypes = {
     animals: PropTypes.shape
}

export default Animals;