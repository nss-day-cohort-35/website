import React, { Component } from 'react'
import StudentCard from './StudentCard'
import APIManager from '../../modules/APIManager'

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
                    <h2>Here be the student list and all its contents that lie within yarrr...</h2>
                </div>
                {this.state.students.map(student => (
                    <StudentCard
                        student={student} />
                ))}
            </>
        )
    }
}