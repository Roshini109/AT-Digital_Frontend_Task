import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <div className="hero">
        <img src="/assets/MainBC.png" alt="BackgroundImage" className="bc" />
        <div className="caption">
          <p>We crush your competitors, goals, and sales records - without the B.S.</p>
          <button>GET FREE CONSULTATION</button>
        </div>
    </div>
  )
}
