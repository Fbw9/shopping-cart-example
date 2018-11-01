import React from "react";
import ErrorMessage from '../shared/ErrorMessage';

class Trial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // disabled: true,
            email: '',
            password: false,
            errors: '', //'We have some errors'
        }
    }

    inputChanged = (e) => {
        let obj = {};
        obj[e.target.name] = e.target.value;
        this.setState(obj, this.checkValid);
    };

    checkValid = () => {
        // let disabled = true;
        let valid = false;
        let errors = '';
        let errorMessage = {
            email: 'Invalid email address.',
            password: 'Invalid password.'
        };
        let passed = {
            'email': false,
            'password': true,
            'password_again': true
        };

        if (this.state.email) {

            if (/^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(this.state.email)) {
                passed.email = true;
            } else {
                errors += errorMessage.email;
            }
        }


        if (this.state.password.length > 5 &&
            this.state.password.length === this.state.password_again) {
            passed.password = true;
        } else {
            errors += errorMessage.password
        }


        // if(this.state.password.length === this.state.password_again) {
        //     passed.password_again = true;
        // }

        if (passed.email &&  passed.password && passed.password_again) {
            valid = true;
        }

        this.setState({
            errors: errors,
            valid: valid
        });
        return valid;
    };

    submitData = () => {
        if(this.checkValid()) {
            console.log('submit data');
        }
    };

    renderErrorMessageComponent = () => {
        if(this.state.errors) {
            return(
                <ErrorMessage error={this.state.errors}/>
            );
        }
    };


    render() {
        return (
          <div className="text-center">
                Submit for Trial
                <hr/>
                {/*for check component and it can save me a time to find a problem in a future*/}
              {
                  this.state.errors &&
                  <ErrorMessage error={this.state.errors}/>
              }

              {/*Unnecessary*/}
              {/*{*/}
                  {/*this.renderErrorMessageComponent()*/}
              {/*}*/}

              {/*this line is mach cleaner*/}
              <ErrorMessage message={this.state.errors}/>




                <div>
                    <div>Email Address</div>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.inputChanged.bind(this)}
                    />
                </div>
                <div>
                    <div>Password</div>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.inputChanged.bind(this)}
                    />
                </div>
                <div>
                    <div>Repeat your password</div>
                    <input
                        type="password"
                        name="password_again"
                        value={this.state.password_again}
                        onChange={this.inputChanged.bind(this)}
                    />
                </div>
                <hr/>
                <button onClick={this.props.onReset}>Back</button>
                <button onClick={this.submitData}>Submit</button>
                {/*<button disabled={this.state.disabled}>Submit</button>*/}

          </div>
        );
      }
}
export default Trial;