import React, { Component } from 'react';
import Routes from './Routes';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { HideAt } from 'react-hide-show-utils';
import { ShowAt } from 'react-hide-show-utils';
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';
import './App.css';
import windowSize from 'react-window-size';
import * as constants from './Constants';
import CTABanner from './containers/CTABanner';
import Contact from './containers/Contact';

class App extends Component {
    render() {

        let containerCssClasses = 'App-content-container';

        console.log(this.props.windowWidth + '' + constants.MAX_MOBILE_WIDTH);
        if (this.props.windowWidth > constants.MAX_MOBILE_WIDTH) {
            //containerCssClasses += ' sidebar-content-offset';
        }

        var currentPath = window.location.pathname

        let ctaBanner;
        if (!currentPath.includes("Contact")) {
            ctaBanner = (
                <div>
                <CTABanner />
                </div>
            )
        }

     return (
         <div className="App">
            {/* <Navbar />*/}
            <div className={containerCssClasses}>
                <div className="App-content">
                    <div className="App-page-content">
                        <Routes />
                    </div>
                    {ctaBanner}

                    <Footer />
                </div>
                <Navbar />
            </div>
        </div>
     );
   }
}

export default windowSize(App);
