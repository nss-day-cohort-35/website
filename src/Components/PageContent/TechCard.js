import React, { Component } from "react";
import './TechCard.css'

class TechCard extends Component {
  render() {
    return (
      <>
        <h2 className="technologiesIntroTitle">technologies and skills:</h2>
        <div className="techSection">

          <div className="fullCohort">
            <h4 className="technologiesTitleText">First 12 Weeks</h4>
            <div className="firstHalfTech">
              <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer" className="techAll">JavaScript</a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="techAll">GitHub</a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer" className="techAll">HTML5</a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank" rel="noopener noreferrer" className="techAll">CSS3</a>
              <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" className="techAll">Bootstrap</a>
              <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer" className="techAll">NPM</a>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="techAll">VS Code</a>
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="techAll">React</a>
              <a href="https://www.getpostman.com/" target="_blank" rel="noopener noreferrer" className="techAll">Postman</a>
              <a href="https://dbdiagram.io/home" target="_blank" rel="noopener noreferrer" className="techAll">dbdiagram</a>
              <a href="https://github.com/typicode/json-server" target="_blank" rel="noopener noreferrer" className="techAll">JSON Server</a>
            </div>
          </div>

  <hr className="technologiesLine"></hr>

      <div className="backendWrapper">

          <div className="splitCohort">
            <h4 className="technologiesTitleText">Full Stack</h4>
              <div className="firstHalfTech">
              <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer" className="techBack">C#</a>
              <a href="https://www.microsoft.com/net/" target="_blank" rel="noopener noreferrer" className="techBack">.NET Core</a>
              <a href="https://www.microsoft.com/en-us/sql-server/sql-server-2017" target="_blank" rel="noopener noreferrer" className="techBack">SQL Server</a>
              <a href="https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.0" target="_blank" rel="noopener noreferrer" className="techBack">ASP.NET</a>
              <a href="https://visualstudio.microsoft.com/" target="_blank" rel="noopener noreferrer" className="techBack">Visual Studio</a>
              <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer" className="techBack">React Hooks</a>
            </div>

          </div>
  <hr className="technologiesHLine"></hr>
          <div className="splitCohort">
            <h4 className="technologiesTitleText">UX/UI</h4>
              <div className="firstHalfTech">
              <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="techFront">Figma</a>
              <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer" className="techFront">SASS</a>
              <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="techFront">Firebase</a>
              <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer" className="techFront">React Hooks</a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="techFront">Dribbble</a>
              <p className="techFront">User Research</p>
              <p className="techFront">Personas</p>
              <p className="techFront">Prototyping/Mockups</p>
              <p className="techFront">User Testing</p>
              <p className="techFront">Usability Testing</p>
              <p className="techFront">Journey Mapping</p>
              <p className="techFront">Design Systems</p>
              <p className="techFront">Info Architecture</p>
            </div>
          </div>
      </div>


        </div>
      </>
    );
  }
}
export default TechCard;