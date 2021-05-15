import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const ReportBio = () => {
	let addBio = "Biographical Information";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const [bioData, setbioData] = useState({
		Gender: "",
		MaritalStatus: ""
	});

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addBio}</h1>
				<form className="user">
					<div className="row mb-4 mt-4 card shadow border-left-primary col-lg-11 mx-auto pt-5 pb-5">
						<div className="form-group row">
							<div className="col-sm-6">
								<label>Gender</label>
								<select
									className="form-control rounded  "
									id="Gender"
									onChange={e => setbioData({ ...bioData, Gender: e.target.value })}>
									<option value="">Select a Gender</option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
									<option value="Other">Other</option>
								</select>
							</div>
							<div className="col-sm-6">
								<label>Marital Status</label>
								<select
									className="form-control rounded "
									id="Gender"
									onChange={e => setbioData({ ...bioData, MaritalStatus: e.target.value })}>
									<option value="">Select a Marital Status</option>
									<option value="Single">Single</option>
									<option value="Married">Married</option>
									<option value="Divorced">Divorced</option>
									<option value="Other">Other</option>
								</select>
							</div>
						</div>
					</div>
					<button
						type="button"
						className="btn btn-primary"
						style={{ marginLeft: "42px" }}
						onClick={() => {
							actions.setCurrentReportBio(bioData.Gender, bioData.MaritalStatus);
							history.push("/repbio");
						}}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
