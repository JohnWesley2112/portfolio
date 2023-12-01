import { useRef } from 'react';
import './App.css';
import * as Unicons from '@iconscout/react-unicons'
import logo from "./images/JW-svg-logo.svg";

function App() {
  const openMenu = useRef(null);
  const closeMenu = useRef(null);
  const menu = useRef(null);

  function handleOpenMenu() {
    menu.current.style.display = "block";
    closeMenu.current.style.display = "inline-block";
    openMenu.current.style.display = "none";
  }

  function handleCloseMenu() {
    menu.current.style.display = "none";
    openMenu.current.style.display = "inline-block";
    closeMenu.current.style.display = "none";
  }

  return (
    <div className="App">

      <nav>
        <div className="container nav_container">
          <a href="index.html" className="nav_logo">
            <img src={logo} alt="" width="55" height="55" ></img>
          </a>
          <ul ref={menu} className="nav_menu">
            <li><a href="#home">HOME</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li>
              <a href="./images/John_Wesley - Copy (2).pdf" className="btn btn_primary"><Unicons.UilImport size="20" /> Download CV</a>
            </li>
          </ul>
          <button ref={openMenu} onClick={()=>{handleOpenMenu()}} id="open-menu-btn">
            <Unicons.UilBars />
          </button>
          <button ref={closeMenu} onClick={()=>{handleCloseMenu()}} id="close-menu-btn">
            <Unicons.UilMultiply />
          </button>
        </div>
      </nav>

      {/* <!-- ===========End of Navbar=========== --> */}

      <header id="home">



        <div className="container header_container">
          <div className="header_left">
            <div>
              <h3>Hello There! I'm</h3>
              <h1>John <br></br> Wesley</h1>
              <p className="lead">I'm a web designer and developer. My areas
                of interst include User-Interface Design. Having a background in
                Engineering, i'm passionate about connecting the dots between the
                design, goals and technology.</p>
              <a href="#contact" className="btn btn_primary btn-lg">Get in touch <Unicons.UilNavigator size="30" /></a>
            </div>
          </div>

          <div className="header_right">
            <div className="header_image">
              <img src={require("./images/MyPic_NoBG-purple-T.png")} alt=""></img>
            </div>
            <div className="header_right-bg">
              <ul className="header_socials">
                <li><a href=""><Unicons.UilLinkedin size="30" /></a></li>
                <li><a href=""><Unicons.UilGithub size="30" /></a></li>
                <li><a href=""><Unicons.UilEnvelope size="30" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- ===========End of Header=========== --> */}

      <section id="technologies">
        <div className="container technology_container">

          <details>
            <summary>
              <img src={require("./images/html (1).png")} alt=""></img>
            </summary>
            <p>
              HTML : <i>HTML is the standard markup language for creating web pages.</i>
            </p>
          </details>

          <details>
            <summary>
              <img src={require("./images/javascript (1).png")} alt=" "></img>
            </summary>
            <p>
              Javascript : <i>Programming language that I use for both front end & backend development.</i>
            </p>
          </details>

          <details>
            <summary>
              <img src={require("./images/react (1).png")} alt=""></img>
            </summary>
            <p>
              REACT JS : <i>Front end framework for single page web application development.</i>
            </p>
          </details>

          <details>
            <summary>
              <img src={require("./images/nodejs (1).png")} alt=""></img>
            </summary>
            <p>
              NODE JS : <i>For interacting with system and for backend development.</i>
            </p>
          </details>

          <details>
            <summary>
              <img src={require("./images/npm (1).png")} alt=""></img>
            </summary>
            <p>
              NPM : <i>Package manager developing node.js projects.</i>
            </p>
          </details>

          <details>
            <summary>
              <img src={require("./images/mongo-db (1).png")} alt=""></img>
            </summary>
            <p>
              MONGO DB : <i>DataBase for storing and processing information.</i>
            </p>
          </details>

          <details>
            <summary>
              <img src={require("./images/visual-studio-code (1).png")} alt=""></img>
            </summary>
            <p>
              VISUAL STUDIO : <i>Code editor used for web development.</i>
            </p>
          </details>
        </div>
      </section>

      {/* <!-- ===========End of Technologies=========== --> */}

      <section id="services">
        <div className="container services_container">
          <div className="services_content">
            <h1>Hire Me!</h1>
            <p className="">
              Welcome to my Website Building Service, where your online aspirations become reality. As a skilled developer,
              I
              specialize in creating stunning, functional, and fully customized websites that align perfectly with your
              unique
              needs and goals. From concept to completion, I bring your vision to life, ensuring seamless navigation,
              compelling design, and optimal user experience. Let's collaborate and build a captivating online presence that
              sets you apart from the competition.
            </p>
          </div>
          <div className="services_cards">
            <div className="frontend_service">
              <div className="services_image">
                <img src={require("./images/frontend.jpg")} alt=" "></img>
              </div>
              <div className="services_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, esse!
              </div>
            </div>
            <div className="fullstack_service">
              <div className="services_image">
                <img src={require("./images/fullstack.jpg")} alt=" "></img>
              </div>
              <div className="services_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, esse!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===========End of Services=========== --> */}

      <section id="contact">
        <div className="container contact_container">
          <div className="contact_left">
            <h2>Let's Talk</h2>
            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe velit exercitationem animi quae dolores dolor
              aspernatur blanditiis reiciendis.
            </p><br></br><br></br>
            <ul className="contact_socials">
              <li>
                <a href=""><Unicons.UilLinkedin size="30" /></a>
              </li>
              <li>
                <a href=""><Unicons.UilEnvelope size="30" /></a>
              </li>
              <li>
                <a href=""><Unicons.UilGithub size="30" /></a>
              </li>
            </ul>
          </div>
          <form action="https://formspree.io/f/mvojjbok" method="POST">
            <input type="text" name="name" placeholder="Your Name" id="" required></input><br></br>
            <input type="email" name="email" placeholder="Email" id="" required></input><br></br>
            <textarea type="text" name="message" rows="6" cols="" placeholder="Message" id="" ></textarea><br></br>
            <button type="submit" className="btn" value="">Submit <Unicons.UilAngleRightB size="20" /></button>
          </form>
        </div>
      </section>

      {/* <!-- ===========End of Contact=========== --> */}

      <footer>
        <small>Copyright &copy; John Wesley</small>
      </footer>
    </div>
  )
}

export default App;
