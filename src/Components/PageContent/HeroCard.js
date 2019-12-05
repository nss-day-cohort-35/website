import React, { Component } from "react";
import Typewriter from 'typewriter-effect';
import './hero.css'

class HeroCard extends Component {
    render() {
        return (
            <div id="heroCard">
                <div className="heroCard">

                    <h1 className="heroHeaderText">hello!</h1>
                    <div className="typewriterTextGreeting">
                    we are<Typewriter id="typewriterText"
                        options={{
                            strings: ['ready to work','frontend developers', 'UX/UI designers', 'c# and .net developers'],
                            autoStart: true,
                            loop: true,
                            delay: 'natural'
                        }}
                    />
                    </div>
                    <p className="cohortIntroText">Meet Cohort 35</p>
                    <div className="arrowContainer">
                    <a href="#scroll">
                        <img id="downArrow" src={require('../images/down-arrow.png')} alt="Twitter Logo"
                        />
                    </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeroCard;