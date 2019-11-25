import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <div id="navbar">
                <nav className="navbar">
                        <img
                            className="logo"
                            alt="Cohort 35"
                            src="./images/cohort35_logo_navbar-01.png"
                        />
                        <h1>Demo Day 2/14/20</h1>

                        <button>Register</button>
                </nav>
            </div>
        );
    }
}
export default NavBar;