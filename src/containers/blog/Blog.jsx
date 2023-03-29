import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Многое происходит <br /> Мы пишем об этом в блоге.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <a href="https://openai.com/blog/chatgpt"><Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /></a>
        
      </div>
      <div className="gpt3__blog-container_groupB">
        <a href="https://openai.com/blog/march-20-chatgpt-outage"><Article imgUrl={blog02} date="Mar 24, 2023" text="March 20 ChatGPT outage: Here’s what happened" /></a>
        <a href="https://openai.com/blog/planning-for-agi-and-beyond"> <Article imgUrl={blog03} date="Feb 24,2023" text="Planning for AGI and beyond" /></a>
        <a href="https://openai.com/blog/introducing-chatgpt-and-whisper-apis"> <Article imgUrl={blog04} date="Mar 1, 2023" text="Introducing ChatGPT and  Whisper APIs" /></a>
        <a href="https://openai.com/blog/chatgpt-plugins"><Article imgUrl={blog05} date="Mar 23,2023" text="ChatGPT plugins" /></a>
      </div>
    </div>
  </div>
);

export default Blog;
