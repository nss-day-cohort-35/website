import React, { Component } from "react";
import './TechCard.css'

class TechCard extends Component {
    render() {
        return (
            <section className="techSection">
            <h2 className="technologiesIntroTitle">technologies used:</h2>
                <div id="firstHalfTech">
                <h4 className="technologiesTitleText">First 12 Weeks</h4>
                    <a href="https://www.javascript.com/" className="techAll">JavaScript</a>
                    <a href="https://github.com/" className="techAll">Github</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" className="techAll">HTML5</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" className="techAll">CSS3</a>
                    <a href="https://getbootstrap.com/" className="techAll">Bootstrap</a>
                    <a href="https://www.npmjs.com/" className="techAll">NPM</a>
                    <a href="https://code.visualstudio.com/" className="techAll">Visual Studio Code</a>
                    <a href="https://reactjs.org" className="techAll">React</a>
                    <a href="https://www.getpostman.com/" className="techAll">Postman</a>
                    <a href="https://dbdiagram.io/home" className="techAll">dbdiagram</a>
                    <a href="https://github.com/typicode/json-server" className="techAll">JSON Server</a>
                </div>
                <hr className="technologiesLine"></hr>
                <div id="backendTech">
                <h4 className="technologiesTitleText">Full Stack Tech</h4>
                    <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" className="techBack">C#</a>
                    <a href="https://www.microsoft.com/net/" className="techBack">.NET Core</a>
                    <a href="https://www.microsoft.com/en-us/sql-server/sql-server-2017" className="techBack">SQL Server</a>
                    <a href="https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.0" className="techBack">ASP.NET</a>
                <a href="https://visualstudio.microsoft.com/" className="techBack">Visual Studio</a>
                </div>
                <hr className="technologiesLine"></hr>
                <div id="frontendTech">
                <h4  className="technologiesTitleText">UX/UI Tech</h4>
                    <a href="https://www.figma.com/" className="techFront">Figma</a>
                    <a href="https://sass-lang.com/" className="techFront">SASS</a>
                    <a href="https://firebase.google.com/" className="techFront">Firebase</a>
                    <a href="https://reactjs.org/docs/hooks-intro.html" className="techFront">React Hooks</a>
                    <a href="https://dribbble.com/" className="techFront">Dribbble</a>
                </div>
            </section>
        );
    }
}
export default TechCard;