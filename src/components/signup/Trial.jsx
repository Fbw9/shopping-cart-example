import React from "react";
import ErrorMessage from "../shared/ErrorMessage";

class Trial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: true,
            email: '',
            password: '',
            password_again: '',
            errors: '',
        }
        this.inputChanged = this.inputChanged.bind(this);
    }

    inputChanged = (e) => {
        let obj = {};
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    }

    checkValid = () =>  {
        let disabled = true;
        let errors = '';
        let errorMessages = {
            email: 'Invalid email address.',
            password: 'Invalid password',
        };
        let passed = {
            'email': false,
            'password': false,
        }

        if (this.state.email) {
            if(/^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{1,70}(?:\.[a-z]{1,70})?$/.test(this.state.email)) {
                passed.email = true;
            } else {
                errors += errorMessages.email;
            }
        }

        // we need min. 6 chars
        if (this.state.password.length > 5 && 
            this.state.password === this.state.password_again
        ) {
            passed.password = true;
        }

        if (passed.email && passed.password) {
            disabled = false;
        }

        this.setState({
            disabled: disabled,
            errors: errors
        });
    }

    render() {
        return (
          <div className="text-center">
                Submit for Trial
                <br/>
                {this.state.errors && <ErrorMessage message={this.state.errors}/>}
                
                <div>
                    <div className="small">Email Address</div>
                    <input 
                        type="text" 
                        name="email" 
                        value={this.state.email} 
                        onBlur={this.checkValid}
                        onChange={this.inputChanged}
                    />
                </div>
                <div>
                    <div className="small">Password</div>
                    <input 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.inputChanged}
                    />
                </div>
                <div>
                    <div className="small">Repeat your password</div>
                    <input 
                        type="password" 
                        name="password_again" 
                        value={this.state.password_again} 
                        onChange={this.inputChanged}
                    />
                </div>
                <br/>
                <button onClick={this.props.onReset}>Back</button>
                <button disabled={this.state.disabled}>Submit</button>
                
          </div>
        );
      }
}
export default Trial;