import React, { Component } from 'react';
import './ThankYou.css';
import TextField from '../components/TextField';
import Footer from './Footer';

class ThankYou extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ThankYou page-section">
                <div className="ThankYou-content">
                    <h1>Thank You</h1>
                    <h3>We have received your email and will be in touch shortly.</h3>
                </div>
            </div>
        );
    }
}

export default ThankYou;
