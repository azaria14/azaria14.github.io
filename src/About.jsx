import React from "react";
import "./About.css";
import aboutImg from "./img/aboutImg.jpg";

function About() {
  //up to top btn
  window.addEventListener("scroll", function() {
    const upToTop = this.document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle('active', window.scrollY >0)
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Information System graduate looking to apply my 
              knowledge  of  computer  systems  and  technology 
              and grow with  the company.  I have visions  that  I 
              want  to  achieve  that  can  be  done  through 
              hardwork  and  when  it  comes  to  hard  work  I’m 
              really a  focused determined person and  I can get 
              anything done that I put my mind up to.
              </p>
              <p className="about__text p__color">
              I have a good record of doing things on time in an efficient 
              manner.  I  am  an  optimist  that  doesn’t  give  up 
              easily  till  the  goal  that  i  set  is  reached.  I would 
              like  to  work  in  an  environment  that  is  rich  in 
              technology as it fascinates me and I would like to 
              put my skill into it and try to work efficiently.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1kc9H5Gzbf1hDsr2XAu_p8iPA1zwnh2EB/view?usp=sharing" target="_blank">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* up to top btn */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
