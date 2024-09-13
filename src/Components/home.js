import React, { useEffect, useRef } from 'react';
import "../App.css";
import Intro from './Intro';
import Contact from './Contact';
import About from './About';
import Price from './Prices';
import ContactForm from './ContactFourm';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    const cardRefs = useRef([]);

    useEffect(() => {
        document.title = 'Web Development Company';
        AOS.init({
            once: false,
        });

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            cardRefs.current.forEach((card, index) => {
                if (card.offsetTop <= scrollPosition) {
                    card.classList.add('stacked');
                } else {
                    card.classList.remove('stacked');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToCard = (index) => {
        cardRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home-container">
            <div className="card1" ref={el => cardRefs.current[0] = el} data-aos="fade-up">
                <Intro />
            </div>
            <div>
            <ContactForm/>
            </div>
            <div className="card2" ref={el => cardRefs.current[1] = el} data-aos="fade-up">
                <Price />
            </div>
            <div className="card3" ref={el => cardRefs.current[2] = el} data-aos="fade-up">
                <Contact />
            </div>
            <div className="card4" ref={el => cardRefs.current[3] = el} data-aos="fade-up">
                <About />
            </div>
        </div>
    );
}

export default Home;
