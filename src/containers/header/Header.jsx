import React from "react";
import "./header.css";
import people from '../../assets/Group 81.png'
import aiImg from '../../assets/Header Illustration.png'
function header() {
  return (
    <div className="header section__padding" id="home">
      <div className="header__content">
        <h1 className="gradient__text ">Let’s Build Something amazing with GPT-3<br/> OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="header__content__input">
             <input type="email" placeholder="Your Email Address" />
             <button>Get Started</button>
        </div>
        <div className="header__content__people">
         <img src={people} alt="people_img" />
         <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__img">
      <img src={aiImg} alt="ai" />
      </div>
    </div>
  );
}

export default header;
