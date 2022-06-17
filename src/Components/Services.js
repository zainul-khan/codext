import React from 'react'

const Services = () => {
  return (
    <>
  <h1 className="text-center aboutheading">Choose your best pricing plan service</h1>
  <h3 className="text-center">Add for Monthly / Yearly</h3>
  
    <div className="myplans">
      <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
        <div className="card" >
        <div className="card-body">
    <h5 className="card-title">Demo</h5><hr/>
    <div className="price">$5/mo</div>
    <p className="card-text">Easy Curricullum</p>
    <p className="card-text">Commercial licence</p>
    <p className="card-text">Hotline support</p>
    <p className="card-text">Single user licence</p>
    <btn className="btn btn-primary">TRY THIS PACKAGE</btn>
  </div>
</div>
        </div>
        <div className="col-md-3 col-sm-12">
        <div className="card" >
  <div className="card-body">
    <h5 className="card-title">Start-up</h5><hr/>
    <div className="price">$10/mo</div>
    <p className="card-text">Easy Curricullum</p>
    <p className="card-text">Commercial licence</p>
    <p className="card-text">Hotline support</p>
    <p className="card-text">Single user licence</p>
    <btn className="btn btn-primary">TRY THIS PACKAGE</btn>
  </div>
</div>
        </div>
        <div className="col-md-3 col-sm-12">
       
        <div className="card">
       
        <div className="card-body" >
    <h5 className="card-title">Classic</h5><hr/>
    <div className="price">$30/mo</div>
    <p className="card-text">Easy Curricullum</p>
    <p className="card-text">Commercial licence</p>
    <p className="card-text">Hotline support</p>
    <p className="card-text">Single user licence</p>
    <btn className="btn btn-primary">TRY THIS PACKAGE</btn>
  </div>
</div>
        </div>
        <div className="col-md-3 col-sm-12">
        <div className="card" >
        <div className="card-body">
    <h5 className="card-title">Premium</h5><hr/>
    <div className="price">$50/mo</div>
    <p className="card-text">Easy Curricullum</p>
    <p className="card-text">Commercial licence</p>
    <p className="card-text">Hotline support</p>
    <p className="card-text">Single user licence</p>
    <btn className="btn btn-primary">TRY THIS PACKAGE</btn>
  </div>
</div>
        </div>
        </div>
      </div>
    </div>
      </>
  )
}

export default Services