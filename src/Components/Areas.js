import React, { useState, useEffect } from 'react';
import carouselOne from '../assets/carouselOne.png'; // Adjust the path as necessary
import carouselTwo from '../assets/carouselTwo.png'; // Adjust the path as necessary
import carouselThree from '../assets/carouselThree.png'; // Adjust the path as necessary
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'

const Areas = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const slides = [
        {
            id: 1,
            image: carouselOne,
            caption: "Fluid has Internet access, so you can get up-to-date information from it.",
            captiontwo: "Time for Family"
        },
        {
            id: 2,
            image: carouselTwo,
            caption: "You can use Fluid as an assistant to save time - and save your sanity.",
            captiontwo: "Time for Work"
        },
        {
            id: 3,
            image: carouselThree,
            caption: "Fluid easily integrates with your friends' calendars",
            captiontwo: "Time for Friends"
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 2000); 

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + slides.length) % slides.length
        );
    };
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div className="areas-carousel"  
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}>
            <div 
              className='car-box'
            >
                <div className="caption">{slides[currentIndex].caption}</div>
                <div className="caption-two">{slides[currentIndex].captiontwo}</div>
            </div>
            <button className="prev" onClick={prevSlide}><img src={leftArrow}/></button>
            <button className="next" onClick={nextSlide}><img src={rightArrow}/></button>
            <div className="dots">
                {slides.map((slide, index) => (
                    <span 
                        key={slide.id} 
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Areas;