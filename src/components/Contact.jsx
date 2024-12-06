import React from 'react'
import './Contact.css'
import {useEffect,useState} from 'react'


export const Contact = () => {
 const [backToTopbutton,setbackToTopbutton] = useState(false)


   useEffect(()=>{
   window.addEventListener("scroll", () => {
    if(window.scrollY  > 500) {
      setbackToTopbutton(true)
    }else{
      setbackToTopbutton(false)

    }
   })
   }, [])
  
   const scrollUp = () => {
    window.scrollTo({
      top:0 ,
      behavior: "smooth"
    })
   }
  return (
      <div id='Contact'>
      <div className="contact-bg">
      <div className="contact-content">
      <div className="inner-content">
      <form id='form'>
       <h1>Message Me</h1>
       <div className="blue-line4"></div>
       <div className="blo-line"></div>
      <div className="input-group">
        <label htmlFor='text'>Username</label>
        <input type='text' placeholder='Your Name'></input>
      </div>
     <p></p>
      <div className="input-group">
      <label>Email</label>
      <input type='email' placeholder='Your Email'></input>
      </div>
       <div className='errors'></div>
      <div className="input-group">
      <label>Subject</label>
      <input type='text' placeholder='Subject'></input>
      </div>
      <div className="input-group">
     <textarea placeholder="Message"></textarea>
      </div>
      <button type='submit' id='btn'>Submit</button>
      </form>
      </div>
      <div className="outer-content">
        <h1>Get in Touch</h1>
        <div className="blue-line5"></div>
        <div className="inside">
          <p>I'm always excited to connect with new people and explore potential opportunities. Whether you have a project in mind, a question, or just want to say hello, feel free to reach out. Here’s how you can get in touch with me:</p>
        </div>
        <div className="loadcity">
          <a href='#'><ion-icon name="location-outline" id="location"></ion-icon></a>
        
        <p>5/27 kalaimagal St Chennai-94</p>
      
        <ion-icon name="call-outline" id="call"></ion-icon>
        <p>7338954128</p>
        <ion-icon name="mail-outline" id="mail"></ion-icon>
        <p>yokesh782003@gmail.com</p>
        </div>
        <div className="insta">
          <a href='#'>
          <ion-icon name="logo-whatsapp" id="whats"></ion-icon>
          </a>
        <a href='http://instagram.com/mr_yoke_ms10'>
        <ion-icon name="logo-instagram" id="instagram"></ion-icon>
        </a>
        <a href='https://www.linkedin.com/in/yokesh-waran?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
        <ion-icon name="logo-linkedin"id="linkedin"></ion-icon>
        </a>
        <a href='https://github.com/yoke2poke'>
        <ion-icon name="logo-github"id="github"></ion-icon>
        </a>
       
        </div>
       {backToTopbutton && <button id='top'><a href='#'><ion-icon name="arrow-up-outline" id="arrow"></ion-icon></a></button>}
      </div>
      </div>
       </div>
       
    </div>
  
  )
}
export default Contact

// /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i