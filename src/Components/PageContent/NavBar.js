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
							<h3 className="demoDayDate">
								Nashville Software School Demo Day{" "}
								<span id="demoDay">2•14•2020</span>
							</h3>
						</div>
						<div className="demoDayRegisterContainer">
              <button className="demoDayRegister" onClick={()=>{
                    window.location.href = "http://nashss.com/demoday"
              }}>
								<h2 className="registerText">RSVP</h2>
							</button>
						</div>
					</div>
				</nav>
			</div>
		);
    }
}
export default NavBar;