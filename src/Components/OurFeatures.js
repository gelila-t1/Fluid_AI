import React, { useEffect } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import phone from '../assets/iphone-one.png'

const OurFeatures = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Check if the section is in the viewport
        if (rect.top < viewportHeight && rect.bottom > 0) {
          section.style.opacity = 1;
        } else {
          section.style.opacity = 0;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav>
        <Link to="section1" onClick={() => scrollToElement('section1')}>Curiosity</Link>
        <Link to="section2" onClick={() => scrollToElement('section2')}>Awe</Link>
      </nav>

      <Element name="section1" className="section">
        <h1>Curiosity Awaits</h1>
        <img src={phone} alt="Curiosity" />
      </Element>

      <Element name="section2" className="section">
        <h1>Awe and Wonder</h1>
        <img src={phone} alt="Awe" />
      </Element>
    </div>
  );
};

export default OurFeatures;