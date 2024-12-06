import React from 'react'
import './Certify.css'
import javascript from '../assets/javascript.jpg.png'
import Reactjs from '../assets/React.jpg.png'
import Frontend from '../assets/Fontend.jpg.png'

export const Certify = () => {
  return (
    <div id='Certify'>
       
        <h1>Certifications</h1>

        <h2>Hi There1! Here are the cetifications that demonstrate my commitment </h2>
        <div className="blu-line"></div>
        <div className="certificate">
       <div className="certis">
      <img src={javascript}></img>
     </div>
     <div className="certis">
     <img src={Frontend}></img>
     </div>

     <div className="certis">
     <img src={Reactjs}></img>
     </div>

       </div>

    </div>
  )
}
export default Certify