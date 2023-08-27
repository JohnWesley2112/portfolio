import React from 'react'
import "../styles/Footer.css"

function Footer() {
  const x = document.getElementsByClassName("mode");

  const changeColor = (e) => {
    if (e.target.checked) {
      document.body.style.background = "linear-gradient(45deg, #80A6C38d, #547B96, #002D44e5, #29526C, #547B96, #80A6C38d), url('./assets/backgroundImg1.jpg')";
      document.body.style.backgroundAttachment = "fixed";
      for (let i = 0; i < x.length; i++) {
        x[i].classList.add("color-mode-dark");
        x[i].classList.remove("color-mode-light")
      }
    }
    else {
      document.body.style.background = "linear-gradient(45deg, #e7f0f88d, #e7f0f8, #add4f2e5, #add4f2c0, #f1f5ffb3, #f1f5ff), url('./assets/backgroundImg1.jpg')";
      document.body.style.backgroundAttachment = "fixed";
      for (let i = 0; i < x.length; i++) {
        x[i].classList.add("color-mode-light");
        x[i].classList.remove("color-mode-dark")
      }
    };
  }
  return (
    <div className="footer-main-container">
      <p className='closing-text'>
        &copy; 2023 - John Wesley
      </p>
      <label className="switch">
        <input type="checkbox" onClick={(e) => { changeColor(e) }} />
        <span className='slider' ></span>
      </label>
    </div>
  )
}

export default Footer