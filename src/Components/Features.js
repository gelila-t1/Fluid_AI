import React from 'react'
import IphoneOne from '../assets/iphone-one.png'
const Features = () => {
  return (
    <div className='feature-div'>
      <div className='our-features'>
      Our Features
      </div>
      <div className='feature-heading'>Fluid AI was born out of a <br/>
        desire to simplify and <br/> streamline modern life  
        </div>
        <div className='main-features'>
    <div>
    <p className='f-heading'>
    Fluid AI: Simplify, Organize, <br/> and Achieve More
    </p>
    <p className='f-text'>In a world where daily tasks, communication, and <br/>
    goals often become overwhelming, Fluid AI offers<br/>
     an innovative solution. Combining advanced AI<br/>
      technology with a user-friendly interface, it brings <br/>
      together to-do lists, chats, saved items, and bucket<br/>
       lists into one seamless platform.</p>
    </div>
    <div>
    <img src={IphoneOne} className="iphone"/>
    </div>

        </div>

        {/* second feature */}
  <div className='feature-two'>
  <div>
  <img src={IphoneOne} className="iphone"/>
</div>
<div>
    <p className='f-heading'>
    Fluid AI: Simplify, Organize, <br/> and Achieve More
    </p>
    <p className='f-text'>In a world where daily tasks, communication, and <br/>
    goals often become overwhelming, Fluid AI offers<br/>
     an innovative solution. Combining advanced AI<br/>
      technology with a user-friendly interface, it brings <br/>
      together to-do lists, chats, saved items, and bucket<br/>
       lists into one seamless platform.</p>
    </div>
  </div>


  <div className='feature-three'>
 
<div>
    <p className='f-heading'>
    Fluid AI: Simplify, Organize, <br/> and Achieve More
    </p>
    <p className='f-text'>In a world where daily tasks, communication, and <br/>
    goals often become overwhelming, Fluid AI offers<br/>
     an innovative solution. Combining advanced AI<br/>
      technology with a user-friendly interface, it brings <br/>
      together to-do lists, chats, saved items, and bucket<br/>
       lists into one seamless platform.</p>
    </div>
    <div>
  <img src={IphoneOne} className="iphone"/>
</div>
  </div>
    </div>
  )
}

export default Features
