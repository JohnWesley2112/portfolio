import React from 'react'
import "../styles/About.css";

import NextButton from "../../assets/nextButton.png";
import { NavLink } from 'react-router-dom';
// Logo-Imoprts
import cssIcon from '../../assets/logos/css-icon.svg';
import reactIcon from '../../assets/logos/react-js-icon.svg';
import htmlIcon from '../../assets/logos/html-icon.svg';
import githubIcon from '../../assets/logos/github-icon.svg';
import mongoDbIcon from '../../assets/logos/mongodb-icon.svg';
import jsIcon from '../../assets/logos/javascript-programming-language-icon.svg';
import nodeJsIcon from '../../assets/logos/node-js-icon.svg';
import expressJsIcon from '../../assets/logos/express-js-icon.svg';
import socketIoIcon from '../../assets/logos/socket-io-icon.svg';


function About() {

  return (
    <div className='about-main-container' >

      {/* Niche Container */}
      <div className='niche-grid-container' >
        <h2 className="my-niche" data-aos="fade-in">
          My Tech Niche

        </h2>
        <br />
        <section className="animated-grid">
          <div className="card" style={{ backgroundImage: `url(${cssIcon})` }}>
          </div>
          <div className="card" style={{ backgroundImage: `url(${reactIcon})` }}>
          </div>
          <div className="card" style={{ backgroundImage: `url(${htmlIcon})` }}>
          </div>
          <div className="card" style={{ backgroundImage: `url(${githubIcon})` }}>
          </div>
          <div className="card" style={{ backgroundImage: `url(${mongoDbIcon})` }}>
          </div>
          <div className="card" style={{ backgroundImage: `url(${jsIcon})` }}>
          </div>
          <div className="card card-wide" style={{ backgroundImage: `url(${nodeJsIcon})` }}>
          </div>
          <div className="card" style={{ backgroundImage: `url(${expressJsIcon})` }}>
          </div>
          <div className="card" style={{ backgroundImage: `url(${socketIoIcon})` }}>
          </div>
        </section>
      </div>

      <div className="p-tags">

        <div className="about-snippet-container">
          <h2 style={{ color: "lightslategrey" }} >A small snippet about me</h2>
          <br />
          <p>
            <strong>I studied Civil Engineering at
              <a href="https://pdacek.ac.in/">P.D.A. College of Engineering, Kalaburgi</a>
              in the year 2016-2019. I have a Bachelors in Civil Engineering.</strong>
          </p>

          <p>
            Post which I joined Apprentiship Program at <a href="https://huttigold.karnataka.gov.in/english">Hutti Gold
              Mines Co. Ltd.</a> in the year 2020-2022.
          </p>
          <br />
          <p>
            Then later on I moved here to Bangalore to learn and understand computer programming language.
            This is where the transition in my career took place, and saw how design thinking can solve real-world
            problems like sustainability. Coming from an Engineering background I'm passionate about connecting the dots
            between business goals, technology, design, and user needs.
          </p>
        </div>

        {/* <div className="about-snippet-container two">

          <h2 style={{ color: "lightslategrey" }} >A small snippet about me</h2>
          <br />

          <p>"I am a full stack developer with experience in building web applications using JavaScript
            and React. I have worked on several projects, including ecommerce platforms, social media websites,
            chatbots, and more."</p>
        </div> */}



      </div>

      <div className="next-button-container">
        <NavLink to={'/projects'} >
          <img id='next-button-image' src={NextButton} alt="Next" />
        </NavLink>
      </div>
    </div>
  )
}

export default About