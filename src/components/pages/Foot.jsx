import React from 'react'
import '../styles/Footer.css';

function Footer() {

  const changeColor = (e) => {
    if(e.target.checked){
      document.body.style.background = "linear-gradient(45deg, #e7f0f88d, #e7f0f8, #add4f2e5, #add4f2c0, #f1f5ffb3, #f1f5ff), url('./assets/backgroundImg1.jpg')";
    }
    else{
      document.body.style.background = "linear-gradient(45deg, #80A6C38d, #547B96, #002D44e5, #29526C, #547B96, #80A6C38d), url('./assets/backgroundImg1.jpg')";
    };
  }

  return (
    <div className='footer-main-container' >
      <h4 className='closing-text'>
        &copy;  2023 - John Wesley
      </h4>

      <label className="switch">
        <input type="checkbox" onClick={(e)=>{ changeColor(e) }} />
        <span className='slider' ></span>
      </label>
    </div>
  )
}

export default Footer