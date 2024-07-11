
import './App.css';
import Home from './component/Home';
import Hero from './component/Hero';
import About from './component/About';
import Services from './component/Services';
import Portfolio from './component/Portfolio';
import Testimonial from './component/Testimonial';
import Team from './component/Team';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
      <Route path='/' element={<Hero/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={ <Services/>}></Route>
      <Route path='/portfolio' element={ <Portfolio/>}></Route>
      <Route path='/testimonial' element={ <Testimonial/>}></Route>
      <Route path='/team' element={ <Team/>}></Route>
      <Route path='/contact' element={ <Contact/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
