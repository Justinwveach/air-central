import React, { Component } from 'react';
import './Services.css';
import Header from './Header';
import Service from '../components/Service';
import Testimonials from '../containers/Testimonials';
class Services extends Component {
  render() {

      let heatingServices = ["Furnace Replacement", "Service & Repair", "Preventative Maintenace", "Leak Detection", "Expandables"];
      let airServices = ["Air Conditioner Replacement", "Service and Repair", "Preventative Maintenance", "Coil Cleaning", "Leak Detection", "Condensate Drains", "Expandables"];
      let otherServices = ["Thermostats", "Duct Work", "Filters"];
      return (
          <div className="Services">
                <Header title="Heating & Air Services" tagline="We perform the most economical work on all Makes and Models" headerPage="services" hideButton="" />

                <section className="Services-blurb page-section">

                    <div className="row">
                            <h2>Replace</h2>
                            <p>
                            When it is time to replace a worn out or inefficient heating and cooling system, do not hesitate to contact Air Central Heating & Cooling.
                            New HVAC systems are much more efficient and can drastically reduce your energy bill.
                            </p>

                            <h2>Maintenance</h2>
                            <p>
                            Air conditioners and furnaces are made to last 12-15 years.  However, you can prolong the life of your units by getting annual checkups to ensure everything is operating at peak performance. And don&#39;t postpone necessary repairs as it can be detrimental to the life of your system. Remember, one hour response time or the service call is free.
                            </p>

                            <h2>Quality</h2>
                            <p>
                            Air Central Heating & Cooling technicians are fully trained in residential and commercial system repairs and installations. Plus, our vans are fully stocked with the most advanced equipment to help our technicians perform the necessary repairs quickly and efficiently. All labor is backed by our 1 year warranty so you can rest assured that you will receive quality work.
                            </p>
                    </div>
                </section>

                <section className="Services-container page-section">
                    <Service title="Heating" description={heatingServices} icon="heat" />
                    <Service title="Cooling" description={airServices} icon="cool" />
                    <Service title="Other" description={otherServices} icon="more-icon-white" />
                </section>
            </div>
        );
    }
}

export default Services;
