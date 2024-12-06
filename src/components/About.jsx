import React from 'react'
import './About.css'
import passport from '../assets/passport2.png'
export const About = () => {
  return (
  
    <div id="About">
        <div className="container">
        <div className="first-half">
            <img src={passport}></img>
            <div className="skills">
              <h1>My Skills</h1>
              <div className="skill">
                <label for="html">HTML5&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80%</label>
                <div className="html"></div>
              </div>
              <div className="skill">
              <label for="css">CSS3&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;75%</label>
              <div className="css"></div>
              </div>
              <div className="skill">
              <label for="java">Javascript&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;70%</label>
              <div className="java"></div>
              </div>
              <div className="skill">
              <label for="react">ReactJs&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;65%</label>
              <div className="react"></div>
              </div>
            </div>
        </div> 
           <div className="second-half">
           <h1>About me</h1>
           <div className="blue-line1"></div>
          <p>
            Hello! I'm Yokesh, a passionate and dedicated front-end developer with a keen eye for design and a deep love for creating seamless, user-friendly web experiences. I have honed my skills in various front-end technologies and frameworks.
          </p>
          <p>
            Despite my lack of professional experience, I bring enthusiasm, a strong willingness to learn, and a proactive attitude to every project. I am excited to contribute to a team where I can grow my skills and collaborate on meaningful projects. 
           
          </p>
          <p>
            My goal is to continuously improve and stay updated with the latest trends and technologies in front-end development.
            Interests:
            
            In my free time, I enjoy exploring new web technologies,
          </p> 
          </div>
        </div>
        
        </div>
       
    
    
    
  
  )
}
export default About