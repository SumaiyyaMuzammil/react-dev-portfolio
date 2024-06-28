import React from 'react'

export default function AboutMe() {
  return (
    <>
    <div className='bg-dark'>
    <div className="container py-5">
      <h1 className="display-5 fw-bold text-white text-center mb-4 py-5 border-bottom border-white ">About me</h1>
      <div className="col-lg-12 mx-auto">
        <p className="fs-5 mb-4 text-light text-center "> I'm a passionate frontend web developer on a mission to turn pixels into delightful user experiences. With a keen eye for design and a love for clean, efficient code, I craft digital experiences that not only look stunning but also function seamlessly. My journey in the world of web development started with a fascination for creating seamless user interfaces. Over the years, I've honed my skills in HTML, CSS, and JavaScript, constantly exploring the latest technologies to stay at the forefront of the ever-evolving web landscape.</p>
        

      

        
        <div id="trigger-element" className="d-grid gap-5 m-5 d-sm-flex justify-content-around text-align-center">
          <div>
            <h2 id="counter" className='text-white fw-bolder text-center fs-1 pink num-size'>15</h2>
            <p className='text-white fw-normal text-center '>Project done</p>
          </div>
          <div>
          <h2 id="counter1" className='text-white fw-bolder fs-1 text-center pink num-size'>2+</h2>
                      <p className='text-white fw-normal text-center '>Years of Experience</p>
          </div>
          <div>
          <h2 id="counter2" className='text-white fw-bolder text-center fs-1 pink num-size'>10</h2>
                      <p className='text-white fw-normal text-center '>Clients Served</p>
          </div>
        </div>
      </div>
    </div>
    </div>
      
    </>
  )
}
