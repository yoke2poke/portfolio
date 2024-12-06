import React from 'react'
import './Experience.css'
export const Experience = () => {
  return (
    <div className='experience'>
    <div className="overlay-blue">
      <div className="wrapper">
      <ion-icon name="checkmark-outline" id='checkmark'></ion-icon>
      <h3>30+</h3>
      <p> WORKS COMPLETED</p>
      </div>
      <div className="wrapper">
      <ion-icon name="calendar-clear-outline" id='calendar'></ion-icon>
      <h3>0</h3>
      <p>YEARS OF EXPERIENCE</p>
      </div>
      <div className="wrapper">
      <ion-icon name="people-outline" id='people'></ion-icon>
      <h3>0</h3>
      <p>TOTAL CLIENTS</p>

      </div>
      <div className="wrapper">
      <ion-icon name="medal-outline" id='medal'></ion-icon>
        <h3>0</h3>
      <p>AWARDS WON</p>
      </div>
    </div>
     <div className="overlay-bg">
       
     </div>
          
    </div>
  )
}
export default Experience




{/* <div class="wrapper1">
<h3>30+</h3>
<p> WORKS COMPLETED</p>
</div>
<div class="wrapper2">
<h3>0&emsp;&emsp;</h3>
<p>YEARS OF EXPERIENCE&emsp;&emsp;&emsp;</p>
</div>
<div class="wrapper3">
<h3>0&emsp;&emsp;&emsp;&emsp;</h3>
<p>TOTAL CLIENTS&emsp;&emsp;&emsp;&emsp;</p>
</div>
<div class="wrapper4">
<h3>0&emsp;&emsp;</h3>
<p>AWARDS WON</p>
</div>
</div>
</ */}