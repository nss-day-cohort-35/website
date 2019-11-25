import React, { Component } from "react";
import Typewriter from 'typewriter-effect';




class HeroCard extends Component {
    render() {
        return (
            <div id="heroCard">
                <div className="heroCard">

                    <h1 className="heroHeaderText">hello!</h1>
                    We are <Typewriter id="typewriterText"
                        options={{
                            strings: ['Hello Gradi', 'World'],
                            autoStart: true,
                            loop: true,
                            delay: 'natural'
                        }}
                        // onInit={(typewriter) => {
                        //     typewriter
                        //         .deleteAll()
                        //         .callFunction(() => {
                        //             console.log('All strings were deleted');
                        //         })
                        //         .start();
                        // }}
                    />

                </div>
            </div>
        );
    }
}
export default HeroCard;