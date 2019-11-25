import React, { Component } from "react";
import './TechCard.css'

class TechCard extends Component {
    render() {
        return (
            <section className="techSection">
            <h3>Technologies Used</h3>
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
                </div>

                <div id="backendTech">
                <h4>Full Stack Tech</h4>
                <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" className="tech">C#</a>
                <a href="https://www.microsoft.com/net/" className="tech">.NET Core</a>
                <a href="https://www.microsoft.com/en-us/sql-server/sql-server-2017" className="tech">SQL Server</a>
                </div>

                <div id="frontendTech">
                <h4>UX/UI Tech</h4>
                <a href="https://www.figma.com/" className="tech">Figma</a>
                <a href="https://dribbble.com/" className="tech">Dribbble</a>
                </div>
            </section>
        );
    }
}
export default TechCard;