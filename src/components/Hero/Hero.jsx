import React from 'react'
import './hero.css'
import { List } from '@mui/material'


export default function Hero() {
  return (

    <>
    {/* --------------------main page---------------------------- */}
    <div className="hero">
        <img src="/assets/MainBC.png" alt="BackgroundImage" className="bc" />
        <div className="caption">
          <p className='para1'>We crush your competitors, goals, and sales records - without the B.S.</p>
          <button className='consBtn'>GET FREE CONSULTATION</button>
        </div>
    </div>

{/* ----------------------Web & Mobile app Development--------------------------------- */}

    <div className="devContainer">
      <div className="dcLeft">
          <img src="/assets/web.png" alt="" className='web'/>
      </div>
      <div className="dcRight">
        <div className="devText">
          <h3 className='devTitle'>Web & Mobile App Development</h3>
          <p className='devPara'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <button className='devBtn'>LEARN MORE</button>
        </div>
      </div>
    </div>


{/*---------------------------Digital Strategy Consulting------------------------------------- */}
    <div className="consult">
      <div className="conLeft">
        <div className="devText">
          <h3 className='devTitle'>Digital Strategy Consulting</h3>
          <p className='conPara'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          <button className='devBtn'>LEARN MORE</button>
        </div>
      </div>
      <div className="dcLeft">
      <img src="/assets/search.png" alt="" className='web'/>
      </div>
    </div>


    {/* -------------------------------------Footer-------------------------------------- */}
    <div className="footer">
      <div className="footerTop">
        <div className="topLeft">
          <img src="/assets/Logo.png" alt="Logo" />
          <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div>
        <div className="topRight">
          <div className="tech">
            <p className='topic'>Our Technologies</p>
            <ul className="list">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>GraphQL</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div className="services">
          <p className='topic'>Our Services</p>
            <ul className="list">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Marketing Solutions</li>
              <li>Search Engine Optimization</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="box">
          <hr />
          <span>Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Terms & Conditions</span>
        </div>
      </div>
    </div>
</>
  )
}
