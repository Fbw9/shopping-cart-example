import React from "react";

class Pro extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render() {
        return (
            <div className="text-center">
                Trial Component
                <div>
                    <div>Email Adress</div>
                    <input type="text" name="email"/>
                </div>
                <div>
                    <div>Password</div>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <div>Reapeat your password</div>
                    <input type="passwowrd" name="password_again"/>
                </div>
                <button onClick={this.props.onReset}>Back</button>
                <button disabled>Submit</button>

            </div>
        );
    }
}
export default Pro;