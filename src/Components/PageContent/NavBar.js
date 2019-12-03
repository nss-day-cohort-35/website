import React, { Component } from "react";
import './navbar.css'

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
                        <div className="demoDayDateContainer">
                            <h3 className="demoDayDate">Nashville Software School Demo Day: February 14, 2020</h3>
                        </div>
                        <div className="demoDayRegisterContainer">
                            <button className="demoDayRegister">
                                <h2 className="registerText">Register</h2>
                            </button>
                        </div>
                    </div>

                </nav>
            </div> 
        );
    }
}
export default NavBar;