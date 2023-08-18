import React, { useEffect } from 'react'
import "../styles/Home.css"

// Animate On Scroll 
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  console.log("https://youtu.be/mMXC8XpaR7c");
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out"
    });
  }, [])
  return (
    <div className="home-main-container">
      <div className="my-image-container">
        <div className="my-image">
          {/* This is image container */}
        </div>
      </div>
      <div className="name-container" data-aos="fade-right">
        <h1 className="name">
          Hi, I'm John<br />
          Wesley
        </h1>
      </div>
      <div className="intro-container" data-aos="fade-left">
        <p className="intro">
          I'm a web designer and developer who dwells in Bangalore. My areas
          of interst include User-Interface Design. Having a background in
          Engineering, i'm passionate about connecting the dots between the
          design, goals and technology.
        </p>
        <br />
        <hr />
        <br />
      </div>
    </div>
  )
}

export default Home