import React, { Component } from 'react';
import './Home.css';
import Header from './Header';

class Home extends Component {
  render() {
      const airCentralTitle = 'DeSoto County\'s Best';
      const airCentralText = "Since 2001, Air Central has been a premier choice for heating & air conditioning needs in DeSoto County and surrounding areas. We perform a wide variety of services ranging from yearly checkups to complete system replacements. We stand behind our work and offer 1 year warranty on all services!";
      const familyOwnedTitle = 'Family Owned & Operated';
      const familyOwnedText = "Air Central is a family owned and operated business that takes pride in quality work. We understand the importance of a home that is comfortable and welcoming, and we will ensure your home reaches its full potential.";
    return (
      <div className="Home">
        <Header title="Air Central Heating & Cooling" tagline="North Mississippi's Premier Air Conditioning & Heating Service for over 20 years" headerPage="home" hideButton="" />
        <div className="Home-mainContainer">
            <div className="Home-rowContainer flex-stack-sm">
                <div className="Home-side">
                    <div className='Home-blurb Home-blurb-sm'>
                        <h1>{airCentralTitle}</h1>
                        <p>{airCentralText}</p>
                    </div>
                </div>
                <div className="Home-side Home-imgSide">
                    <img className="Home-icon Home-icon-sm Home-right" src={require('../images/tools-2.jpg')}/>
                </div>
            </div>
            <div className="Home-rowContainer flex-stack-sm">
                <div className="Home-side Home-imgSide">
                    <img className="Home-icon Home-icon-sm Home-left" src={require('../images/house.jpeg')}/>
                </div>
                <div className="Home-side">
                    <div className="Home-blurb Home-blurb-sm">
                        <h1>{familyOwnedTitle}</h1>
                        <p>{familyOwnedText}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
