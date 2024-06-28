import React from 'react'
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide1 from '../assets/slide1.jpg';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';
import slide6 from '../assets/slide6.png';

export default function Projects() {
  return (
    <div>


<div className="album py-5 peach pb-5">
    <div className="container">
        
<div className="container py-5" id="featured-3">
  <h2 className="pb-4 border-bottom border-dark text-center display-5 fw-bold">My Projects</h2>
  <br />
  <p className="fs-5 mb-4 text-dark text-center mx-auto"> Here are some of my most favourite projects with standout features or functionalities in it.</p>
  </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-5">
        <div className="col">
          <div className="card shadow-lg">
         
            <img src={slide1} className="card-img-top " alt="Card Image"/>

            <div className="card-body">
              <h4 className="card-text fw-bold">Prime Pay</h4>
              <p className="card-text">Web Design / Usability Testing</p>

              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">link</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg">
          <img src={slide2} className="card-img-top p-flow " alt="Card Image"/>

            <div className="card-body">
            <h4 className="card-text fw-bold">Hydra-Vr</h4>
              <p className="card-text">UX Research / App Design </p>


              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">link</button>
                </div>
                <small className="text-muted">2 months</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg">
          <img src={slide3} className="card-img-top " alt="Card Image"/>

            <div className="card-body">
            <h4 className="card-text fw-bold">Finance Flow</h4>
              <p className="card-text">UX Research / Web Design </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">link</button>
                </div>
                <small className="text-muted">4 months</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg">
          <img src={slide5} className="card-img-top " alt="Card Image"/>

            <div className="card-body">
            <h4 className="card-text fw-bold">Travel App Design</h4>
              <p className="card-text">UX Research / Web Design </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">link</button>
                </div>
                <small className="text-muted">5 months</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg">
          <img src={slide4} className="card-img-top " alt="Card Image"/>


            <div className="card-body">
            <h4 className="card-text fw-bold">Personal Page</h4>
              <p className="card-text">Web Design / Usability Testing</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">link</button>
                </div>
                <small className="text-muted">6 months</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg">
          <img src={slide6} className="card-img-top " alt="Card Image"/>


            <div className="card-body">
            <h4 className="card-text fw-bold">Home Services Page</h4>
              <p className="card-text">Web Design / Marketing</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">link</button>
                </div>
                <small className="text-muted">11 months</small>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  </div>
      
    </div>
  )
}
