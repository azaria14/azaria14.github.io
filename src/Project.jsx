import React from "react";
import "./Project.css";
import project1 from './img/portfolio-1.jpg';
import project2 from './img/portfolio-2.jpg';
import project3 from './img/portfolio-3.jpg';
import project4 from './img/portfolio-4.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Projects</h1>
        <p className="heading p__color">
          There are many projects in the works at the moment,{" "}
        </p>
        <p className="heading p__color">
          they will be uploaded as soon as they are finished.
        </p>
      </div>
      <div className="container">
          <div className="row">

              <div className="col__3">
                  <div className="project__box pointer relative">
                      <div className="project__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={project1} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"></div>
                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">Todo List Online</h5>
                          <h4 className="project__text">You can save your Todo's and track them</h4>
                          <a href="https://aztodo.netlify.app/" className="project__btn" target="_blank">View Website</a>
                      </div>
                  </div>
              </div>
              

              <div className="col__3">
                  <div className="project__box pointer relative">
                      <div className="project__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={project2} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"></div>
                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">Portfolio Website</h5>
                          <h4 className="project__text">Portfolio website made with wordpress</h4>
                          <a href="https://azariawz.wixsite.com/websiteportfolio" className="project__btn" target="_blank">View Website</a>
                      </div>
                  </div>
              </div>

              <div className="col__3">
                  <div className="project__box pointer relative">
                      <div className="project__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={project3} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"></div>
                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">New Project</h5>
                          <h4 className="project__text">It will be Coming very Soon</h4>
                          <a href="#" className="project__btn">View Details</a>
                      </div>
                  </div>
              </div>

              <div className="col__3">
                  <div className="project__box pointer relative">
                      <div className="project__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={project4} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"></div>
                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">New Project</h5>
                          <h4 className="project__text">It will be Coming very Soon</h4>
                          <a href="#" className="project__btn">View Details</a>
                      </div>
                  </div>
              </div>

              {/* <div className="col__3">
                  <div className="project__box pointer relative">
                      <div className="project__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={project3} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"></div>
                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">New Project.</h5>
                          <h4 className="project__text">It will be Coming very Soon</h4>
                          <a href="#" className="project__btn">View Details</a>
                      </div>
                  </div>
              </div> */}

              {/* <div className="col__3">
                  <div className="project__box pointer relative">
                      <div className="project__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={project4} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"></div>
                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">New Project</h5>
                          <h4 className="project__text">It will be Coming very Soon</h4>
                          <a href="#" className="project__btn">View Details</a>
                      </div>
                  </div>
              </div> */}

              {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                  <button className="view__more pointer btn">View More</button>
              </div> */}
          </div>
      </div>


    </div>
  );
}

export default Project;
