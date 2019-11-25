import React, { Component } from "react";
import Typewriter from 'typewriter-effect';




class HeroCard extends Component {
    render() {
        return (
            <div id="heroCard">
                <div className="heroCard">

                    <h1 className="heroHeaderText">hello!</h1>
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter.typeString('Hello World!')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(2500)
                                .deleteAll()
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                        }}
                    />

                </div>
            </div>
        );
    }
}
export default HeroCard;