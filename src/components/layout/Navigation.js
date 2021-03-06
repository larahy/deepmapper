import React from 'react'
import {Link} from 'react-router-dom'
import "./navigation.scss"
import logo from "./logo.svg";


export default class Navigation extends React.Component {

  render() {
    return (
      <nav id="navbar" className="navbar has-shadow is-spaced">
        <div className="container">

          {/*NAVBAR BRAND*/}
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} width="44" height="44"/>
              DEEPMAPPER
          </Link>

            <div id="navbarBurger" className="navbar-burger burger" data-target="navMenuDocumentation">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/*NAVBAR MENU - hidden on touch devices less than 1024px, need to add modifier className is-active to display it*/}
          <div id="navMenuDocumentation" className="navbar-menu">
            {/*NAVBAR RIGHT*/}
            <div className="navbar-start">
              <Link to="/expert" className="navbar-item is-active">
                FORTUNE
              </Link>


              <a className="navbar-item " href="">
                FAVOURS
              </a>

              <a className="navbar-item" href="">
                THE
              </a>

              <a className="navbar-item" href="">
                BOLD
              </a>
              <div className="navbar-item has-dropdown is-hoverable">

                <a className="navbar-link" href="https://bulma.io/more">
                  qui
                </a>

                <div id="moreDropdown" className="navbar-dropdown">

                  <a className="navbar-item " href="">
                    CAT
                  </a>
                  <a className="navbar-item " href="">
              <span>
                <strong>SAT</strong>
     
              </span>
                  </a>
                  <a className="navbar-item " href="">
              <span>
                <strong>on</strong>

              </span>
                  </a>
                  <a className="navbar-item " href="">
              <span>

                <strong>mat</strong>

                
              </span>
                  </a>
                </div>
              </div>
            </div>

            {/*NAVBAR LEFT*/}

            <div className="navbar-end">
              <a className="navbar-item is-hidden-touch is-hidden-desktop-only" href=""
                 target="_blank">
                vivra
              </a>

              <a className="navbar-item is-hidden-touch is-hidden-desktop-only" href=""
                 target="_blank">verra
              </a>

              <div className="navbar-item">
                <div className="field is-grouped is-grouped-multiline">
                  <p className="control">
                    <a className="button" href="" target="_blank">
                      <img src={logo} width="30" height="30"/>
                      <strong>hello</strong>
                    </a>

                  </p>
                  <p className="control">
                    <a className="button is-primary" href="">
                      <strong>BRENDA</strong>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

