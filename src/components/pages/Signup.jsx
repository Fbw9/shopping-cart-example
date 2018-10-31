import React from "react";
import Pro from "../signup/Pro";
import Trial from "../signup/Trial";
import { Switch, Link, Route } from "react-router-dom";

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signupType: null
        }
    }

    render() {
        if (this.state.signupType === 'trial') {
            return (<Trial/>);
        }

        if (this.state.signupType === 'pro') {
            return (<Pro/>);
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