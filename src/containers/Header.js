import React, { Component } from 'react';
import './Header.css';
import CTAButton from '../components/CTAButton';

class Header extends Component {
  render() {
      const classes = "Header-" + this.props.headerPage + " Header-background";

    return (
      <div className="Header">
        <div className="Header-container">
            <div className={classes}></div>

            <div className="Header-content">
                <h1>{this.props.title}</h1>
                    <CTAButton title="Contact Us Today" visibility={this.props.hideButton} />
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
