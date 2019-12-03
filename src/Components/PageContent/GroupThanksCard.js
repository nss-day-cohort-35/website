import React, { Component } from 'react'
import "./GroupThanksCard.css"

export default class GroupThanksCard extends Component {


    render() {
        return (
            <>
            <div className="thanksContainer">
                <h2 className="thankYouTitle">Special Thanks to: </h2>
                <h3 className="speakersInfo">Our guest speakers:</h3>
                <ul>
                    <li className="speakerNames">Gina Antonini</li>
                    <li className="speakerNames">Lauren Atkins</li>
                    <li className="speakerNames">Rachel Babcock</li>
                    <li className="speakerNames">Allison Collins</li>
                    <li className="speakerNames">Jase Hackman</li>
                    <li className="speakerNames">Richard Lancaster</li>
                    <li className="speakerNames">Dillian Teagle</li>
                    <li className="speakerNames">Rachel Vawter</li>
                    <li className="speakerNames">Gretchen Ward</li>
                    <li className="speakerNames">JD Wheeler</li>
                    <li className="speakerNames">Trevon Young</li>
                </ul>
                <h3 className="speakersInfo">...and our wonderful teachers and instructors</h3>
                    <li className="speakerNames">Brenda Long</li>
                    <li className="speakerNames">Mo</li>
                    <li className="speakerNames">Madi</li>
                    <li className="speakerNames">Adam</li>
            </div>
            </>

        )
    }
}