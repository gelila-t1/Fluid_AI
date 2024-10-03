import React from 'react'
import hand from '../assets/hand.png'

const Waitlist = () => {
  return (
    <div className='wait-background'>
     <div>
     <p className='join'>Join the Fluid AI<br/> Waitlist Today!</p>
     <input type='text' placeholder='Name'/><br/>
     <input type='text' placeholder='Name'/><br/>
     
     <select id="countries" class="country-select">
     <option value="ca" className='option-co'>
            <img class="flag" src="https://flagcdn.com/ca.svg" alt="Canada Flag"/> United Arab Emirates
        </option>
        <option value="us">
            <img class="flag" src="https://flagcdn.com/us.svg" alt="USA Flag"/> USA
        </option>
       
        <option value="gb">
            <img class="flag" src="https://flagcdn.com/gb.svg" alt="UK Flag"/> Poland
        </option>
    
        <option value="fr">
            <img class="flag" src="https://flagcdn.com/fr.svg" alt="France Flag"/> France
        </option>
      
    </select><br/>
    <button className='Join-button'>Join Waitlist</button>
    
     </div>
     <div>
      <img src={hand} className='hand-image'/>
     </div>
    </div>
  )
}

export default Waitlist
