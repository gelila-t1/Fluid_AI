import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer-div'>
      <div className='footer-pic'>
      <img className='footer-logo' src={logo}/>
      <p className='footer-year'>2024 Fluid AI</p>
      </div>
      <div className='footer-links'>
       <div>
        <p>Our Features</p>
        <p>Areas</p>
        <p>FAQs</p>
        <p>The Wailist</p>
        <p>Contact Us</p>
       </div>
       <div className='footer-link-two'>
        <p>Terms of service</p>
        <p>Privacy Policy</p>
       </div>
      </div>

    </div>
  )
}

export default Footer
