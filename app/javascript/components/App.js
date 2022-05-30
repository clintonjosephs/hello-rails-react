import React from "react"
import { Routes, Route } from "react-router-dom"
import Greetings from "./Greetings";

class App extends React.Component {
  render () {
    return (
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/greetings" render={<Greetings />} />
      </Routes>
    );
  }
}

export default App
