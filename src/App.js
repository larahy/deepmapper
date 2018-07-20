import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import Navigation from './components/layout/Navigation'
import Home from './containers/Home'
import Expert from './containers/Expert'

export const mapStateToProps = state => {
  return {}
}

export const mapDispatchToProps = dispatch => {
  return {}
}

let App = class extends React.Component {
  static displayName = 'App'
  // static propTypes = {
  //   isBrenda: PropTypes.bool,
  // }
  //
  // static defaultProps = {
  //   isBrenda: false,
  // }


  render() {
    // if (!this.props.isBrenda) {
    //   return (<div>Loading...</div>)
    // }

    return (
      <div>
        <BrowserRouter>
          <div>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/expert' component={Expert}/>
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App