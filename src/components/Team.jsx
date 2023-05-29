import React from 'react';
import '../App.css';
import { CCard, CCardImage, CCardBody, CCardText, CCardTitle, CButton } from '@coreui/react';
import Footer from './Footer';
import T1 from '../Assets/Team-1.png';
import T2 from '../Assets/Team-2.png';
import Sales from '../Assets/Sales.jpg';
import Recruit from '../Assets/recruit.jpg';
import Edu from '../Assets/Edu.jpg';
import CS from '../Assets/CS.jpg';

const Team = () => {
  return (
    <div className="container">
      <div className="row hero-zone">

        <div col-md-6>
          <h3 className="display-4 fw-bold"><strong><b className="ht-1">Power up</b> <b>your</b>
            <br /><b className="ahead">teams</b></strong>
          </h3>
          <p className="hero-text">Whether your team’s performance is measured by <br />sales revenue,
            recruiting pipeline, or customer retention, <br /> scheduling automation enables your team
            to hit goals faster.</p>

          <form className="form-inline my-2 my-lg-0 sign-up">
            <button className="btn start-btn btn-outline-success" type="submit">Start for Free</button>
            <button className="btn contact-btn btn-outline-success" type="submit">Contact Sales</button>
          </form>
        </div>

        <div className="col-md-6 hero-img">
          <img src={T1} width="550px" />
        </div>

      </div >

      <br />
      <h3 className="mid-text"><strong><b>Streamline tasks, extend <br /> team reach</b></strong></h3>
      <br />

      <div className="container">
        <div className="row align-items-center hero-zone">
          <div className="col-md-6">
            <img src={T2} width="550px" className="img-fluid" />
          </div>

          <div className="col-md-6 team-text">
            <p className="create primary-text"><small>AUTOMATED ASSIGNMENT</small></p>
            <h2><b className="Tm-1">Control how your team <br />gets booked</b></h2>
            <p>With Calendly, you can offer sessions that are a a few minutes <br /> or a few hours, for one invitee
              or a group. Automated round-robin,<br /> first-available, or geography-based assignments let you easily <br />
              divvy up meetings in any way that works for your team members.</p>
          </div>

        </div>
      </div>

      <div className="mid-section" style={{ textAlign: "center" }}>
        <p className="create primary-text text-center"><small><b>SOLUTIONS</b></small></p>
        <h2 className="display-5 text-center end-text" style={{ fontSize: "2rem" }}><b>The right Calendly for the work you do</b></h2>
      </div>

      <section>
        <div className="row C-Cards">
          <div className="col-md-3 card-item">
            <div
              className="thumbnail"
              style={{
                height: "350px",
                border: "0.5px inset rgb(231, 237, 246)", margin:"0px"
              }}>
              <img src={Sales} alt="Sales" style={{ height: "180px" }} />
              <div className="caption  c-card">
                <h3 style={{ color: "black" }}>Sales</h3>
                <p style={{ fontSize: "15px", margin:"0px" }}>Get to your best leads faster.</p>
                <p style={{color: "#1363df", margin:"0px", paddingTop: "5px",}}>
                  Learn more &gt;
                </p>
              </div>
            </div>
        </div>

        <div className="col-md-3 card-item">
            <div
              className="thumbnail"
              style={{
                height: "350px",
                margin:"0px"
              }}>
              <img src={Recruit} alt="Sales" style={{ height: "180px" }} />
              <div className="caption  c-card">
                <h3 style={{ color: "black" }}>Recruiting</h3>
                <p style={{ fontSize: "15px", margin:"0px" }}>Less emailing, more closing.</p>
                <p style={{color: "#1363df", margin:"0px", paddingTop: "5px",}}>
                  Learn more &gt;
                </p>
              </div>
            </div>
        </div>

        <div className="col-md-3 card-item">
            <div
              className="thumbnail"
              style={{
                height: "350px",
                margin:"0px"
              }}>
              <img src={Edu} alt="Sales" style={{ height: "180px" }} />
              <div className="caption  c-card">
                <h3 style={{ color: "black" }}>Education</h3>
                <p style={{ fontSize: "15px", margin:"0px" }}>Boost student success</p>
                <p style={{color: "#1363df", margin:"0px", paddingTop: "5px",}}>
                  Learn more &gt;
                </p>
              </div>
            </div>
        </div>

        <div className="col-md-3 card-item">
            <div
              className="thumbnail"
              style={{
                height: "350px",
                margin:"0px"
              }}>
              <img src={CS} alt="Sales" style={{ height: "180px" }} />
              <div className="caption  c-card">
                <h3 style={{ color: "black" }}>Customer Success</h3>
                <p style={{ fontSize: "15px", margin:"0px" }}>Connect with customers <br/> when it matters.</p>
                <p style={{color: "#1363df", margin:"0px", paddingTop: "5px",}}>
                  Learn more &gt;
                </p>
              </div>
            </div>
        </div>


        </div>
      </section>









      <Footer />
    </div >
  )
}

export default Team;