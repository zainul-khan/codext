import React from 'react'
import office2 from "../images/office2.webp"
const About = () => {
  return (
    <>
    <h1 className="text-center aboutheading">We Provide you with the best service</h1>
     <div className="mainSectionabout">
     <div className="img-containerabout" >
        <img src={office2} alt="home" />
      </div>
      <div className="contentBox">
        <h1>It's helpful for building operating systems</h1>
      
        <li>Ultra fast and Secure
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident quaerat iusto labore quae deleniti! </p>
        </li>
        <li>Allows customization
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident quaerat iusto labore quae deleniti! </p>
        </li>
        <li>Smart Contract
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident quaerat iusto labore quae deleniti! </p>
        </li>
      
      </div>
      
    </div>

      
    <div className="myplans">
      <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
        <div className="card" >
        <div className="card-body">
  
    
        <div className="price">Clean Code</div>
    <p className="review-par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quibusdam ipsa eos ratione quod magni.</p>
  
  </div>
</div>
        </div>
        <div className="col-md-3 col-sm-12">
        <div className="card" >
  <div className="card-body">
 
    <div className="price">Data Analytics</div>
    <p className="review-par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quibusdam ipsa eos ratione quod magni.</p>
  
  </div>
</div>
        </div>
        <div className="col-md-3 col-sm-12">
        <div className="card" id="clip-path">
        <div className="card-body" >

    <div className="price">Fully secured</div>
    <p className="review-par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quibusdam ipsa eos ratione quod magni.</p>
  
  </div>
</div>
        </div>
        <div className="col-md-3 col-sm-12">
        <div className="card" >
        <div className="card-body">
    <div className="price">24/7 support</div>
    <p className="review-par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quibusdam ipsa eos ratione quod magni.</p>
  
  </div>
</div>
        </div>
        </div>
      </div>
    </div>

    
    </>
  )
}

export default About