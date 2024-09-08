import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import ContactForm from './Components/ContactFourm';
import Intro from './Components/Intro';
import Contact from './Components/Contact';
import About from './Components/About';
import Price from './Components/Prices'
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import PackageOne from './Components/PackageOne';
import PackageTwo from './Components/PackageTwo';
import PackageThree from './Components/PackageThree';
import Home from './Components/home';
import './App.css';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

  useEffect(()=>{
    document.title = 'Web Development Company';
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Navigation/>
      </header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutpage' element={<AboutPage/>}></Route>
          <Route path='/PackageOne' element={<PackageOne/>}></Route>
          <Route path='/PackageTwo' element={<PackageTwo/>}></Route>
          <Route path='/PackageThree' element={<PackageThree/>}></Route>
        </Routes>
    
    </div>
    </BrowserRouter>
  );
}
export default App;
