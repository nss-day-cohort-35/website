import React, { Component } from 'react'
import StudentCard from './StudentCard'

export default class StudentList extends Component {
state = {
    students: []
}

componentDidMount() {
    APIManager.getAll("students").then(students => {
        this.setState({
            students: students
        });
    });
}


    render() {
        return (
            <>
                <div>
                    <h1>Here be the student list and all its contents that lie within yarrr...</h1>
                </div>
                {this.state.students.map(student => (
                <StudentCard />
                ))}
            </>
        )
    }
}