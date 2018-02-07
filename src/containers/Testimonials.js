import React, { Component } from 'react';
import './Testimonials.css';

class Testimonials extends Component {
    render() {
        return (
            <section className="Testimonials page-section">
                <h1>Testimonials</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <h4>Bob White</h4>
                        <p>Air Central Heating & Cooling installed a new system in our home and it has saved us a lot of money!  The technician was very knowledgeable and answered all of our questions.  I would recommend them to anyone.</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <h4>Jeanne Jones</h4>
                        <p>Our old system was costing us a lot of money in utilities.  Air Central Heating & Cooling’s technician came out and told us about the best possible solution for our home.  And they installed the new systems the next day.  It is quieter then our old system and our electric bill had dropped significantly</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <h4>Gail Morris</h4>
                        <p>We were having issues with our existing system and the technicians came out and have it fixed in no time.  Thank You Air Central Heating & Cooling!</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
