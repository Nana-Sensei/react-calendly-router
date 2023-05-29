import React from 'react';
import '../App.css';
import HeroImage from '../Assets/hero.png';
import ebay from '../Assets/ebay.png';
import zenefits from '../Assets/zenefits.png';
import compass from '../Assets/compass.png';
import twilio from '../Assets/Twilio.png';
import dropbox from '../Assets/dropbox.png';
import Footer from './Footer';


const Home = () => {
  return (
    <>
      <div className="row hero-zone">

        <div className="col-md-6">
          <h1 className="hero-header">
            Easy <br /> scheduling <br />
            <span style={{ color: "#006bff" }}>ahead</span>
          </h1>
          <p className="hero-text">
            Calendly is your scheduling automation platform for <br /> eliminating the
            back-and-forth emails for  finding the <br />perfect time — and so much more.
          </p>

          <form className="form-inline sign-up">
            <input className="form-control sign-up-input" type="search" placeholder="Enter Your Email" aria-label="sign-up" />
            <button className="btn sign-up-btn" type="submit">Sign Up</button>
          </form>
          <p style={{ color: "grey", margin: "0px" }}><small>Create your free account. No credit card required</small></p>
        </div>

        <div className="col-md-6 hero-img">
          <img src={HeroImage}
            className="img-responsive"
            style={{ marginLeft: "10rem", width: "700px" }} />
        </div>

      </div>

      <div className="brands">
        <div className="container text-center">
          <div className="row justify-content-around">
            <p className="simplified">Simplified scheduling for more than<br />
              <span className="text-primary" style={{ color: "#006bff" }}>10,000,000</span> users worldwide.</p>

          </div>


          <div className="row justify-content-around brand-logos">
            <div className="col-md-2 brand-logo">
              <img src={ebay} className="img-responsive" style={{ width: "120px" }} />
            </div>

            <div className="col-md-2 brand-logo">
              <img src={zenefits} className="img-fluid" style={{ width: "120px" }} />
            </div>
            <div className="col-md-2 brand-logo">
              <img src={compass} className="img-fluid" style={{ width: "120px" }} />
            </div>
            <div className="col-md-2 brand-logo">
              <img src={twilio} className="img-fluid" style={{ width: "120px" }} />
            </div>
            <div className="col-md-2 brand-logo">
              <img src={dropbox} className="img-fluid" style={{ width: "120px" }} />
            </div>
          </div>
        </div>
      </div>


      <div className="container steps">
        <div className="row steps-col">
          <div className="col-md-4 steps">
            <h3>
              <b><span className="text-primary"
                style={{
                  position: "relative",
                  top: 0,
                  left: "-9px",
                  color:"#006bff",}}
                >1.</span>
              Create <br />Simple Rules </b>
          </h3>
          <p>Let Calendly know your <br /> availability preferences and <br />
            it'll do the work for you.</p>
        </div>

        <div className="col-md-4 steps">
          <h3>
            <b><span className="text-primary"
            style={{
              position: "relative",
              top: 0,
              left: "-9px",
              color:"#006bff",}}>2.</span>
              Share your <br />Link </b>
          </h3>
          <p>Send guests your <br />Calendly link or embed it<br /> on your website</p>
        </div>

        <div className="col-md-4 steps">
          <h3>
            <b><span className="text-primary"
            style={{
              position: "relative",
              top: 0,
              left: "-9px",
              color:"#006bff",}}
              >3.</span>
              Get booked</b>
          </h3>
          <p>They pick a time and <br /> the event is added to<br />
            your calendar.</p>
        </div>

      </div>
    </div >
    
    <Footer/>


            </>
            )
}

export default Home