import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation'
import Intro from './Components/Intro';
import Contact from './Components/Contact';
import About from './Components/About';
import Price from './Components/Prices'
import ContactPage from './Components/ContactPage';
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
        <br></br>
        <main>
          <Intro/>
        </main>
        <br></br>
        <main>
          <Price/>
        </main>
          <br/>
          <br/>
          <br/>
          <br/>

        <main>
          <Contact/>
        </main>
          <br/>
          <br/>
          <br/>
          <br/>
        <main>
          <About/>
        </main>
    
    </div>
    </BrowserRouter>
  );
}
export default App;
