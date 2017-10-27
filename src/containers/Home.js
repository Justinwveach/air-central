import React, { Component } from 'react';
import './Home.css';
import Header from './Header';

class Home extends Component {
  render() {
      const airCentralTitle = 'DeSoto County\'s Best';
      const airCentralText = "Since 2001, Air Central has been a premier choice for DeSoto County's heating & air conditioning needs.";
      const familyOwnedTitle = 'Family Owned & Operated';
      const familyOwnedText = "Air Central is a family owned and operated business that takes pride in quality work.";
    return (
      <div className="Home">
        <Header title="Air Central Heating & Cooling" tagline="DeSoto County's Premier Air Conditioning & Heating Service for over 20 years" headerPage="home" hideButton="" />
        <div className='main-container'>
            <div className="row-container flex-stack-sm">
                <div className="side">
                    <div className='blurb blurb-sm'>
                        <h2>{airCentralTitle}</h2>
                        {airCentralText}
                    </div>
                </div>
                <div className="side img-side">
                    <img className="img-icon img-icon-sm right" src={require('../images/tools-2.jpg')}/>
                </div>
            </div>
            <div className="row-container flex-stack-sm">
                <div className="side img-side">
                    <img className="img-icon left" src={require('../images/house.jpeg')}/>
                </div>
                <div className="side">
                    <div className='blurb blurb-sm'>
                        <h2>{familyOwnedTitle}</h2>
                        {familyOwnedText}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
