import React from 'react'
import './feature.css'
function Feature({title,text}) {
  return (
    <div className="feature-container">
    <div className="feature-title">
    <div/>
    <h2>{title}</h2>
    </div>
    <div className="feature-text">
    <p>{text}</p> 
    </div>
    </div>
  )
}

export default Feature