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
                    <h2 id="scroll" className="cohortIntroTitle">we are different and here's why: </h2>
                    <p className="cohortDescription">While past cohorts have stayed together for the entire 6 month bootcamp, halfway through we split into two complementary focuses. We started the journey as one learning <span id="cohortBeginning"> foundations of frontend development, </span> presenting React applications as our Capstone projects.
                    Part of us went on to <span id="cohortFrontend"> concentrate on UI/UX design </span> and others to <span id="cohortBackend"> server-side .NET and C#. </span> Combined, we join those skillsets to create user-centric front and backend applications. </p>
                </div>
                <div className="student-body">
                <div className="student-card-container">
                {this.state.students.map(student => (
                    <StudentCard
                        student={student} />
                ))}
                </div>
                </div>
            </>
        )
    }
}