import React from "react"
import propTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const GET_GREETING_REQUEST = "GET_GREETING_REQUEST";
const GET_GREETING_SUCCESS = "GET_GREETING_SUCCESS";

function getGreetings() {
  return dispatch => {
    dispatch({ type: GET_GREETING_REQUEST });
    return fetch(`v1/greetings.json`)
      .then(response => response.json() )
      .then(json => dispatch(getGreetingsSuccess(json)))
      .catch(error => console.log(error));
  };
}

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETING_SUCCESS,
    json
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


const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(Greetings);
