import React, { Component } from 'react';
import './Services.css';
import Header from './Header';
import Service from '../components/Service';
class Services extends Component {
  render() {
    return (
        <div className="Services">
          <Header title="Heating & Air Services" tagline="We can fix just about any problem." headerPage="services" hideButton="" />

          <div className="services-container">
            <Service title="Heating" description="Furnace" />
            <Service title="Cooling" description="AC" />
            <Service title="Duct Work" description="duct" />
          </div>
        </div>
    );
  }
}

export default Services;
