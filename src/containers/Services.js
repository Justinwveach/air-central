import React, { Component } from 'react';
import './Services.css';
import Header from './Header';
import Service from '../components/Service';
class Services extends Component {
  render() {

      return (
          <div className="Services">
                <Header title="Heating & Air Services" tagline="We can fix just about any problem." headerPage="services" hideButton="" />

                <section className="Services-blurb">

                    <p>
                    When it is time to replace a worn out or inefficient heating and cooling system, do not hesitate to contact Air Central Heating & Cooling.
                    Over the years, HVAC units have improved and become more efficient.
                    As energy costs continue to increase, doesn’t it make sense to replace your old unit with a new, cost-effective system?
                    </p>

                    <p>
                    Air Central Heating & Cooling technicians are fully trained in residential and commercial system repairs and installations.
                    Plus, our vans are fully stocked with the most advanced equipment to help our technicians perform the necessary repairs quickly and efficiently.
                    </p>

                    </section>

                <section className="Services-container">
                    <Service title="Heating" description="Furnace" />
                    <Service title="Cooling" description="AC" />
                    <Service title="Other" description="duct" />
                </section>
            </div>
        );
    }
}

export default Services;
