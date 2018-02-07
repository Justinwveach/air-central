import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer page-section">
        <div className="Footer-rowContainer Footer-sideBySide flex-stack-sm">
            <div className=''>
              <h5>Address</h5>
              <ul>
                  <li>Air Central Heating & Cooling</li>
                  <li>P.O. Box 401</li>
                  <li>Southaven, MS 38671</li>
              </ul>
            </div>
            <div className=''>
                <h5>Contact</h5>
                <ul>
                    <li><a href="tel:6624490213">662-449-0213</a></li>
                    <li><a href="mailto:aircentralms@gmail.com?Subject=Inquiry" target="_top">AirCentralMS@gmail.com</a></li>
                </ul>
                </div>

                <div className=''>
                  <h5>Operations</h5>
                  <ul>
                      <li>Monday - Friday</li>
                      <li>8am - 5pm</li>
                      <li>Servicing North MS</li>
                  </ul>
                  </div>
              </div>
              <div className="row">
                <div id="footerBottom">
                    <img id="imgBBB" className="hidden-sm" src={require('../images/bbb.png')}/>
                    <span>&copy; 2018 Air Central All Rights Reserved</span>
                    <img id="imgLogo" className="hidden-sm" src={require('../images/air-central-logo-blue.png')} />
                </div>
              </div>
             </div>
    );
  }
}

export default Footer;
