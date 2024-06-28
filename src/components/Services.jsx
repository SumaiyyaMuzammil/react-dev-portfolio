import React from 'react';
import Mycard from './Mycard';
import cardDetail from './Card';



export default function Services() {
  return (
    <>
 <section className='white-bg'>
<div className="container py-5" id="featured-3">
  <h2 className="pb-4 display-5 fw-bold border-bottom border-dark text-center">Services</h2>
  {/* <div className=" row justify-content-evenly g-2 py-5 row-cols-1 row-cols-lg-3">
    </div> */}
    <br />
    <p className="lead fw-normal text-center">We are providing various aspects and services to help you create, maintain, and improve your website.</p>

      
    </div>
    <div className="container mt-2  pb-5">
    <div className="row mb-3">
    {cardDetail.map(function(item){
      return(
        <>
       
            <Mycard image={item.img} 
             title={item.productname} 
             detail={item.productdetail} 
             call={item.btn}/>
            
        </>
      )
    })
    

    }
    </div>
    </div>
    </section>




    </>
  )
}
