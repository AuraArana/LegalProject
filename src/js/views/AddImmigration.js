import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddImmigration = () => {
	let addImmigrationInfo = "Immigration Information";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const [immigrationData, setImmigrationData] = useState({
		dateEntry: "",
		portEntry: "",
		immigrationStatus: "",
		transportation: "",
		birthCountry: "",
		birthCity: "",
		nationality: "",
		caseNo: store.currentCase
	});

	const [validationCaseNo, setValidationCaseNo] = useState(false);
	const [validationDateEntry, setValidationDateEntry] = useState(false);
	const [validationPortEntry, setValidationPortEntry] = useState(false);
	const [validationImmigrationStatus, setValidationImmigrationStatus] = useState(false);
	const [validationTransportation, setValidationTransportation] = useState(false);
	const [validationBirthCountry, setValidationBirthCountry] = useState(false);
	const [validationBirthCity, setValidationBirthCity] = useState(false);
	const [validationNationality, setValidationNationality] = useState(false);
	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (
				!validationCaseNo &&
				!validationBirthCity &&
				!validationBirthCountry &&
				!validationDateEntry &&
				!validationImmigrationStatus &&
				!validationNationality &&
				!validationPortEntry &&
				!validationTransportation &&
				validation
			) {
				//console.log("addNewData");
				actions.addImmigrationData(immigrationData);
				history.push("/demo");
				setValidation(false);
			} else {
				setValidation(false);
			}
		},
		[validation]
	);
	//	console.log("immigration data", immigrationData);
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addImmigrationInfo}</h1>
				<form>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>Case number</label>
							<input
								type="text"
								required
								className="form-control"
								disabled
								value={store.currentCase}
								// onChange={e => setImmigrationData({ ...immigrationData, caseNo: e.target.value })}
							/>
						</div>
						<div className="col-sm-6">
							<label>Immigration Status</label>
							<select
								className={validationImmigrationStatus ? "form-control is-invalid" : "form-control"}
								onChange={e =>
									setImmigrationData({ ...immigrationData, immigrationStatus: e.target.value })
								}>
								<option selected />
								<option value="1">U.S. Citizens</option>
								<option value="2">Permanent or Conditional Residents</option>
								<option value="3">Undocumented</option>
							</select>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>Date of Entry to USA</label>
							<input
								type="text"
								required
								className={validationDateEntry ? "form-control is-invalid" : "form-control"}
								onChange={e => setImmigrationData({ ...immigrationData, dateEntry: e.target.value })}
							/>
						</div>
						<div className="col-sm-6">
							<label>Port of Entry to USA</label>
							<select
								className={validationPortEntry ? "form-control is-invalid" : "form-control"}
								onChange={e => setImmigrationData({ ...immigrationData, portEntry: e.target.value })}>
								<option selected />
								<option value="1">Key West, Florida - 5202</option>
								<option value="2">Miami International Airport, Florida - 5206</option>
								<option value="3">Port Everglades/Fort Lauderdale, Florida - 5203</option>
								<option value="4">Key West, Florida - 5202</option>
								<option value="5">West Palm Beach, Florida - 5204</option>
								<option value="6">Cape Canaveral, Florida - 1816</option>
							</select>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>Transportation</label>
							<select
								className={validationTransportation ? "form-control is-invalid" : "form-control"}
								onChange={e =>
									setImmigrationData({ ...immigrationData, transportation: e.target.value })
								}>
								<option selected />
								<option value="1">Maritime</option>
								<option value="2">Airplane</option>
							</select>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>Country of Birth</label>
							<select
								className={validationBirthCountry ? "form-control is-invalid" : "form-control"}
								onChange={e =>
									setImmigrationData({ ...immigrationData, birthCountry: e.target.value })
								}>
								<option selected />
								<option value="1">Afghanistan</option>
								<option value="2">Albania</option>
								<option value="3">Algeria</option>
								<option value="4">Andorra</option>
								<option value="5">Angola</option>
								<option value="6">Argentina</option>
							</select>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>City of Birth</label>
							<select
								className={validationBirthCity ? "form-control is-invalid" : "form-control"}
								onChange={e => setImmigrationData({ ...immigrationData, birthCity: e.target.value })}>
								<option selected />
								<option value="1">Tokyo</option>
								<option value="2">Delhi</option>
								<option value="3">Shanghai</option>
								<option value="4">São Paulo</option>
								<option value="5">Mexico City</option>
								<option value="6">Dhaka</option>
							</select>
						</div>
						<div className="col-sm-6">
							<label>Nationality</label>
							<select
								className={validationNationality ? "form-control is-invalid" : "form-control"}
								onChange={e => setImmigrationData({ ...immigrationData, nationality: e.target.value })}>
								<option selected />
								<option value="1">Afghans</option>
								<option value="2">Albanians</option>
								<option value="3">Algerians</option>
								<option value="4">Americans</option>
								<option value="5">Andorrans</option>
								<option value="6">Angolans</option>
							</select>
						</div>
					</div>

					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							// actions.addImmigrationData(immigrationData);
							setValidationBirthCity(checkInput(immigrationData.birthCity));
							setValidationBirthCountry(checkInput(immigrationData.birthCountry));
							// setValidationCaseNo(checkInput(immigrationData.caseNo));
							setValidationDateEntry(checkInput(immigrationData.dateEntry));
							setValidationImmigrationStatus(checkInput(immigrationData.immigrationStatus));
							setValidationNationality(checkInput(immigrationData.nationality));
							setValidationPortEntry(checkInput(immigrationData.portEntry));
							setValidationTransportation(checkInput(immigrationData.transportation));
							setValidation(true);
						}}>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};
