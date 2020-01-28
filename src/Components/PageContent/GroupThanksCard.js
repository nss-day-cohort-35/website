import React, { Component } from 'react'
import "./GroupThanksCard.css"

export default class GroupThanksCard extends Component {
// <ul className="guestSpeakerListSecond">

  render() {
      return (
        <div className="thankswrapper">
          <div className="thanksContainer">
            <h2 className="thankYouTitle">Special Thanks: </h2>
            <h3 className="speakersInfo">We are grateful for our guest speakers and volunteers from the Nashville Tech Community!</h3>
          </div>
          <div className="guestSpeakers">
            <ul className="guestSpeakerList">
              <li className="speakerNames"><span className="boldName">Gina Antonini,</span> <small>Sarah Cannon Network</small></li>
              <li className="speakerNames"><span className="boldName">Lauren Atkins,</span> <small>Brooksource</small></li>
              <li className="speakerNames"><span className="boldName">Rachel Babcock,</span> <small>Change Healthcare</small></li>
              <li className="speakerNames"><span className="boldName">Allison Collins,</span> <small>Brooksource</small></li>
              <li className="speakerNames"><span className="boldName">Jase Hackman,</span> <small>Healthstream</small></li>
              <li className="speakerNames"><span className="boldName">Richard Lancaster,</span> <small>SmileDirectClub</small></li>
              <li className="speakerNames"><span className="boldName">Dillan Teagle, </span> <small>CPI Card Group</small></li>
              <li className="speakerNames"><span className="boldName">Rachel Vawter, </span> <small>Brooksource</small></li>
              <li className="speakerNames"><span className="boldName">Gretchen Ward,</span>  <small>Advance Financial</small></li>
              <li className="speakerNames"><span className="boldName">JD Wheeler,</span>  <small>Groups360</small></li>
              <li className="speakerNames"><span className="boldName">Trevon Young</span></li>
              <li className="speakerNames"><span className="boldName">Arthur Smith,</span> <small>Wellview Health</small></li>
              <li className="speakerNames"><span className="boldName">Patrick Krisko,</span> <small>Asurion</small></li>
              <li className="speakerNames"><span className="boldName">John Paul,</span> <small>Vanderbilt</small></li>
              <li className="speakerNames"><span className="boldName">Lee Matabire,</span> <small>ServiceSource</small></li>
              <li className="speakerNames"><span className="boldName">Vijay Gollapudi,</span> <small>TN Dept of Education</small></li>
              <li className="speakerNames"><span className="boldName">Nikki Hughes,</span> <small>Quore Systems</small></li>
              <li className="speakerNames"><span className="boldName">Holden Hughes,</span> <small>SmileDirectClub</small></li>
              <li className="speakerNames"><span className="boldName">David Martin,</span> <small>ReLode</small></li>
              <li className="speakerNames"><span className="boldName">Jessawynne Parker,</span> <small>YouScience LLC</small></li>
              <li className="speakerNames"><span className="boldName">Carter Harris,</span> <small>HCA</small></li>
              <li className="speakerNames"><span className="boldName">Morgan Bortz,</span> <small>Asurion</small></li>
              <li className="speakerNames"><span className="boldName">Thomas Johnson,</span> <small>Asurion</small></li>

              <li className="speakerNames"><span className="boldName">Brad Lilly,</span> <small>Bluebook Media</small></li>
              <li className="speakerNames"><span className="boldName">Scott Tsuchiyama, </span> <small>GoNoodle</small></li>
              <li className="speakerNames"><span className="boldName">Christian Hall, </span> <small>GoNoodle</small></li>
              <li className="speakerNames"><span className="boldName">Brad Posey, </span> <small>EY</small></li>
              <li className="speakerNames"><span className="boldName">Amber Sharpe, </span> <small>HealthStream</small></li>
              <li className="speakerNames"><span className="boldName">Amanda Meyers, </span> <small>HealthStream</small></li>
              <li className="speakerNames"><span className="boldName">Lindsay Mulhollen, </span> <small>HealthStream</small></li>
              <li className="speakerNames"><span className="boldName">Melissa Robertson, </span> <small>HealthStream</small></li>


              </ul>
          </div>
            <h3 className="teachersInfo">...and our wonderful instruction team</h3>
            <p className="teacherNames">Brenda Long, Madi Peper, Adam Sheaffer, and Mo Silvera</p>
            <div className="groupImg">
              <img width="100%" src="images/fullcohortfun.jpg" alt="groupPhoto" />
            </div>
          </div>
      )
    }
}