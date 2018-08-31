import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Main from './../route1/Main'
import About from './../route1/about'
import Topic from './../route1/topic'
import Home from './Home'

export default class IRouter extends React.Component {

  render() {
    return (
      <Router>
        <Home>
          <Route exact={true} path="/" component={Main}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topic" component={Topic}></Route>
        </Home>
      </Router>
    );
  }
}