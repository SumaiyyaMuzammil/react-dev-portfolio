import React from 'react';
import myCard from './Card.js'
import Image1 from '../assets/Image1.png';
export default function Herosection(props) {
  return (
    <>
     
      {/* <h1>Welcome to {props.brand}</h1>
      <div classNameName='card'> */}
        {/* <div classNameName='pic'><img src="../logo192.png" alt="" /> </div>
        <h3>{props.productname}</h3>
        <button>Add to Cart</button> */}
        <div className='peach'>
        <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-4 pt-5">
      <div className="col-10 col-sm-8 col-lg-6 ">
        <img src={Image1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
       
      </div>
      <div className="col-lg-6 pb-5 ">
        <p className="lead fw-italic">Frontend Web Developer</p>
        <h1 className="display-5 fw-bold text-body-emphasis lh-3 mb-3">Hi There, I’m <br /> <span className='orange'> Sumaiya</span></h1>
        <p className="lead fw-normal">Welcome to my portfolio of captivating digital  
        experiences. Explore my work and let's create something extraordinary together..</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn  btn-dark btn-lg px-4 me-md-2">Protfolio</button>
          <button type="button" className="btn btn-outline-dark btn-lg px-3">Contact me</button>
        </div>  
      </div>
    </div>
        </div>
        </div>


      </>


  
  )
}

