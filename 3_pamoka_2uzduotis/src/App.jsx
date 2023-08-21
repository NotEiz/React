import Heading from './assets/components/heading/heading.jsx';
import Diagnostics from './assets/components/main/diagnostics.jsx';
import Services from './assets/components/services/services.jsx';
import carImg from './assets/img/carNr1.avif';
import carImgTwo from './assets/img/carNr2.avif';

const App = () => {
  return <div>
    <header>
      <Heading image={carImg} 
      title='Our services' 
      text='Consulted he eagerness unfeeling deficient existence of. Calling nothing end fertile for venture way boy. Esteem spirit temper too say adieus who direct esteem. It esteems luckily'
      btnText='Book a service'/>
    </header>
    <main>
        <div id='info'>
          <Diagnostics image={carImgTwo}
          title='Auto Diagnostics'
          text='Consulted he eagerness unfeeling deficient existence of.  Calling nothing end fertile for venture way boy. Esteem spirit   temper too say adieus who direct esteem. It esteems luckily mr  '/>
      </div>
      <div className='cardWrapper'>
        <Services  title='KAZKOKS'/>
        <Services  title='KAZKOKS'/>
        <Services  title='KAZKOKS'/>
        <Services  title='KAZKOKS'/>
        <Services  title='KAZKOKS'/>
        <Services  title='KAZKOKS'/>
      </div>
      
    </main>
  </div>
};


export default App