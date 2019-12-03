import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {


    render() {
        return (
            <footer>
                <nav>
                    <ul className="container">
                        <li classNam>Nashville Software School <br></br>NSS Cohort 35</li><br></br>
                        <div className="socialMediaIcons">
                        <li><img id="footerIcon" src={require('./twitter.png')} alt="Twitter Logo" /></li>
                        <li><img id="footerIcon" src={require('./facebook.png')} alt="Facebook Logo" /></li>
                        <li><img id="footerIcon" src={require('./linkedin.png')} alt="LinkedIn Logo" /></li>
                        </div>
                    </ul>
                </nav>
            </footer>
        )
    }
}

export default Footer;
