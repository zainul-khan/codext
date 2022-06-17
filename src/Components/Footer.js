import React from 'react'
import { NavLink } from "react-router-dom";
import "../Css/FootStyle.css"
const Footer = () => {
  return (
    <>
<footer className="text-center text-lg-start bg-light text-muted">

  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
  </section>
  

 
  <section className="">
    <div className="container text-center text-md-start mt-5">
    
      <div className="row mt-3">
     
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>
            <div className="logoContainer">Codexts</div>
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem odio ex accusamus suscipit non alias veritatis perspiciatis consectetur recusandae.
          </p>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-facebook-f"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
        </div>
     

     
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Resources
          </h6>
          <p>
            <NavLink to="/" className="text-reset">Services</NavLink>
          </p>
          <p>
            <NavLink to="/" className="text-reset">Pricing</NavLink>
          </p>
          <p>
            <NavLink to="/" className="text-reset">Testimonials</NavLink>
          </p>
          <p>
            <NavLink to="/" className="text-reset">Blog</NavLink>
          </p>
        </div>
     

     
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
 
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <NavLink to="/" className="text-reset">Terms of services</NavLink>
          </p>
          <p>
            <NavLink to="/" className="text-reset">Privacy Policy</NavLink>
          </p>
          <p>
            <NavLink to="/" className="text-reset">Cookie Policy</NavLink>
          </p>
          <p>
            <NavLink to="/" className="text-reset">Contact us</NavLink>
          </p>
        </div>
     

     
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Newsletter
          </h6>
          <p>Newletter</p>
          <p>
           
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis?
          </p>
          <p> + 01 234 567 88</p>
          <p>+ 01 234 567 89</p>
        </div>
     
      </div>
    
    </div>
  </section>
<div className="container"><hr /></div>

 
  <div className="text-center p-3">
    <div className="fw-bold text-light"> © 2021 Copyright: The Codext All rights reserved</div>
  </div>
 
</footer>

    </>
  )
}

export default Footer