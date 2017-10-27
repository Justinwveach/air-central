import React, { Component } from 'react';
import './Service.css';

class Service extends Component {

    render() {
        return (
            <div>
            <div className="Service">
                <div className="icon"></div>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
            </div>
        );
    }
}

export default Service;
