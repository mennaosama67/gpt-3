import React, {  useState } from 'react'
import './navbar.css'
import logo from '../../assets/GPT-3.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
function Navbar() {
  const [toggleMenu,setToggleMenu]=useState(false);
 
  return (
    <div className="navbar">
      <div className="navbar__logo">
       <img src={logo} alt="logo" />
       </div>
   
       <ul className="navbar-links__items">
       <li className="navbar-links__item"> <a href="#home">Home</a></li>
       <li className="navbar-links__item"> <a href="#gpt3">What is GPT?</a></li>
       <li className="navbar-links__item"> <a href="#possipility">Open AI</a></li>
       <li className="navbar-links__item"> <a href="#feature">Case Studies</a></li>
       <li className="navbar-links__item"> <a href="#blog">Library</a></li>
       </ul>
    
       <div className="navbar-sign">
       <p>Sign in</p>
       <button type="button">Sign up</button>
       </div>

       <div className="navbar__mobile-menu">
       {toggleMenu?
        <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
        :<RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
      }
      {toggleMenu&&
      <div className="navbar__mobile-menu__container scale-up-center">
      <ul className="navbar__mobile-menu__items">
      <li className="navbar__mobile-menu__item"> <a href="#home">Home</a></li>
      <li className="navbar__mobile-menu__item"> <a href="#gpt3">What is GPT?</a></li>
      <li className="navbar__mobile-menu__item"> <a href="#possipility">Open AI</a></li>
      <li className="navbar__mobile-menu__item"> <a href="#feature">Case Studies</a></li>
      <li className="navbar__mobile-menu__item"> <a href="#blog">Library</a></li>
      <div className="navbar__mobile-menu__sign">
      <p>Sign in</p>
      <button type="button">Sign up</button>
      </div>
      </ul>
      </div>
     }
    </div>
    </div>
  )
}

export default Navbar