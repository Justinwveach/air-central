import React, { Component } from 'react';
import './Services.css';
import Header from './Header';
import Service from '../components/Service';
import Testimonials from '../containers/Testimonials';
class Services extends Component {
  render() {

      let heatingServices = ["Preventative Maintenace", "Service and Repair", "Gas, Electric, and Heat Pumps", "Gas Piping", "Furnace Replacement"];
      let airServices = ["Air Conditioner Replacement", "Service and Repair", "Preventative Maintenance", "Coil Cleaning", "Leak Detection", "Condensate Drains", "Commercial Refrigeration and Cooling"];
      let otherServices = ["Commercial Heating, Cooling, and Refrigeration", "Free Estimates", "Custom Homes", "Thermostats", "Duct Work", "Filters", "Expandables", "Sheet Metal Fabrication", "Minor Electrical and Plumbing Repair", "Mold Remediation"];
      return (
          <div className="Services">
                <Header title="Heating & Air Services" tagline="We practice the most economical and reliable repair methods on all makes and models." headerPage="services" hideButton="" />

                <div className="page-section">
                <section className="Services-blurb Services-blurb-sm">

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

                <section className="Services-container">
                    <Service title="Heating" description={heatingServices} icon="heat" />
                    <Service title="Cooling" description={airServices} icon="cool" />
                    <Service title="Other" description={otherServices} icon="more-icon-white" />
                </section>
                </div>
            </div>
        );
    }
}

export default Services;
