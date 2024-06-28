import React, { useState } from 'react'

export default function Form() {

let [text , settext] =useState('');
let [usertext , setusertext] =useState('');

let [pintext , setpintext] =useState('');
let [userpintext , setuserpintext] =useState('');

let [arr, setarr]=useState([{email:"aun", password:"12345"}])


function checkemail (items){
  return items.email===usertext;
  }

function signup(e){
  e.preventDefault();
  settext(usertext);
  setpintext(userpintext);
setarr([...arr, {email:usertext, password:userpintext}])


const emailavailable = arr.some(checkemail)
if(emailavailable){
  alert("email has already been registered")
}
else{
  alert("you have signed up successfully")
}
return;
}



console.log(arr);
  return (
    <>
    <section className='peach mt-2'>
    <div className='container ' >
      <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-5 fw-bold  orange mb-5 pb-4 border-bottom border-dark">Get in Touch</h1>
        <p className="col-lg-10 fs-4 mb-5">Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.</p>

        
        <div class="row">
            
            <div class="col-md-12">
            <div class="contact-item d-flex align-item-center justify-content-start ">
                    <i class="fs-5 fas fa-phone"></i>
                   
                    <p className='mx-3'>+123456789</p>
                </div>
            </div>
            <div class="col-md-12">
            <div class="contact-item d-flex align-item-center justify-content-start ">
                    <i class=" fs-5 fas fa-envelope"></i>
                
                    <p className='mx-3'>sumaiya@gmail.com</p>
                </div>
            </div>

            <div class="col-md-12">
                <div class="contact-item d-flex align-item-center justify-content-start ">
                    <i class="fs-5 fas fa-home"></i>
                    
                    <p className='mx-3'>1234 Design Street,Creativeville, Webland,Imaginary State, 98765</p>
                </div>
            </div>
        </div>
  


      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form onSubmit={signup} className="p-4 p-md-5 border rounded-3 bg-body-tertiary shadow-lg ">
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Enter your name here" onChange={(e)=>setusertext(e.target.value)} required/>
            <label for="floatingInput">Name</label>
            {/* <h4>{text}</h4> */}
          </div>
          <div className="form-floating mb-3">
            <input type="tell" className="form-control" id="floatingInput" placeholder="Enter your name here" onChange={(e)=>setusertext(e.target.value)} required/>
            <label for="floatingInput">Contact no</label>
            {/* <h4>{text}</h4> */}
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setusertext(e.target.value)} required/>
            <label for="floatingInput">Email address</label>
            {/* <h4>{text}</h4> */}
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setuserpintext(e.target.value)} required/>
            <label for="floatingPassword">Password</label>
            {/* <h4>{pintext}</h4> */}

          </div>
          
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-dark" type="submit" onSubmit={signup} >Sign up</button>
          <hr className="my-4"/>
          <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>

      {
        arr.map(function(items, index){
return(
  <>
  {/* <div key={index}>
    <h1>{items.email}</h1>
    
    <h1>{items.password}</h1>
    
    </div>  */}
  </>
)

        })
      }

      </div>
    </div>
    </div>
    </section>
    </>
  )
}
