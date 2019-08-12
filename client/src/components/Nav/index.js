import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// nav component with state that maintains relative positon with window.
class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };
//when screen width changes, updateWidth changes the width state of Nav
  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };
//when called, if nav is closed, nav will be opened.
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };
//this is invoked immediately after component is mounted.
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }
  // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        {/* renders button component that toggles nav on click. */}
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* handles collapsable nav options */}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* this link targets the default route which takes you to the main search home page */}
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            {/* link in nav that sends you to the page with the saved books that calls the api */}
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
