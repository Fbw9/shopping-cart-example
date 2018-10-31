import React from "react";
import Pro from "../signup/Pro";
import Trial from "../signup/Trial";
// import { Switch, Link, Route } from "react-router-dom";

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signupType: null
        }
    }

    resetSignupType = () => {
        this.setState({signupType: null})
    }

    render() {
        if (this.state.signupType === 'trial') {
            return (<Trial onReset={this.resetSignupType}/>);
        }

        if (this.state.signupType === 'pro') {
            return (<Pro onReset={this.resetSignupType}/>);
        }

        return (
          <div className="text-center">
                <div>
                    How do you want to signup?
                </div>
                <button onClick={() => { this.setState({signupType:'trial'}) }}>Trial for free</button>
                <button onClick={() => { this.setState({signupType:'pro'}) }}>Pro for 100$</button>
          </div>
        );
      }
}
export default Signup;