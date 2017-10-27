import React, { Component } from 'react';
import './CTAButton.css';

class CTAButton extends Component {

    constructor(props) {
        super(props);
        this.goToContactPage = this.goToContactPage.bind(this);
    }

    goToContactPage() {
        window.location = "/Contact";
    }

    render() {
        const classes = "CTAButton " + this.props.visibility;
        return (
            <button className={classes} onClick={this.goToContactPage}>
                {this.props.title}
            </button>
        );
    }
}

export default CTAButton;
