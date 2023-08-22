import Product from './components/Product/Product';
import Img from './assets/img/audi.jpg'

const App = () => {
  return(
    <div>
      <Product 
      image={Img}
      title='Volkswagen GOLF MK2 2022 Calendar'
      price={10.00}
      description='All pieces are printed on heavyweight 200 gsm art paper'
      availability={10}
      category='Calendars'/>
    </div>
  )
};

export default App;