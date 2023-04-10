import React from 'react';
import './cta.css';

const CTA = () => {
  const handleClick = ()=>{
      const linker = document.querySelector('#Try')
      linker.click()
  }
  return(
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h3>Без никаких регистрации,все доступно,начни прямо сейчас.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <a href="https://chatai-rahimwws.vercel.app/" id='Try'></a>
      <button type="button" onClick={handleClick}>Начать</button>
    </div>
  </div>
)};

export default CTA;
