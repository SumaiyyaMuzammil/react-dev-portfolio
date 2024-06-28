import React from 'react'


export default function Mycard(props) {
  return (
    <>
    {/* <div classNameName='service'>
     <div className="card text-center">
      <img src={props.image} className="card-img-top" alt="..."/>
    
        <h3 className="fs-4">{props.title}</h3>
        <p classNameName="card-text">{props.detail}</p>
        <a href="#" className="btn btn-dark">{props.call}</a>
     
      </div>
      </div> */}


{/* <div className="container mt-4">
    <div className="row"> */}
       
        <div className="col-md-3">
            <div className="card shadow">
                <img src={props.image} className="card-img-top " alt="Card Image"/>
                <div className="card-body">
                    <h5 className="card-title pb-2 border-bottom border-dark text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.detail}</p>
                    <div className="d-flex text-align-center justify-content-center">
                    <button type="button" className="btn btn-dark btn-sm">{props.call}</button>
                    </div>
                </div>
            </div>
        </div>
        {/* </div>
        </div> */}







      
    </>
  )
}
