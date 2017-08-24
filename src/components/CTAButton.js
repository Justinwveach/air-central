import React, { Component } from 'react';
import './CTAButton.css';

class CTAButton extends Component {
    render() {
        const classes = "CTAButton " + this.props.visibility;
        return (
            <button className={classes}>
                {this.props.title}
            </button>
        );
    }
}

export default CTAButton;
