import React from "react"
import propTypes from "prop-types";

class Greetings extends React.Component {
  render () {
    return (
       <React.Fragment>
         Greeting: { this.props.greeting }
       </React.Fragment>
    );
  }
}

Greetings.propTypes = {
  greeting: propTypes.string.isRequired
};

export default Greetings
