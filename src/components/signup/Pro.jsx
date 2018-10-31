import React from "react";

class Pro extends React.Component {
    render() {
        return (
          <div className="text-center">
                Pro Component
                <button onClick={this.props.onReset}>Back</button>
          </div>
        );
      }
}
export default Pro;