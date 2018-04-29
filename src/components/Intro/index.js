import React, { Component } from 'react';
import { Button, Input, Label, Icon } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import './Intro.css';
import 'react-toastify/dist/ReactToastify.css';

class Intro extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorMessage: ''
    }
  }

  onClick = (e) => {
    const { phoneNumber } = this.props;
    const phoneRegEx = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
    const isPhoneNumber = phoneRegEx.test(phoneNumber)
    if(!isPhoneNumber){
      this.setState({
        errorMessage: 'Please enter valid Phone number'
      });
      toast.error("Please enter valid Phone number")
    }
  }
  render(){
    const { errorMessage } = this.state;
    const { onChange } = this.props;
    return(
      <div className="intro-ctn">

        <h1>Welcome!</h1>
        <p>
          This application is designed to help facilitate greater access to public
          assistance
        </p>
        <div>
          Please enter your phone number to get started
        </div>
          <Input
            type="tel"
            placeholder={"(415)555-5555"}
            icon={"phone"}
            onChange={onChange}
          />
          <ToastContainer autoClose={5000}/>
          <Button primary onClick={this.onClick}>Submit</Button>
      </div>
    )
  }
}

export default Intro;
