import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const ServiceStatusForm = () => {
	let addBio = "Service status";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const [bioData, setbioData] = useState({
		ResolutionOutcome: ""
	});

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addBio}</h1>
				<form className="user">
					<div className="form-group row">
						<div className="row mb-4 mt-4 card shadow border-left-primary col-lg-11 mx-auto pt-5 pb-5">
							<div className="col-sm-6">
								<label>Resolution Outcome</label>
								<select
									className="form-control rounded  "
									id="ResolutionOutcome"
									onChange={e => setbioData({ ...bioData, ResolutionOutcome: e.target.value })}>
									<option value="">Select a service status</option>
									<option value="Ongoing">Ongoing</option>
									<option value="Positive">Positive</option>
									<option value="Deny">Deny</option>
									<option value="Close">Close</option>
								</select>
							</div>
						</div>
					</div>
					<button
						type="button"
						className="btn btn-primary"
						style={{ marginLeft: "33px" }}
						onClick={() => {
							actions.setCurrentReportSE(bioData.ResolutionOutcome);
							history.push("/servicestatusreport");
						}}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
