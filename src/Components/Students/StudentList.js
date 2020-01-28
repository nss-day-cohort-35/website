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
			// console.log(students, "students")
			this.setState({
				students: students.cohort
			});
		});
	}


	render() {
		return (
			<>
				<div id="studentList">
					<h2 id="scroll" className="cohortIntroTitle">
						we are different and here's why:{" "}
					</h2>
					<p className="cohortDescription">
						Once we conquered our{" "}
						<span className="highlighted-text" id="cohortBeginning">
							frontend foundations
						</span>{" "}
						with a ReactJS capstone, we split into two complementary
            paths:{" "}
						<span className="paths">
							<span className="highlighted-text" id="cohortFrontend">
								UI/UX design</span>{" "}<br />
							and{" "}<br />
							<span className="highlighted-text" id="cohortBackend">
								.NET and C#.</span>{" "}
						</span>
						Our skillsets create user-centric frontend and backend
						applications.{" "}
					</p>
				</div>
				<div className="student-body">
					<div className="student-card-container">
						{this.state.students.map((student, index) => (
							<StudentCard student={student} key={index} />
						))}
					</div>
				</div>
			</>
		);
	}
}