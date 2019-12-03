import React, { Component } from 'react'
import StudentCard from './StudentCard'
import APIManager from '../../modules/APIManager'
import './Students.css'

export default class StudentList extends Component {
    state = {
        students: []
    }

    componentDidMount() {
        APIManager.getAll().then(students => {
            console.log(students, "students")
            this.setState({
                students: students.cohort
            });
        });
    }


    render() {
        return (
            <>
                <div>
                    <h2 className="cohortIntroTitle">we are different than most cohorts: </h2>
                    <p className="cohortDescription">Others stay on the same track for the entire 6-month bootcamp, but we split into two complementary focuses. We started the journey learning basic <span id="cohortBeginning"> foundations of front-end development </span> , presenting React applications as our capstone projects.
                    Halfway through, some of us <span id="cohortFrontend"> concentrated in UI/UX design </span> and others on <span id="cohortBackend"> server-side .NET and C#. </span> Combined, we join those skillsets to create user-centric front and backend applications. </p>
                </div>
                <div className="student-card-container">
                {this.state.students.map(student => (
                    <StudentCard
                        student={student} />
                ))}
                </div>
            </>
        )
    }
}