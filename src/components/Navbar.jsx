import React from 'react'
import Logo from '../assets/Logo.png';
import Logo2 from '../assets/salogo.jpg';

export default function Navbar(props) {
  return (
    <>
  <div className='peach' >
      <nav className="navbar navbar-expand-lg bg-body-tertiary peach">
  <div className="container peach px-4 py-1">
    <a className="navbar-brand logo" href="#"><img src={Logo} alt="" /></a>
    {/* <a className="navbar-brand" href="#"><img src={Logo2} alt="" /></a> */}

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold ">
        <li className="nav-item">
          <a className="nav-link active active-page a-line" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link a-line" href="#">About Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle a-line" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Web Development</a></li>
            <li><a className="dropdown-item" href="#">Graphic Designing</a></li>
            <li><a className="dropdown-item" href="#">Content Writing</a></li>
            <li><a className="dropdown-item" href="#">Digital Marketing</a></li>
            {/* <li> <hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link a-line" href="#">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link a-line" href="#">FAQs</a>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn btn-outline-dark">Lets Talk</button>
      {/* </form> */}
    </div>
  </div>
</nav>
</div>
    </>
  )
}
