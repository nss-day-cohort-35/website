import React, { Component } from "react";
import Typewriter from 'typewriter-effect';




class HeroCard extends Component {
    render() {
        return (
            <div id="heroCard">
                <div className="heroCard">

                    <h1 className="heroHeaderText">hello!</h1>
                    <div className="typewriterTextGreeting">
                    We are  <Typewriter id="typewriterText"
                        options={{
                            strings: [' front-end developers', ' UX/UI designers', ' c# and .net developers', ' really talented humans'],
                            autoStart: true,
                            loop: true,
                            delay: 'natural'
                        }}
                    />
                    </div>
                </div>
            </div>
        );
    }
}
export default HeroCard;