import React from 'react'
import './Services.css'
export const Services = () => {
  return (
    <div id='services'>
       <h1>SERVICES</h1>
       <p>Crafting seamless web experiences with innovative designs</p>
       <div className="blue"></div>
        <div className="service-top">
            <div className="service">
              <div className="over"></div>
            <ion-icon name="desktop-outline" id='desktop-outline'></ion-icon>
            <h4>WEB DEVELOPMENT</h4>
             <p>Crafting visually appealing and user-friendly website inter faces</p>

            </div>
            <div className="service">
              <div className="over"></div>
            <ion-icon name="code-working" id='code-working'></ion-icon>
            <h4>WEB DESIGNING</h4>
            <p> Building functional and dynamic web solutions</p>
            </div>
            <div className="service">
              <div className="over"></div>
            <ion-icon name="phone-portrait-outline" id='phone-outline'></ion-icon>
            <h4>MOBILE RESPONSIVE</h4>
             <p>Enduring seamless adaption across diverse device screens</p>
            </div>
        </div>
    </div>
  )
}
export default Services