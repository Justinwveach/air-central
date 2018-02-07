import React, { Component } from 'react';
import './Service.css';

class Service extends Component {

    render() {

        var list = this.props.description.map(function(value, i) {
            return <li key={i}>{value}</li>;
        });

        function getImg(name) {
            switch (name) {
                case 'cool':
                    return require('../images/cooling-icon-white.png');
                    break;
                case 'heat':
                    return require('../images/heat-icon-white.png');
                    break;
                default:
                    return require('../images/more-icon-white.png');

            }
        }

        return (
            <div>
            <div className="Service">
                <div className="Service-icon">
                    <img src={getImg(this.props.icon)} />
                </div>
                <h4>{this.props.title}</h4>
                <ul>{list}</ul>
            </div>
            </div>
        );
    }
}

export default Service;
