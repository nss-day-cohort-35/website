import React, { Component } from 'react'
import "./GroupThanksCard.css"

export default class GroupThanksCard extends Component {


    render() {
        return (
            <>
                <div className="thanksContainer">
                    <h2 className="thankYouTitle">Special Thanks: </h2>
                    <h3 className="speakersInfo">We are grateful for our guest speakers from the Nashville Tech Community!</h3>
                    <div className="guestSpeakers">
                        <ul>

                            <div className="guestSpeakerListFirst">
                                <li className="speakerNames"><span className="boldName">Gina Antonini,</span>company name goes here</li>
                                <li className="speakerNames"><span className="boldName">Lauren Atkins, </span>Brooksource</li>
                                <li className="speakerNames"><span className="boldName">Rachel Babcock, </span>Change Healthcare</li>
                                <li className="speakerNames"><span className="boldName">Allison Collins,</span> Brooksource</li>
                                <li className="speakerNames"><span className="boldName">Jase Hackman,</span> company name goes here</li>
                            </div>
                        </ul>
                        <ul>
                            <div className="guestSpeakerListSecond">
                                <li className="speakerNames"><span className="boldName">Richard Lancaster,</span> company name goes here</li>
                                <li className="speakerNames"><span className="boldName">Dillian Teagle, </span>company name goes here</li>
                                <li className="speakerNames"><span className="boldName">Rachel Vawter, </span>company name goes here</li>
                                <li className="speakerNames"><span className="boldName">Gretchen Ward,</span> company name goes here</li>
                                <li className="speakerNames"><span className="boldName">JD Wheeler,</span> company name goes here</li>
                                <li className="speakerNames"><span className="boldName">Trevon Young,</span> company name goes here</li>
                            </div>
                        </ul>
                    </div>
                    <h3 className="teachersInfo">...and our wonderful teachers and instructors</h3>

                    <p className="teacherNames">Brenda Long, Madi Peper, Adam Sheaffer, and Mo Silvera</p>
                </div>
                <div className="groupImg">
                    <img width="100%" src="images/thanks1.jpg" alt="groupPhoto" />
                </div>
            </>

        )
    }
}