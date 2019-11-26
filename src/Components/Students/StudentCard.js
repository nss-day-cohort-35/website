import React, { Component } from 'react'
import './Students.css'

export default class StudentCard extends Component {

    state = {
        hover: false
    }

    componentDidMount() {
        this.setState({
            hover: false
        });
    }

    toggle = () => {
        this.setState(({
            hover: true
        }))
    }
    toggleLeave = () => {
        this.setState(({
            hover: false
        }))
    }

    render() {
        return (
            <>
                <div className="student-card-background">
                <div class="student-pic-container" onMouseLeave={() => { this.toggleLeave() }} onMouseOver={() => { this.toggle() }}>
                    {this.state.hover == true ?
                        <img class="student-pic" src={`./images/${this.props.student.funImg}`} />
                        : <img class="student-pic" src={`./images/${this.props.student.proImg}`} />}
                </div>
                
                        <p className="student-about">{this.props.student.firstName} {this.props.student.lastName}</p>
                    <p className="student-about">{this.props.student.concentration}</p>
                    <p className="student-about">{this.props.student.quote}</p>
                    <a className="student-about" href={`${this.props.student.github}`} />
                        
                        
                        
                <div className="student-logo-container">

                        <img className="student-logo" alt={`${this.props.student.github}`} src="./images/icons-and-logos/cohort35website_githubicon-01.png">
                    </img>

                <a href={`${this.props.student.linkedIn}`}>
                        <img className="student-logo" alt={`${this.props.student.linkedIn}`} src="./images/icons-and-logos/cohort35website_linkedinicon-01.png">
                    </img>
                </a>
                <a href={`${this.props.student.email}`}>
                        <img className="student-logo" alt={`${this.props.student.email}`} src="./images/icons-and-logos/cohort35website_emailicon-01.png">
                    </img>
                </a>
                <a href={`${this.props.student.portfolio}`}>
                        <img className="student-logo" alt={`${this.props.student.portfolio}`} src="./images/icons-and-logos/cohort35website_websiteicon-01.png">
                    </img>
                </a>
                {this.props.student.dribbble ?
                    <a href={`${this.props.student.dribbble}`}>
                            <img className="student-logo" alt={`${this.props.student.dribbble}`} src="./images/icons-and-logos/cohort35website_dribbleicon-01.png">
                    </img>
                </a> : null}
                </div>
                </div>
            </>

        )
    }
}