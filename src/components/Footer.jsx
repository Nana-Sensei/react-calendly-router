import React from 'react';
import '../App.css';

const Footer = () => {
  return (

      <div className="footer">
        <div className="container align-items-center">
          <div className="row footer-row">
            <div className="footer-col">
              <h4><b>Easy</b> <br/><b>Ahead</b></h4>
              <p>We take the work of <br/>connecting with others <br/>so you can accomplish more.</p>
              <select className="form-select" id="language-select">
                <option><b>English</b></option>
                <option><b>French</b></option>
                <option><b>Spanish</b></option>
              </select>
            </div>

            <div className="footer-col">
              <h4><b>About</b></h4>
              <ul>
                <li><a href="#">About Calendly</a> </li>
                <li><a href="#">Contact Sales</a> </li>
                <li><a href="#">Newsroom</a> </li>
                <li><a href="#">Careers</a> </li>
                <li><a href="#">Security</a> </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4><b>Solutions</b></h4>
              <ul>
                <li><a href="#">Customer Success</a> </li>
                <li><a href="#">Sales</a> </li>
                <li><a href="#">Recruiting</a> </li>
                <li><a href="#">Education</a> </li>
                <li><a href="#">Marketing</a> </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4><b>Popular Features</b></h4>
              <ul>
                <li><a href="#">Embed Calendly</a> </li>
                <li><a href="#">Availability</a> </li>
                <li><a href="#">Sending Notificationsg</a></li>
                <li><a href="#">Using Calendly Mobile</a></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
  )
}

export default Footer