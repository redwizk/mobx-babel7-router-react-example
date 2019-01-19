import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from "react-router";

class Home extends Component {
    render() {
      return (
        <div>
          home
        </div>
      )
    }
  }
class Comp1 extends Component {
  render() {
    return (
      <div>
        1
      </div>
    )
  }
}
class Comp2 extends Component {
  render() {
    return (
      <div>
        2
      </div>
    )
  }
}
class Comp3 extends Component {
  render() {
    return (
      <div>
        3
      </div>
    )
  }
}

export class Router extends Component {
  render() {
    return (
      <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route 
            path="/1"
            component={Comp1}/>
        <Route 
            path="/2"
            component={Comp2}/>
        <Route 
            path="/3"
            component={Comp3}/>
      </Switch>
      </React.Fragment>
    )
  }
}

export default Router;
