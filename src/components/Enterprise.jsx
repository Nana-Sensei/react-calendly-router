import React from 'react';
import Footer from './Footer';
import bay from '../Assets/bay.png';
import zene from '../Assets/zene.png'
import comp from '../Assets/comp.png';
import twi from '../Assets/Twi.png';
import drop from '../Assets/drop.png';
import MidPanel from '../Assets/MidPanel.jpg';
import icon1 from '../Assets/icon1.png';
import icon2 from '../Assets/icon2.png';
import icon3 from '../Assets/icon3.png';

const Enterprise = () => {
  return (
    <div>

      <div className="container way-more">
        <h3 style={{ fontSize: "50px", lineHeight: "4rem" }} className="display-4 text-center head-text"><strong><b><span className="text-primary" style={{ color: "#006bff" }}>
          Way more</span> than a <br /> scheduling link</b></strong>
        </h3>
        <p className="text-center">Standardize on the #1 scheduling platform and
          deliver the power <br />of Calendly across your entire organization.
        </p>

        <div className="text-center">
          <button style={{
            color: "white", backgroundColor: "black", padding: "10px",
            fontSize: "15px", borderRadius: "20px", border: "none"
          }} className="btn contact-sales-btn" type="submit">Contact Sales</button>
        </div>
      </div>


      <div className="container" style={{
        display: "flex",
        alignItems: "center", justifyContent: "center"
      }}>
        <div
          className="row mid-panel"
          style={{
            backgroundImage: `url(${MidPanel})`,
            height: "300px", width: "1200px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            marginTop: "50px"
          }}>
          <div className="row">
            <div
              className="col-md-4 mid-text"
              style={{ color: "white", margin: "0px" }}>
              <h4>
                Trusted by more than 50,000 of the <br /> world's leading organizations
              </h4>
            </div>
          </div>

          <div className="row" style={{
            display: "flex",
            alignItems: "center", justifyContent: "center"
          }}>
            <div className="col-md-2">
              <img src={bay} className="mono-logo" alt="" />
            </div>
            <div className="col-md-2">
              <img src={zene} className="mono-logo" alt="" />
            </div>
            <div className="col-md-2">
              <img src={comp} className="mono-logo" alt="" />
            </div>
            <div className="col-md-2">
              <img src={twi} className="mono-logo" alt="" />
            </div>
            <div className="col-md-2">
              <img src={drop} className="mono-logo" alt="" />
            </div>

          </div>
        </div>
      </div>


      <div className="container">
        <div className="row" style={{
          display: "flex",
          alignItems: "center", justifyContent: "center", marginTop: "70px"
        }}>
          <div className="col-md-4 icon-card">
            <div className="card icon-cards" style={{ width: "17rem", height: "480px", margingLeft: "60px", marginRight: "60px" }}>
              <h5 className="fw-bold text-primary" style={{ fontSize: "20px", color: "#006bff" }}><b>Sales</b></h5>
              <div className="mx-auto"><img className="card-img" src={icon1} width="200px" /></div>
              <div className="card-body">
                <p className="card-text">
                  Convert more leads and prospects
                  into meetings and revenue. Easily
                  book demos and customer calls
                  without the back and forth.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 icon-card">
            <div className="card icon-cards" style={{ width: "17rem", height: "480px", margingLeft: "60px", marginRight: "60px" }}>
              <h5 className="fw-bold text-primary" style={{ fontSize: "20px", color: "#006bff" }}><b>Customer Success</b></h5>
              <div className="mx-auto"><img className="card-img" src={icon2} width="200px" /></div>
              <div className="card-body">
                <p className="card-text">
                  Convert more leads and prospects
                  into meetings and revenue. Easily
                  book demos and customer calls
                  without the back and forth.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 icon-card">
            <div className="card icon-cards" style={{ width: "17rem", height: "480px", margingLeft: "60px", marginRight: "60px" }}>
              <h5 className="fw-bold text-primary" style={{ fontSize: "20px", color: "#006bff" }}><b>Recruiting</b></h5>
              <div className="mx-auto"><img className="card-img" src={icon3} width="200px" /></div>
              <div className="card-body">
                <p className="card-text">
                  Convert more leads and prospects
                  into meetings and revenue. Easily
                  book demos and customer calls
                  without the back and forth.
                </p>
              </div>
            </div>
          </div>

        </div>

        <button className="btn learn-sales-btn" type="submit" 
        style={{color:"white", 
        backgroundColor:"black", 
        borderRadius:"20px", fontSize:"15px", marginLeft:"700px", marginTop:"50px", padding:"10px"
      }}>Learn more</button>
      </div>


      <Footer />
    </div>
  )
}

export default Enterprise