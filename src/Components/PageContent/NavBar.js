import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav className="navbar justify-content-between">
                    <Link className="logoLink">
                        <CardImg
                            className="logo"
                            alt="Cohort 35"
                            src={require("../../images/logo.png")}
                        />
                    </Link>
                            Demo Day is February 14th!
                    <Link>
                            <button>Register</button>
                    </Link>
                </nav>
            </div>
        );
    }
}
export default withRouter(NavBar);