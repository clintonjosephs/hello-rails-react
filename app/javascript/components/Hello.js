import React from "react"
import propTypes from "prop-types";

class Hello extends React.Component {
  render () {
    return (
       <React.Fragment>
         Greeting: { this.props.greeting }
       </React.Fragment>
    );
  }
}

Hello.propTypes = {
  greeting: propTypes.string.isRequired
};

export default Hello
