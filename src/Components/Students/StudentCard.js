import React, { Component } from 'react'

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
                <div class="student-pic-container" onMouseLeave={() => { this.toggleLeave() }} onMouseOver={() => { this.toggle() }}>
                    {this.state.hover == true ?
                        <img class="student-pic" src={`./images/${this.props.student.funImg}`} />
                        : <img class="student-pic" src={`./images/${this.props.student.proImg}`} />}
                </div>
                <p>{this.props.student.firstName} {this.props.student.lastName}</p>
                <p>{this.props.student.concentration}</p>
                <p>{this.props.student.quote}</p>
                <a href={`${this.props.student.github}`}>
                    <img alt={`${this.props.student.github}`} src="./images/icons-and-logos/cohort35website_githubicon-01.png">
                    </img>
                </a>
                <a href={`${this.props.student.linkedIn}`}>
                    <img alt={`${this.props.student.linkedIn}`} src="./images/icons-and-logos/cohort35website_linkedinicon-01.png">
                    </img>
                </a>
                <a href={`${this.props.student.email}`}>
                    <img alt={`${this.props.student.email}`} src="./images/icons-and-logos/cohort35website_emailicon-01.png">
                    </img>
                </a>
                <a href={`${this.props.student.portfolio}`}>
                    <img alt={`${this.props.student.portfolio}`} src="./images/icons-and-logos/cohort35website_websiteicon-01.png">
                    </img>
                </a>
                {this.props.student.dribbble ?
                    <a href={`${this.props.student.dribbble}`}>
                    <img alt={`${this.props.student.dribbble}`} src="./images/icons-and-logos/cohort35website_dribbleicon-01.png">
                    </img>
                </a> : null}
            </>
        )
    }
}