import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Что такое AI"
        text="Это искусственный интеллект, который позволяет машинам решать сложные задачи, работая с данными, алгоритмами и учитывая среду. AI-системы могут учиться, адаптироваться, прогнозировать, решать проблемы, улучшая свою эффективность."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        Возможности за пределами вашего воображения
      </h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Возможность"
        text="Возможность автоматизации рутинных задач, что позволяет сэкономить время и ресурсы."
      />
      <Feature
        title="Скорость"
        text="Высокая скорость обработки данных, что позволяет улучшить результаты."
      />
      <Feature
        title="Точность"
        text="Высокий уровень точности, что помогает избежать ошибок, связанных с руководством."
      />
    </div>
  </div>
);

export default WhatGPT3;
