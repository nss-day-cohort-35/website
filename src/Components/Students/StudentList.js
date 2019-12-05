import React, { Component } from 'react'
import StudentCard from './StudentCard'
import APIManager from '../../modules/APIManager'
import './Students.css'

export default class StudentList extends Component {
    state = {
        students: [],
        studentsFS: [],
        studentsUX: [],
        sort: "AZ"
    }

    componentDidMount() {
        let newState = {}
        APIManager.getAll().then(students => {
            console.log(students, "students")
            newState.students = students.cohort
            return students
        }).then(students => {
            console.log("hello", students.cohort)
            const FSstudents = this.sortByFS(students.cohort)
            newState.studentsFS = FSstudents
            const UXstudents = this.sortByUX(students.cohort)
            newState.studentsUX = UXstudents
            this.setState(newState
                // students: students.cohort,
                // studentsFS: FSstudents,
                // studentsUX: UXstudents
            )
        });
    }

    sortByFS = (studentsArray) => {
        let FSstudents = studentsArray.filter(FSstudent => FSstudent.concentration === "Full Stack Web Developer"
        )
        return FSstudents
    }

    sortByUX = (studentsArray) => {
        let UXstudents = studentsArray.filter(UXstudent =>
            UXstudent.concentration === "Frontend Web Designer/Developer")
        return UXstudents
    }

    setSort = (sortType) => {
        this.setState({
            sort: sortType
        })
    }

    render() {
        return (
            <>
                <div>
                    <h2 id="scroll" className="cohortIntroTitle">we are different and here's why: </h2>
                    <p className="cohortDescription">Once we conquered our <span id="cohortBeginning"> frontend foundations </span> with a ReactJS capstone, we split into two complementary paths: <span id="cohortFrontend"> UI/UX design </span> and <span id="cohortBackend"> .NET and C#. </span> Our joint skillsets create user-centric front and backend applications. </p>
                </div>
                <div className="sort-container">
                    <button
                        onClick={() => this.setSort("AZ")}>A-Z</button>
                    <button
                        onClick={() => this.setSort("FullStack")}>FullStack</button>
                    <button
                        onClick={() => this.setSort("UIUX")}>UI/UX</button>
                </div>
                <div className="student-body">
                    <div className="student-card-container">
                        {this.state.sort === "FullStack" ?
                            <>
                                    {this.state.studentsFS.map(student => (
                                        <StudentCard
                                            student={student} />))}
                                    {this.state.studentsUX.map(student => (
                                        <StudentCard
                                            student={student} />))}
                            </>
                            : ""
                        }
                        {this.state.sort === "UIUX" ?
                            <>
                                {this.state.studentsUX.map(student => (
                                    <StudentCard
                                        student={student} />))}
                                {this.state.studentsFS.map(student => (
                                    <StudentCard
                                        student={student} />))}
                            </> :
                            ""}
                        {this.state.sort === "AZ" ?
                            this.state.students.map(student => (
                                <StudentCard
                                    student={student} />)) : ""}
                    </div>
                </div>
            </>
        )
    }
}