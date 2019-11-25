import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {


    render() {
        return (
            <footer>
                <nav>
                    <ul className="container">
                        <li>NSS Cohort 35</li>
                        <li><img id="footerIcon" src={require('./twitter.png')} alt="Twitter Logo" /></li>
                        <li><img id="footerIcon" src={require('./facebook.png')} alt="Facebook Logo" /></li>
                    </ul>
                </nav>
            </footer>
        )
    }
}

export default Footer;
