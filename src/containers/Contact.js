import React, { Component } from 'react';
import './Contact.css';
import TextField from '../components/TextField';
import Footer from './Footer';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import $ from 'jquery';
import { mask } from 'jquery-mask-plugin';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            comments: ''
        }
    }

    componentDidMount() {
        $("#phoneNumber").mask("999-999-9999");
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        try {
           await this.sendEmail({
             content: this.state.content
           });
           this.props.history.push('/ThankYou');
         } catch (e) {
           alert(e);
           this.setState({ isLoading: false });
         }
    }

    sendEmail = event => {
        event.preventDefault();

        $.ajaxSetup({
            contentType: 'application/json; charset=utf-8'
        });

        // TODO: setup stages for this api
        $.post('https://wdutayif35.execute-api.us-east-1.amazonaws.com/prod/sendMail',
            JSON.stringify({'firstName': this.state.firstName,
                            'lastName': this.state.lastName,
                               'email': this.state.email,
                         'phoneNumber': this.state.phoneNumber,
                            'comments': this.state.comments}),
            function(data, status){
                if (data.statusCode === 200) {
                    window.location = '/ThankYou';
                } else {
                    alert("Unable to send the message. If the problem persists, please give us a call. Thanks!");
                }
        });
    }

    render() {
        let title = 'Get In Touch';
        let subTitle;
        let classNames = 'Contact page-section';
        if (window.location.pathname.includes("Contact")) {
            classNames = classNames + ' standalone Contact--colored';
            title = 'Contact Us';
            subTitle = (<p className="Contact-subtitle">Contact us to get a free quote or schedule an appointment.</p>)
        } else {
            classNames = classNames + ' Contact--light';
        }

        return (
            <div className={classNames}>
                <h1>{title}</h1>
                {subTitle}
                <div className="Contact-formContainer">
                    <form onSubmit={this.sendEmail}>
                        <div className="row">
                            <div className="col col-sm-12 col-md-6">
                                <TextField id="firstName" onChange={this.handleChange} fieldName="First Name" refName="txtFirstName" inputType="textfield" type="text" />
                            </div>
                            <div className="col col-sm-12 col-md-6">
                                <TextField id="lastName" onChange={this.handleChange} fieldName="Last Name" refName="txtLastName" inputType="textfield" type="text" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm-12 col-md-6">
                                <TextField id="email" onChange={this.handleChange} fieldName="Email" refName="txtEmail" inputType='textfield' textType="email" pattern="[^ @]*@[^ @]*" />
                            </div>
                            <div className="col col-sm-12 col-md-6">
                                <TextField id="phoneNumber" onChange={this.handleChange} fieldName="Phone Number" refName="txtPhoneNumber" inputType='textfield' textType="tel" pattern="\d{3}[\-]\d{3}[\-]\d{4}"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm-12">
                                <TextField id="comments" onChange={this.handleChange} fieldName="Comments" refName="txtComments" inputType='textarea'/>
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
