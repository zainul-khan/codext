import React from 'react'
import home2 from "../images/home2.jpg"
const Home = () => {
  return (
    <>
    <div className="mainSection">
      <div className="contentBox">
        <h1>Codext one of <br/>the best system<br/> in SAAS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestias enim eveniet nisi sed possimus eius, error rem magni, molestiae nemo neque!</p>
        <button className="btn-primary" id="live">
          Try A Live Demo
        </button>       
      </div>
      <div className="img-container" >
        <img src={home2} alt="home" />
      </div>
    </div>
    </>
  )
}

export default Home