import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
	return (
		<div className="Programs" id="programs">
			{/* Header */}
			<div className="programs-header">
				<span className="stroke-text">Explore our</span>
				<span>Programs</span>
				<span className="stroke-text">to shape you</span>
			</div>

			<div className="programs-catagories">
				{programsData.map((program) => (
					<div className="catagory">
						{program.image}
						<span>{program.heading}</span>
						<span>{program.details}</span>
						<div className="join-now">
							<span>
								Join Now
								<img src={RightArrow} alt="" />
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Programs;
