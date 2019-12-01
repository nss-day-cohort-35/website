import React, { Component } from "react";
import './TechCard.css'

class TechCard extends Component {
    render() {
        return (
            <section className="techSection">
            <h2 className="technologiesIntroTitle">technologies used:</h2>
                <div id="firstHalfTech">
                <h4>First 12 Weeks</h4>
                    <a href="https://www.javascript.com/" className="tech">JavaScript</a>
                    <a href="https://github.com/" className="tech">Github</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" className="tech">HTML5</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" className="tech">CSS3</a>
                    <a href="https://getbootstrap.com/" className="tech">Bootstrap</a>
                    <a href="https://www.npmjs.com/" className="tech">NPM</a>
                    <a href="https://code.visualstudio.com/" className="tech">Visual Studio Code</a>
                    <a href="https://reactjs.org" className="tech">React</a>
                    <a href="https://www.getpostman.com/" className="tech">Postman</a>
                    <a href="https://dbdiagram.io/home" className="tech">dbdiagram</a>
                    <a href="https://github.com/typicode/json-server" className="tech">JSON Server</a>

                <h4 className="technologiesTitleText">First 12 Weeks</h4>
                    <a href="https://www.javascript.com/" className="techAll">JavaScript</a>
                    <a href="https://github.com/" className="techAll">Github</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" className="techAll">HTML5</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" className="techAll">CSS3</a>
                    <a href="https://getbootstrap.com/" className="techAll">Bootstrap</a>
                    <a href="https://www.npmjs.com/" className="techAll">NPM</a>
                    <a href="https://code.visualstudio.com/" className="techAll">Visual Studio Code</a>
                    <a href="https://reactjs.org" className="techAll">React</a>
                </div>
                <hr className="technologiesLine"></hr>
                <div id="backendTech">
<<<<<<< HEAD
                <h4>Full Stack Tech</h4>
                <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" className="tech">C#</a>
                <a href="https://www.microsoft.com/net/" className="tech">.NET Core</a>
                <a href="https://www.microsoft.com/en-us/sql-server/sql-server-2017" className="tech">SQL Server</a>
                <a href="https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.0" className="tech">ASP.NET</a>
                <a href="https://visualstudio.microsoft.com/" className="tech">Visual Studio</a>
=======
                <h4 className="technologiesTitleText">Full Stack Tech</h4>
                <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" className="techBack">C#</a>
                <a href="https://www.microsoft.com/net/" className="techBack">.NET Core</a>
                <a href="https://www.microsoft.com/en-us/sql-server/sql-server-2017" className="techBack">SQL Server</a>
>>>>>>> master
                </div>
                <hr className="technologiesLine"></hr>
                <div id="frontendTech">
<<<<<<< HEAD
                <h4>UX/UI Tech</h4>
                <a href="https://www.figma.com/" className="tech">Figma</a>
                <a href="https://sass-lang.com/" className="tech">SASS</a>
                <a href="https://firebase.google.com/" className="tech">Firebase</a>
                <a href="https://reactjs.org/docs/hooks-intro.html" className="tech">React Hooks</a>
=======
                <h4  className="technologiesTitleText">UX/UI Tech</h4>
                <a href="https://www.figma.com/" className="techFront">Figma</a>
                <a href="https://dribbble.com/" className="techFront">Dribbble</a>
>>>>>>> master
                </div>
            </section>
        );
    }
}
export default TechCard;