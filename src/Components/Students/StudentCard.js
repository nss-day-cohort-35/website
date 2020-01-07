import React, { Component } from "react";
import "./Students.css";

export default class StudentCard extends Component {
	state = {
		hover: false
	};

	componentDidMount() {
		this.setState({
			hover: false
		});
	}

	toggle = () => {
		this.setState({
			hover: true
		});
	};
	toggleLeave = () => {
		this.setState({
			hover: false
		});
	};

	render() {
		return (
			<>
				<div
					className={
						this.props.student.concentration ===
						"Full Stack Web Developer"
							? "student-card-background"
							: "student-card-background-UX"
					}
				>
					<h3 className="student-about concentration">
						{this.props.student.concentration}
					</h3>
					<div
						className="student-pic-container"
						onMouseLeave={() => {
							this.toggleLeave();
						}}
						onMouseOver={() => {
							this.toggle();
						}}
					>
						{this.state.hover === true ? (
							<img
								className="student-pic"
                alt={`${this.props.student.firstName} ${this.props.student.lastName}`}
								src={`./images/${this.props.student.funImg}`}
							/>
						) : (
							<img
								className="student-pic"
                  alt={`${this.props.student.firstName} ${this.props.student.lastName}`}
								src={`./images/${this.props.student.proImg}`}
							/>
						)}
					</div>

					<div className="student-about-container">
						<h2 className="student-about">
							{this.props.student.firstName}{" "}
							{this.props.student.lastName}
						</h2>

						<p className="student-about">
							{this.props.student.quote}
						</p>
						<p className="student-about author">
							{this.props.student.author}
						</p>
					</div>

					<div className="student-logo-container">
            <a href={`${this.props.student.github}`} target="_blank" rel="noopener noreferrer">
							<img
								className="student-logo"
								alt={`${this.props.student.github}`}
								src="./images/icons-and-logos/cohort35website_githubicon-01.png"
							></img>
						</a>

            <a href={`${this.props.student.linkedIn}`} target="_blank" rel="noopener noreferrer">
							<img
								className="student-logo"
								alt={`${this.props.student.linkedIn}`}
								src="./images/icons-and-logos/cohort35website_linkedinicon-01.png"
							></img>
						</a>

            <a href={`${this.props.student.portfolio}`} target="_blank" rel="noopener noreferrer">
							<img
								className="student-logo"
								alt={`${this.props.student.portfolio}`}
								src="./images/icons-and-logos/interneticon-01.png"
							></img>
						</a>
						<a href={`mailto:${this.props.student.email}`}>
							<img
								className="student-logo"
								alt={`${this.props.student.email}`}
								src="./images/icons-and-logos/cohort35website_emailicon-01.png"
							></img>
						</a>
						{this.props.student.dribbble ? (
              <a href={`${this.props.student.dribbble}`} target="_blank" rel="noopener noreferrer">
								<img
									className="student-logo"
									alt={`${this.props.student.dribbble}`}
									src="./images/icons-and-logos/cohort35website_dribbleicon-01.png"
								></img>
							</a>
						) : null}
					</div>
				</div>
			</>
		);
	}
}
