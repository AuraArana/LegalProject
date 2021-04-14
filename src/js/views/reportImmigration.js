import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const ReportImmigration = () => {
	let title = "Find by Immigration Information";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const [immigrationData, setImmigrationData] = useState({
		portEntry: "",
		immigrationStatus: "",
		nationality: ""
	});

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{title}</h1>
				<form className="user">
					<div className="form-group row">
						<div className="col-sm-4">
							<label>Immigration Status</label>
							<select
								className="form-control"
								onChange={e =>
									setImmigrationData({ ...immigrationData, immigrationStatus: e.target.value })
								}>
								<option selected />
								<option value="U.S. Citizens">U.S. Citizens</option>
								<option value="Permanent or Conditional Residents">
									Permanent or Conditional Residents
								</option>
								<option value="Undocumented">Undocumented</option>
							</select>
						</div>
						<div className="col-sm-4">
							<label>Port of Entry to USA</label>
							<select
								className="form-control"
								onChange={e => setImmigrationData({ ...immigrationData, portEntry: e.target.value })}>
								<option selected />
								<option value="Key West, Florida">Key West, Florida</option>
								<option value="Miami International Airport, Florida">
									Miami International Airport, Florida
								</option>
								<option value="Port Everglades/Fort Lauderdale, Florida">
									Port Everglades/Fort Lauderdale, Florida
								</option>
								<option value="Key West, Florida">Key West, Florida</option>
								<option value="West Palm Beach, Florida">West Palm Beach, Florida</option>
								<option value="Cape Canaveral, Florida">Cape Canaveral, Florida</option>
							</select>
						</div>
						<div className="col-sm-4">
							<label>Nationality</label>
							<select
								className="form-control"
								onChange={e => setImmigrationData({ ...immigrationData, nationality: e.target.value })}>
								<option selected />
								<option value="Afghans">Afghans</option>
								<option value="Albanians">Albanians</option>
								<option value="Cubana">Cubana</option>
								<option value="Americans">Americans</option>
								<option value="Andorrans">Andorrans</option>
								<option value="Angolans">Angolans</option>
							</select>
						</div>
					</div>

					<button
						type="button"
						className="btn btn-primary"
						onClick={() => {
							actions.setCurrentReportImmigration(
								immigrationData.portEntry,
								immigrationData.immigrationStatus,
								immigrationData.nationality
							);
							history.push("/repImmigration");
						}}>
						Search
					</button>
				</form>
			</div>
		</div>
	);
};
