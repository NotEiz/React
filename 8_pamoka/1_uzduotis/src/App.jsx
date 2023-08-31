import { Routes, Route} from "react-router-dom";
import Home  from './pages/Home';
import AboutUs  from './pages/AboutUs';
import News from './pages/News';
import  Services from './pages/Services';
import  JobsDone from './pages/JobsDone';
import  Contacts from './pages/Contacts';
 
const App = () => {
     return(
          <Routes>
               <Route path="/" element={<Home />} ></Route>
               <Route path="apie-mus" element={<AboutUs />} ></Route>
               <Route path="naujienos" element={<News />} ></Route>
               <Route path="paslaugos" element={<Services/>} ></Route>
               <Route path="atlikti-darbai" element={<JobsDone/>} ></Route>
               <Route path="kontaktai" element={<Contacts/>} ></Route>
          </Routes>
     )
};

export default App;