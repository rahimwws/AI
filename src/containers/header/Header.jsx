import React from 'react';

import ai from '../../assets/ai.png';
import './header.css';

const Header = () =>{
  const handleClick = ()=>{
    const linker = document.querySelector('#Try')
    linker.click()
  }

  
  return(
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text" aria-label = 'Добро пожаловать. Я AI'> Добро пожаловать.<span class="typewriter nocaret">  </span></h1>
      <p>Здесь вы можете участвовать в реальных чат-беседах с искусственным интеллектом, разработанным специально для удовлетворения ваших потребностей.</p>
      <a href="https://bot-ai-lake.vercel.app/" id='Try'></a>
       <button onClick={handleClick}>Попробовать</button>

     
    </div>

    <div className="gpt3__header-image">
      <img src={ai}  alt = 'ai'/>
    </div>
  </div>
)} 

export default Header;
