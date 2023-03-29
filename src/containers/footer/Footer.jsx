import React from "react";

import "./footer.css";

const Footer = () => {
  const handleClick = () => {
    const linker = document.querySelector("#Try");
    linker.click();
  };
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Вы хотите шагнуть в будущее раньше других?
        </h1>
      </div>
      <a href="https://bot-ai-lake.vercel.app/" id="Try"></a>
      <button className="gpt3__footer-btn" onClick={handleClick} type="button">
        Попробуйте прямо сейчас
      </button>
    </div>
  );
};

export default Footer;
