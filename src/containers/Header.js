import React, { Component } from 'react';
import './Header.css';
import CTAButton from '../components/CTAButton';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
    const classes = "Header-" + this.props.headerPage + " Header-background";

        return (
          <header className="Header">
            <div className="Header-container">
                <div className={classes}></div>

                <div className="Header-content">
                    <h1>{this.props.title}</h1>
                    <p className="Header-tagline">{this.props.tagline}</p>
                    <CTAButton title="Contact Us Today" visibility={this.props.hideButton} />
                    <a className="Header-tel" href="tel:6624490213">662-449-0213</a>
                </div>
            </div>
          </header>
        );
    }
}

export default Header;
