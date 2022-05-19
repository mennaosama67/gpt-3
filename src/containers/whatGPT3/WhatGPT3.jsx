import React from 'react'
import './whatGPT3.css'
import Feature from './../../components/feature/Feature';
function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin section__padding" id='whatgpt'>
     <div className="gpt3__whatgpt3-head">
       <Feature title="What is GPT-3" />
       <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
     </div>
     <div className="gpt3__whatgpt3-content">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore The Library</p>
     </div>
     <div className="gpt3__whatgpt3-features">
     <div className="gpt3__whatgpt3-feature">
         <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
     </div>
     <div className="gpt3__whatgpt3-feature">
     <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
     </div>
     <div className="gpt3__whatgpt3-feature">
     <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/></div>
     </div>
    </div>
  )
}

export default WhatGPT3