import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {


    render() {
        return (
            <footer>
                <nav>
                    <ul className="container">
                        <li className="footerCopy">Nashville Software School <br></br>NSS Cohort 35 &copy; 2019</li><br></br>
                        <div className="socialMediaIcons">
                        <li id="footerSocial"><img id="footerIcon" src={require('./twitter.png')} alt="Twitter Logo" /></li>
                        <li id="footerSocial"><img id="footerIcon" src={require('./facebook.png')} alt="Facebook Logo" /></li>
                        <li id="footerSocial"><img id="footerIcon" src={require('./linkedin.png')} alt="LinkedIn Logo" /></li>
                        </div>
                    </ul>
                </nav>
            </footer>
        )
    }
}

export default Footer;
