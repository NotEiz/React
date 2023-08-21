import PropTypes from 'prop-types';

const DogBreeds = ({dogs}) => {
     return <div>
          <ol>
               {dogs.map(dog => <li>{dog}</li> )}
          </ol>
     </div>
};

DogBreeds.propTypes = {
     dogs: PropTypes.array.isRequired,
}

export default DogBreeds;