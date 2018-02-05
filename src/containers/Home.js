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
        <div className="Home-mainContainer">
            <div className="Home-rowContainer flex-stack-sm">
                <div className="Home-side">
                    <div className='Home-blurb Home-blurb-sm'>
                        <h2>{airCentralTitle}</h2>
                        {airCentralText}
                    </div>
                </div>
                <div className="Home-side Home-imgSide">
                    <img className="Home-icon Home-icon-sm Home-right" src={require('../images/tools-2.jpg')}/>
                </div>
            </div>
            <div className="Home-rowContainer flex-stack-sm">
                <div className="Home-side Home-imgSide">
                    <img className="Home-icon Home-left" src={require('../images/house.jpeg')}/>
                </div>
                <div className="Home-side">
                    <div className="Home-blurb Home-blurb-sm">
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
