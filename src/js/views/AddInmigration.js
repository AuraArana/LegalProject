import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddInmigration = () => {
	let addInmigrationInfo = "Inmigration Information";
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [dateEntry, setDateEntry] = useState("");
	const [portEntry, setPortEntry] = useState("");
	const [inmigrationStatus, setInmigrationStatus] = useState("");
	const [transportation, setTransportation] = useState("");
	const [birthCountry, setBirthCountry] = useState("");
	const [birthCity, setBirthCity] = useState("");
	const [birthProvince, setBirthProvince] = useState("");
	const [nationality, setNationality] = useState("");
	const [educationLevel, setEducationLevel] = useState("");
	const [nativeLanguage, setNativeLanguage] = useState("");
	const [familyInUsa, setFamilyInUsa] = useState("");
	const [lprStatus, setLprStatus] = useState("");
	const [elegibityDate, setElegibityDate] = useState("");
	const [caseNo, setCaseNo] = useState("");
	/*const [validationDateEntry, setValidationDateEntry] = useState(false);
    const [validationPortEntry, setValidationPortEntry] = useState(false);
    const [validationInmigrationStatus, setValidationInmigrationStatus] = useState(false);
    const [validationTransportation, setValidationTransportation] = useState(false);
    const [validationBirthCountry, setValidationBirthCountry] = useState(false);
    const [validationBirthCity, setValidationBirthCity] = useState(false);
    const [validationBirthProvince, setValidationBirthProvince] = useState(false);
    const [validationNationality, setValidationNationality] = useState(false);
    const [validationEducationLevel, setValidationEducationLevel] = useState(false);
    const [validationNativeLanguage, setValidationNativeLanguage] = useState(false);
    const [validationFamilyInUsa, setValidationFamilyInUsa] = useState(false);
    const [validationLprStatus, setValidationLprStatus] = useState(false);
    const [validationElegibityDate, setValidationElegibityDate] = useState(false);
    const [validation, setValidation] = useState(false);*/

	/* const checkInput = input => {
        return input === null || !input;
    };
    useEffect(() => {
        if (!validationBirthCity && !validationBirthCountry && !validationBirthProvince && !validationDateEntry && !validationEducationLevel && !validationElegibityDate && !validationFamilyInUsa && !validationInmigrationStatus && !validationLprStatus && !validationNationality && !validationNativeLanguage && !validationPortEntry && !validationTransportation && validation) {
            actions.addInmigrationInfo(dateEntry, portEntry, transportation, inmigrationStatus, birthCountry, birthCity, birthProvince, nationality, nativeLanguage, educationLevel, familyInUsa, lprStatus, elegibityDate);
            history.push("/");
            setValidation(false);
        } else {
            setValidation(false);
        }
    }, [validation]);*/

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addInmigrationInfo}</h1>
				<form>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>Case number</label>
							<input
								type="text"
								required
								className="form-control"
								placeholder="Enter Case Number"
								onChange={e => setCaseNo(e.target.value)}
							/>
						</div>
						<div className="col-sm-6">
							<label>Inmigration Status</label>
							<select className="form-control" onChange={e => setInmigrationStatus(e.target.value)}>
								<option selected>Open this select menu</option>
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
								className="form-control"
								placeholder="Enter Date of Entry to USA"
								onChange={e => setDateEntry(e.target.value)}
							/>
						</div>
						<div className="col-sm-6">
							<label>DCF Elegibility Date</label>
							<input
								type="text"
								required
								className="form-control"
								placeholder="Enter DCF Elegibility Date"
								onChange={e => setElegibityDate(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>Port of Entry to USA</label>
							<select className="form-control" onChange={e => setPortEntry(e.target.value)}>
								<option selected>Open this select menu</option>
								<option value="1">Key West, Florida - 5202</option>
								<option value="2">Miami International Airport, Florida - 5206</option>
								<option value="3">Port Everglades/Fort Lauderdale, Florida - 5203</option>
								<option value="4">Key West, Florida - 5202</option>
								<option value="5">West Palm Beach, Florida - 5204</option>
								<option value="6">Cape Canaveral, Florida - 1816</option>
							</select>
						</div>
						<div className="col-sm-6">
							<label>Transportation</label>
							<select className="form-control" onChange={e => setTransportation(e.target.value)}>
								<option selected>Open this select menu</option>
								<option value="1">Maritime</option>
								<option value="2">Airplane</option>
							</select>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>Country of Birth</label>
							<select className="form-control" onChange={e => setBirthCountry(e.target.value)}>
								<option selected>Open this select menu</option>
								<option value="1">Afghanistan</option>
								<option value="2">Albania</option>
								<option value="3">Algeria</option>
								<option value="4">Andorra</option>
								<option value="5">Angola</option>
								<option value="6">Argentina</option>
							</select>
						</div>
						<div className="col-sm-6">
							<label>Province of Birth</label>
							<select className="form-control" onChange={e => setBirthProvince(e.target.value)}>
								<option selected>Open this select menu</option>
								<option value="1">Habana</option>
								<option value="2">Santiago</option>
								<option value="3">Matanzas</option>
								<option value="4">Mayabeque</option>
								<option value="5">Holguin</option>
								<option value="6">Granma</option>
							</select>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>City of Birth</label>
							<select className="form-control" onChange={e => setBirthCity(e.target.value)}>
								<option selected>Open this select menu</option>
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
							<select className="form-control" onChange={e => setNationality(e.target.value)}>
								<option selected>Open this select menu</option>
								<option value="1">Afghans</option>
								<option value="2">Albanians</option>
								<option value="3">Algerians</option>
								<option value="4">Americans</option>
								<option value="5">Andorrans</option>
								<option value="6">Angolans</option>
							</select>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>Native Language</label>
							<select className="form-control" onChange={e => setNativeLanguage(e.target.value)}>
								<option selected>Open this select menu</option>
								<option value="1">Mandarin Chinese</option>
								<option value="2">Spanish</option>
								<option value="3">English</option>
								<option value="4">Hindi</option>
								<option value="5">Bengali</option>
								<option value="6">Portuguese</option>
							</select>
						</div>
						<div className="col-sm-6">
							<label>Education Level</label>
							<select className="form-control" onChange={e => setEducationLevel(e.target.value)}>
								<option selected>Open this select menu</option>
								<option value="1">High school </option>
								<option value="2">Associate Degree</option>
								<option value="3">Bachelor Degree</option>
								<option value="4">Master Degree</option>
								<option value="5">Doctoral Degree</option>
							</select>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-6">
							<label>Valid LPR Card</label>
							<select className="form-control" onChange={e => setLprStatus(e.target.value)}>
								<option selected>Open this select menu</option>
								<option value="1">Yes</option>
								<option value="2">No</option>
							</select>
						</div>
						<div className="col-sm-6">
							<label>Family in USA</label>
							<select className="form-control" onChange={e => setFamilyInUsa(e.target.value)}>
								<option selected>Open this select menu</option>
								<option value="1">Yes</option>
								<option value="2">No</option>
							</select>
						</div>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							actions.addInmigrationInfo(
								caseNo,
								dateEntry,
								portEntry,
								transportation,
								inmigrationStatus,
								birthCountry,
								birthCity,
								birthProvince,
								nationality,
								nativeLanguage,
								educationLevel,
								familyInUsa,
								lprStatus,
								elegibityDate
							);
							history.push("/");
						}}>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};
