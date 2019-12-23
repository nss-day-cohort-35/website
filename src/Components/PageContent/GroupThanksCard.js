import React, { Component } from 'react'
import "./GroupThanksCard.css"

export default class GroupThanksCard extends Component {


    render() {
        return (
            <>
                <div className="thanksContainer">
                    <h2 className="thankYouTitle">Special Thanks: </h2>
                    <h3 className="speakersInfo">We are grateful for our guest speakers and volunteers from the Nashville Tech Community!</h3>
                    <div className="guestSpeakers">
                        <ul>
                            <div className="guestSpeakerListFirst">
                                <li className="speakerNames"><span className="boldName">Gina Antonini,</span> Sarah Cannon Network</li>
                                <li className="speakerNames"><span className="boldName">Lauren Atkins, </span>Brooksource</li>
                                <li className="speakerNames"><span className="boldName">Rachel Babcock, </span>Change Healthcare</li>
                                <li className="speakerNames"><span className="boldName">Allison Collins,</span> Brooksource</li>
                                <li className="speakerNames"><span className="boldName">Jase Hackman,</span> Healthstream</li>
                                <li className="speakerNames"><span className="boldName">Richard Lancaster,</span> SmileDirectClub</li>
                                <li className="speakerNames"><span className="boldName">Dillan Teagle, </span> CPI Card Group</li>
                                <li className="speakerNames"><span className="boldName">Rachel Vawter, </span> Brooksource</li>
                                <li className="speakerNames"><span className="boldName">Gretchen Ward,</span>  Advance Financial</li>
                                <li className="speakerNames"><span className="boldName">JD Wheeler,</span>  Groups360</li>
                            </div>
                        </ul>
                        <ul>
                            <div className="guestSpeakerListSecond">
                            <li className="speakerNames"><span className="boldName">Trevon Young,</span> company name goes here</li>
                            <li className="speakerNames"><span className="boldName">Arthur Smith,</span> Wellview Health</li>
                            <li className="speakerNames"><span className="boldName">Patrick Krisko,</span> Asurion</li>
                            <li className="speakerNames"><span className="boldName">John Paul,</span> Vanderbilt</li>
                            <li className="speakerNames"><span className="boldName">Lee Matabire,</span> ServiceSource</li>
                            <li className="speakerNames"><span className="boldName">Vijay Gollapudi,</span> TN Dept of Education</li>
                            <li className="speakerNames"><span className="boldName">Nikki Hughes,</span> Quore Systems</li>
                            <li className="speakerNames"><span className="boldName">Holden Hughes,</span> SmileDirectClub</li>
                            <li className="speakerNames"><span className="boldName">David Martin,</span> ReLode</li>
                            <li className="speakerNames"><span className="boldName">Jessawynne Parker,</span> YouScience LLC</li>
                            </div>
                        </ul>
                        <ul>
                            <div className="guestSpeakerListThird">
                            <li className="speakerNames"><span className="boldName">Carter Harris,</span> HCA</li>
                            <li className="speakerNames"><span className="boldName">Morgan Bortz,</span> Asurion</li>
                            <li className="speakerNames"><span className="boldName">Thomas Johnson,</span> Asurion</li>
                            <li className="speakerNames"><span className="boldName">Brad Lilly,</span> Bluebook Media</li>
                            </div>
                        </ul>
                    </div>
                    <h3 className="teachersInfo">...and our wonderful instruction team</h3>

                    <p className="teacherNames">Brenda Long, Madi Peper, Adam Sheaffer, and Mo Silvera</p>
                </div>
                <div className="groupImg">
                    <img width="100%" src="images/fullcohortfun.jpg" alt="groupPhoto" />
                </div>
            </>

        )
    }
}