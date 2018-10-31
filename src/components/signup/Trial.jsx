import React from "react";

class Trial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            email: '',
            password: '',
            password_again: ''

        }

    }

    inputChanged = (event) => {
        console.log(event.target.value);
        let obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj, this.checkValid);
    };

    checkValid = () => {
        console.log(this.state.email, this.state.password, this.state.password_again);



        this.setState({
            disabled: false,
        })
    };


    render() {
        return (
          <div className="text-center">
                Trial Component
                <div>
                    <div>Email Adress</div>
                    <input type="text" name="email" value={this.state.email} onChange={this.inputChanged.bind(this)}/>
                </div>
              <div>
                  <div>Password</div>
                  <input type="password" name="password" value={this.state.password} onChange={this.inputChanged.bind(this)}/>
              </div>
              <div>
                  <div>Reapeat your password</div>
                  <input type="passwowrd" name="password_again" value={this.state.password_again} onChange={this.inputChanged.bind(this)}/>
              </div>
              <button onClick={this.props.onReset}>Back</button>
              <button disabled={this.state.disabled}>Submit</button>

          </div>
        );
      }
}
export default Trial;