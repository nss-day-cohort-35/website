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
                    <h2>The first half of our 6 month bootcamp journey started the same for all of us in our cohort by learning the basic foundations of web development. After presenting our frontend capstone projects of React applications, our class divided with part of us going towards frontend development focusing on UX/UI design elements and the other part diving more into server-side technology including C# and .NET . </h2>
                </div>
                {this.state.students.map(student => (
                    <StudentCard
                        student={student} />
                ))}
            </>
        )
    }
}