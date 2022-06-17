import React from 'react'
import dp from "../images/dp.webp"
import news1 from "../images/news1.avif"

const Contact = () => {
  return (
    <>
      <h1 className="text-center">
        Let's see our User's Review
      </h1>
      <div className="myplans">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="card" >
                <div className="card-body">

                  <p className="review-par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quibusdam ipsa eos ratione quod magni.</p>
                <div className="review-row">
                  <div className="img-con">
                      <img src={dp} alt="" className="dp"/>
                  </div>
                  <div className="name-con">
                    <p  className="dpName">Peter Parker</p>
                    <p>Specialist</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="card" >
                <div className="card-body">
                  <p className="review-par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quibusdam ipsa eos ratione quod magni.</p>
                  <div className="review-row">
                  <div className="img-con">
                      <img src={dp} alt="" className="dp"/>
                  </div>
                  <div className="name-con">
                    <p  className="dpName">Sean Parker</p>
                    <p>Specialist</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="card" >
                <div className="card-body" >
                  <p className="review-par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quibusdam ipsa eos ratione quod magni.</p>
                  <div className="review-row">
                  <div className="img-con">
                      <img src={dp} alt="" className="dp"/>
                  </div>
                  <div className="name-con">
                    <p  className="dpName">David Wayne</p>
                    <p>Specialist</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="card" >
                <div className="card-body">
                  <p className="review-par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quibusdam ipsa eos ratione quod magni.</p>
                  <div className="review-row">
                  <div className="img-con">
                      <img src={dp} alt="" className="dp"/>
                  </div>
                  <div className="name-con">
                    <p  className="dpName">Bruce Wayne</p>
                    <p>Specialist</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="insight-news">
    <h1 className="text-center">
       Latest Insights news
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <div class="news-card">
  <img class="card-img-top" src={news1} alt="img"/>
  <div class="card-body">
    <h5 class="price">Change in corporate world</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <btn class="btn btn-primary">Go somewhere</btn>
  </div>
</div>
          </div>
          <div className="col-md-6">
          <div class="news-card">
  <img class="card-img-top" src={news1} alt="img2"/>
  <div class="card-body">
    <h5 class="price">Change in corporate world</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <btn class="btn btn-primary">Go somewhere</btn>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact