import React, { Component } from 'react';
import './Home.css';
import Header from './Header';

class Home extends Component {
  render() {
      const airCentralText = "Since 2001, Air Central has been a premier choice for DeSoto County's heating & air conditioning needs.";
      const familyOwnedText = "Air Central is a family owned and operated business that takes pride in quality work.";
    return (
      <div className="Home">
        <Header title="Air Central" headerPage="home" hideButton="" />
        <div className="content-container">
            <div className="row">
                <div className="col col-sm-6 col-lg-6">
                    {airCentralText}
                </div>
                <div className="col col-sm-6 col-lg-6">
                    icon will go here
                </div>
            </div>
            <div className="row">
                <div className="col col-sm-6 col-lg-6">
                    icon will go here
                </div>
                <div className="col col-sm-6 col-lg-6">
                    {familyOwnedText}
                </div>
            </div>
        </div>

      </div>
    );
  }
}

export default Home;
