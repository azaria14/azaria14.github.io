import React, {useState} from "react";
import "./Home.css";
import logo from "./img/logo.png";

function Home() {
  //fixed
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  //toggle
  const [show, setShow] = useState(true);
  return (
    <div className="Home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Service">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* toggle */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
          <div className="sideNavbar">
            <ul className="sidebar d__flex">
              <li className="sideNavbar">
                <a href="#home">Home</a>
              </li>
              <li className="sideNavbar">
                <a href="#about">About</a>
              </li>
              <li className="sideNavbar">
                <a href="#service">Service</a>
              </li>
              <li className="sideNavbar">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="sideNavbar">
                <a href="#blog">Blog</a>
              </li>
              <li className="sideNavbar">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          ) : null}
        </div>
        {/* Home content */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">Welcome To My Page</h1>
              <h2 className="home__text pz__10">Hi, I am Azaria Woldeyesus</h2>
              <h3 className="home__text sweet pz__10">Front-End Developer</h3>
              <h4 className="home__text pz__10">and Tech Expert.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
