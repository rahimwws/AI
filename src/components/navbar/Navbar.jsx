import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './../../assets/logoAI-removebg-preview.png'
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt = 'logo'/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Начало</a></p>
          <p><a href="#wgpt3">Что такое AI?</a></p>
          <p><a href="#blog">Open AI</a></p>
         
          
        </div>
      </div>
     
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Начало</a></p>
            <p><a href="#wgpt3">Что такое AI?</a></p>
            <p><a href="#blog">Open AI</a></p>
       
          </div>
      
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
