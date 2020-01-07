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
              <li id="footerSocial"><a href="https://twitter.com/NashSoftware" target="_blank" rel="noopener noreferrer"><img id="footerIcon" src={require('./twitter.png')} alt="Twitter Logo" /></a></li>
              <li id="footerSocial"><a href="https://www.facebook.com/NashvilleSoftwareSchool/" target="_blank" rel="noopener noreferrer"><img id="footerIcon" src={require('./facebook.png')} alt="Facebook Logo" /></a></li>
              <li id="footerSocial"><a href="https://www.linkedin.com/school/nashville-software-school/" target="_blank" rel="noopener noreferrer"><img id="footerIcon" src={require('./linkedin.png')} alt="LinkedIn Logo" /></a></li>
            </div>
          </ul>
        </nav>
      </footer>
    )
  }
}

export default Footer;
