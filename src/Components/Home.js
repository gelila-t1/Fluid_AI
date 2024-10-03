import React, { useEffect } from 'react'
import '../App.css'
// import ScrollAnimation from 'react-animate-on-scroll';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Logo from '../assets/logo.png'
import Scroll from '../assets/scroll.png'

const Home = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    }, []); 
  return (
   
     <div>
        
<div className='home-div'>
     <div data-aos="fade-up">
     <img src={Logo} className='image-div' alt="Logo" />
     </div>
  

     <div><img src={Scroll} className='scroll-div' alt="Scroll" /></div>
     <div className='scroll-text'>Scroll Down</div>
    
   
     </div>
   
   

                           {/* section two             */}
     <div className='main-div'>
     <h1>hello</h1>
      <div>
      <h1>hello</h1>
      </div>
      <div>

      </div>
      <div>
        
      </div>

  </div>
    </div>
  )
}

export default Home
