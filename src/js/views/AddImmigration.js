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
				!validationBirthCity &&
				!validationBirthCountry &&
				!validationDateEntry &&
				!validationImmigrationStatus &&
				!validationNationality &&
				!validationPortEntry &&
				!validationTransportation &&
				validation
			) {
				actions.addImmigrationData(immigrationData);
				history.push("/legalRecords");
				setValidation(false);
			} else {
				setValidation(false);
			}
		},
		[validation]
	);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addImmigrationInfo}</h1>
				<form>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>Case number</label>
							<input type="text" required className="form-control" disabled value={store.currentCase} />
						</div>
						<div className="col-sm-6">
							<label>Immigration Status</label>
							<select
								className={validationImmigrationStatus ? "form-control is-invalid" : "form-control"}
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
								<option value="Maritime">Maritime</option>
								<option value="Airplane">Airplane</option>
							</select>
						</div>
						<div className="col-sm-6">
							<label>City of Birth</label>
							<select
								className={validationBirthCity ? "form-control is-invalid" : "form-control"}
								onChange={e => setImmigrationData({ ...immigrationData, birthCity: e.target.value })}>
								<option selected />
								<option value="Buenos Aires">Buenos Aires</option>
								<option value="Bridgetown">Bridgetown</option>
								<option value="Brasilia">Brasilia</option>
								<option value="Caracas">Caracas</option>
								<option value="La Habana">La Habana</option>
								<option value="Montevideo">Montevideo</option>
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
								<option value="Argentina">Argentina</option>
								<option value="Barbados">Barbados</option>
								<option value="Brasil">Brasil</option>
								<option value="Cuba">Cuba</option>
								<option value="Uruguay">Uruguay</option>
								<option value="Venezuela">Venezuela</option>
							</select>
						</div>
						<div className="col-sm-6">
							<label>Nationality</label>
							<select
								className={validationNationality ? "form-control is-invalid" : "form-control"}
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
						className="btn btn-primary form-control col-3 mb-5"
						style={{ float: "right" }}
						onClick={() => {
							setValidationBirthCity(checkInput(immigrationData.birthCity));
							setValidationBirthCountry(checkInput(immigrationData.birthCountry));
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
