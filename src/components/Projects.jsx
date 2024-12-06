import React from 'react'
import './Projects.css'
import Netflix from '../assets/netflix.png'
import Perfumy from '../assets/perfumy.png'
import Form from '../assets/form.png'
import currency from '../assets/currency.png'
import book from '../assets/booksky.png'
import todo from '../assets/todolist.png'
export const Projects = () => {
  return (
    <div id='Projects'>
      <h1>PROJECTS</h1>
      <p>Hi There! Explore my diverse projects that showcase my skills</p>
      <div className="blue-line2"></div>
      <div className="cards">
      <div className="card">
            <div className="card-face-one">
              <img src={Netflix}></img>
              <a href='#'>Click Here</a>
            </div>
            <div className="card-face-two">
                <h2>Netflix Landing Page</h2>
                <p>I've learned about resposiveness</p>
            </div>
        </div>
        <div className="card">
            <div className="card-face-one">
            <img src={Perfumy}></img>
            <a href='#'>Click Here</a>
            </div>
            <div className="card-face-two">
                <h2>Perfumy</h2>
                <p>I've learned about Html and css </p>
            </div>
        </div>
        <div className="card">
            <div className="card-face-one">
            <img src={Form}></img>
            <a href='#'>Click Here</a>
            </div>
            <div className="card-face-two">
                <h2>Form validation</h2>
                <p>I've learned about Nesting Method</p>
            </div>
        </div>
        <div className="card">
            <div className="card-face-one">
            <img src={currency}></img>
            <a href='#'>Click Here</a>
            </div>
            <div className="card-face-two">
                <h2>Currency Converter</h2>
                <p>I've learned about Fetching api</p>
            </div>
        </div>
        <div className="card">
            <div className="card-face-one">
            <img src={book}></img>
            <a href='#'>Click Here</a>
            </div>
            <div className="card-face-two">
                <h2>Booksky</h2>
                <p>I've learned about Popup</p>
            </div>
        </div>
        <div className="card">
            <div className="card-face-one">
            <img src={todo}></img>
            <a href='#'>Click Here</a>
            </div>
            <div className="card-face-two">
                <h2>Todo List</h2>
                <p>I've learned about Local Storage</p>
            </div>
        </div>
      </div>
        
    </div>
  )
}
export default Projects