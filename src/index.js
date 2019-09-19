import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter ,Switch, Route } from 'react-router-dom'
import About from "./About"


    const App = () => {
        return (
          <>
            <Header />
            <Switch>
              <Route exact path='/' component={Hello}></Route>
              <Route exact path='/about' component={About}></Route>
              </Switch>
            <Footer />
          </ >
        )
      };

    ReactDOM.render((
      <BrowserRouter>
          <App />
      </BrowserRouter>
    ), document.getElementById('app'));