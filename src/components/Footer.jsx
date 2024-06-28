import React from 'react'
import Logo from '../assets/foot-logo.png';
import img1 from '../assets/Facebook.png';
import img2 from '../assets/Instagram.png';
import img3 from '../assets/Twitter.png';
import img4 from '../assets/Dribbble.png';
export default function Footer(props) {
  return (
<>
<footer className="py-5 bg-dark text-white">
    <ul className="nav container justify-content-center  py-3 mb-3">
     
      <li className="nav-item"><a href="#" className="text-white nav-link px-2 a-line ">About</a></li>
      <li className="nav-item"><a href="#" className="text-white nav-link px-2 a-line">Services</a></li>
      <a className="navbar-brand logo mx-4" href="#"><img src={Logo} alt="" /></a>
      <li className="nav-item"><a href="#" className="text-white nav-link px-2 a-line">Projects</a></li>
      <li className="nav-item"><a href="#" className="text-white nav-link px-2 a-line">FAQs</a></li>
     
    </ul>
    
    <div class="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="text-center text-white">© 2023 Company, Inc</p>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#"><img src={img1} alt="facebook"/> </a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><img src={img2} alt="facebook"/></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><img src={img3} alt="facebook"/></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><img src={img4} alt="facebook"/> </a></li>
    </ul>
  
    </div>
  </footer>
</>

    // <div>
    //   <h4>{props.brand}</h4>
    // </div>
  )
}
