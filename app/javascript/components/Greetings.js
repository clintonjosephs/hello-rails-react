import React from "react"
import propTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const GET_GREETING_REQUEST = "GET_GREETING_REQUEST";
function getGreetings() {
  console.log('get things action!')
  return {
    type: GET_GREETING_REQUEST,
  }
}


class Greetings extends React.Component {
  render () {
    return (
       <React.Fragment>
          <h1>React Rails</h1>
         Random greeting: { this.props.greeting } 
         <hr />
         <button className="getThingsBtn" onClick={() => this.props.getGreetings()}>Get Random</button>
       </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
    greeting: (state) => state.greeting
});

Greetings.propTypes = {
  greeting: propTypes.string.isRequired
};

const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(Greetings);
