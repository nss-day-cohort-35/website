import React, { Component } from "react";
import './TechCard.css'

class TechCard extends Component {
    render() {
        return (
            <>
                <h2 className="technologiesIntroTitle">technologies and skills:</h2>
                <div className="techSection">
                <div className="fullCohort">
                <h4 className="technologiesTitleTextFirst">First 12 Weeks</h4>
                <div id="firstHalfTech">
                    <a href="https://www.javascript.com/" target="_blank" className="techAll">JavaScript</a>
                    <a href="https://github.com/" target="_blank" className="techAll">GitHub</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" className="techAll">HTML5</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank" className="techAll">CSS3</a>
                    <a href="https://getbootstrap.com/" target="_blank" className="techAll">Bootstrap</a>
                    <a href="https://www.npmjs.com/" target="_blank" className="techAll">NPM</a>
                    <a href="https://code.visualstudio.com/" target="_blank" className="techAll">Visual Studio Code</a>
                    <a href="https://reactjs.org" target="_blank" className="techAll">React</a>
                    <a href="https://www.getpostman.com/" target="_blank" className="techAll">Postman</a>
                    <a href="https://dbdiagram.io/home" target="_blank" className="techAll">dbdiagram</a>
                    <a href="https://github.com/typicode/json-server" target="_blank" className="techAll">JSON Server</a>
                </div>
                </div>
                <hr className="technologiesLine"></hr>
                <div className="splitCohort">
                <h4 className="technologiesTitleText">Full Stack</h4>
                <div id="secondHalfTech">
                <div id="backendTech">
                    <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" className="techBack">C#</a>
                    <a href="https://www.microsoft.com/net/" target="_blank" className="techBack">.NET Core</a>
                    <a href="https://www.microsoft.com/en-us/sql-server/sql-server-2017" target="_blank" className="techBack">SQL Server</a>
                    <a href="https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.0" target="_blank" className="techBack">ASP.NET</a>
                    <a href="https://visualstudio.microsoft.com/" target="_blank" className="techBack">Visual Studio</a>
                    <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" className="techBack">React Hooks</a>
                </div>
                <hr className="technologiesLine"></hr>
                </div>
                <h4 className="technologiesTitleTextFront">UX/UI</h4>
                <div id="frontendTech">
                    <a href="https://www.figma.com/" target="_blank" className="techFront">Figma</a>
                    <a href="https://sass-lang.com/" target="_blank" className="techFront">SASS</a>
                    <a href="https://firebase.google.com/" target="_blank" className="techFront">Firebase</a>
                    <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" className="techFront">React Hooks</a>
                    <a href="https://dribbble.com/" target="_blank" className="techFront">Dribbble</a>
                    <a href="#" className="techFront">User Research</a>
                    <a href="#" className="techFront">Personas</a>
                    <a href="#" className="techFront">Prototyping/Mockups</a>
                    <a href="#" className="techFront">User Testing</a>
                    <a href="#" className="techFront">Usability Testing</a>
                    <a href="#" className="techFront">Journey Mapping</a>
                    <a href="#" className="techFront">Design Systems</a>
                    <a href="#" className="techFront">Info Architecture</a>
                </div>
                </div>
            </div>
            </>
        );
    }
}
export default TechCard;