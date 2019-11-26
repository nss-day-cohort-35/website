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
                        <div className="demoDayInfo">
                        <h2 className="demoDayDate">Nashville Software School Demo Day <br></br> February 14, 2020</h2>

                        <button className="demoDayRegister">
                        <h2 className="registerText">Register</h2>
                        </button>
                        </div>
                </nav>
            </div>
        );
    }
}
export default NavBar;