import React, { Component } from 'react';
import './CTABanner.css';

class CTABanner extends Component {

  render() {
    return (
      <div className="CTABanner page-section">
        <h3>Ready to restore the comfort of your home?</h3>
        <p>Call or email us today to receive $75 off your first visit</p>
        <a href="tel:6624490214" className="CTABanner-telephone">662-449-0213</a>
      </div>
    );
  }
}

export default CTABanner;
