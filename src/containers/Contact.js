import React, { Component } from 'react';
import './Contact.css';
import TextField from '../components/TextField';
import Footer from './Footer';

class Contact extends Component {

    constructor(props) {
        super(props);
    }

  render() {
      let title = "Get In Touch";
      let subTitle;
      let classNames = "Contact page-section";
      if (window.location.pathname.includes("Contact")) {
          classNames = classNames + " standalone Contact--colored";
          title = "Contact Us";
          subTitle = (<p className="Contact-subtitle">Contact us to get a free quote or schedule an appointment.</p>)
      } else {
          classNames = classNames + " Contact--light";
      }
    return (
      <div className={classNames}>
          <h1>{title}</h1>
          {subTitle}
          <div className="Contact-formContainer">
              <form action="https://wdutayif35.execute-api.us-east-1.amazonaws.com/prod/sendMail">
              <div className="row">
                <div className="col col-sm-12 col-md-6">
                    <TextField fieldName="First Name" refName="txtFirstName" inputType="textfield" type="text" />
                </div>
                <div className="col col-sm-12 col-md-6">
                    <TextField fieldName="Last Name" refName="txtLastName" inputType="textfield" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col col-sm-12 col-md-6">
                    <TextField fieldName="Email" refName="txtEmail" inputType='textfield' textType="email" pattern="[^ @]*@[^ @]*" />
                </div>
                <div className="col col-sm-12 col-md-6">
                    <TextField fieldName="Phone Number" refName="txtPhoneNumber" inputType='textfield' textType="tel" pattern="\d{3}[\-]\d{3}[\-]\d{4}"/>
                </div>
              </div>
                <div className="row">
                    <div className="col col-sm-12">
                        <TextField fieldName="Comments" refName="txtComments" inputType='textarea'/>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-sm-12">
                        <input type="submit" value="Submit"/>
                    </div>
                </div>

                </form>
            </div>
      </div>
    );
  }
}

export default Contact;
