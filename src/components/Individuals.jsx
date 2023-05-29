import React from 'react';
import '../App.css';
import Footer from './Footer';
import Genius from '../Assets/genius.png';
import Efficient from '../Assets/efficient.png';
import PA from '../Assets/PA.png';
import Find from '../Assets/Find-bg.jpg';

const Individuals = () => {
  return (
    <div>

      <div className="row hero-zone" style={{ marginTop: "40px" }}>
        <div className="col-md-6">
          <h1 style={{ fontSize: "60px" }}>
            The genius way <br />
            to work <span style={{ color: "#006bff" }}>better</span>
          </h1>
          <p style={{ fontSize: "20px" }}>
            Calendly makes it easy to work smarter when you're <br />
            working solo. Meetings, sessions, and appointments <br />
            become more efficient ways to achieve success and <br />
            accomplish goals.
          </p>
          <button
            style={{
              height: "50px",
              borderRadius: "50px",
              width: "170px",
              backgroundColor: "black",
              color: "white",
              border: "none",
            }}>
            Sign up for free
          </button>
        </div>
        <div className="col-md-6">
          <img
            src={Genius}
            className="img-responsive"
            style={{ height: "400px" }}
            alt="Calendly"
          />
        </div>
      </div>


      <div className="row hero-zone" style={{ marginTop: "120px" }}>
        <div className="col-md-6">
          <img
            src={Efficient}
            className="img-responsive"
            style={{ height: "350px" }}
            alt="Calendly"
          />
        </div>
        <div className="col-md-6" style={{ marginTop: "80px" }}>
          <p style={{ color: "grey" }}>A CURATED CALENDAR</p>
          <h1 style={{ fontWeight: "bold" }}>Book up efficiently</h1>
          <p style={{ fontSize: "20px" }}>
            When invitees select a meeting slot from your schedule, they <br />
            only see the times you're available, and only the length and <br />
            type of meeting you want to have. Your schedule fills up <br />
            efficiently, and everyone avoids excess email exchanges.
          </p>
        </div>
      </div>


      <div className="row hero-zone PA-zone" style={{ marginTop: "120px" }}>
        <div className="col-md-6" style={{ marginTop: "80px" }}>
          <p style={{ color: "grey" }}>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</p>
          <h1 style={{ fontWeight: "bold" }}>
            Work like you have a <br /> personal assistant
          </h1>
          <p style={{ fontSize: "20px" }}>
            Because Calendly automates administrative tasks like
            <br />
            sending reminder emails and follow-ups, you can focus on <br />
            the work that builds your business and brings customers <br />
            back for more
          </p>
        </div>

        <div className="col-md-6">
          <img src={PA} className="img-responsive" style={{ height: "350px" }} alt="Calendly" />
        </div>

      </div>





      <Footer />
    </div>
  )
}

export default Individuals