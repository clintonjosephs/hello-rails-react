import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Greetings from "./Greetings";
import storeConfig from "../redux/storeConfig";
import { Provider } from "react-redux";

const store = storeConfig();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greetings />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
