import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddBio = () => {
	let addBio = "Biographical Information";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	let caseN = "";

	if (store.currentUser.userType === "Client") {
		for (let i in store.ListClients) {
			if (store.ListClients[i].Email === store.currentUser.email) {
				history.push("/editBio/" + store.ListClients[i].caseNo);
				break;
			}
		}
	}

	const [bioData, setbioData] = useState({
		AlienNo: "",
		LastName: "",
		FirstName: "",
		Gender: "",
		DOB: "",
		address: "",
		MaritalStatus: "",
		City: "",
		State: "",
		ZipCode: "",
		HomePhone: "",
		WorkPhone: "",
		Email: "",
		caseNo: store.currentCase
	});

	const [valEmail, setValEmail] = useState(false);
	const [validationEmail, setValidationEmail] = useState(false);
	const [validationZipCode, setValidationZipCode] = useState(false);
	const [validationHomePhone, setValidationHomePhone] = useState(false);
	const [validationState, setValidationState] = useState(false);
	const [validationCity, setValidationCity] = useState(false);

	const [validationLastName, setValidationLastName] = useState(false);
	const [validationFirstName, setValidationFirstName] = useState(false);
	const [validationPhone, setValidationPhone] = useState(false);
	const [validationAddress, setValidationAddress] = useState(false);
	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (
				!validationLastName &&
				!validationFirstName &&
				!validationCity &&
				!validationZipCode &&
				!validationHomePhone &&
				!validationAddress &&
				!validationEmail &&
				validation
			) {
				actions.addBioData(bioData);
				history.push("/addImmigration");
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
				<h1 className="text-center mt-5">{addBio}</h1>
				<form className="user">
					<div className="form-group row">
						<div className="col-sm-6">
							<div className="form-group">
								<label>Case number</label>
								<input
									type="text"
									value={store.currentCase}
									disabled
									className={"form-control form-control-user rounded"}
									placeholder="Case Number"
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Alien Number</label>
								<input
									type="text"
									className={"form-control form-control-user rounded"}
									placeholder="Enter Alien number"
									onChange={e => setbioData({ ...bioData, AlienNo: e.target.value })}
									required
								/>
							</div>
						</div>
					</div>

					<div className="form-group row">
						<div className="col-sm-6">
							<div className="form-group">
								<label>Last Name</label>
								<input
									type="text"
									className={
										validationLastName
											? "form-control form-control-user rounded  is-invalid"
											: "form-control form-control-user rounded"
									}
									placeholder="Enter Last Name"
									onChange={e => setbioData({ ...bioData, LastName: e.target.value })}
									required
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>First Name</label>
								<input
									type="text"
									className={
										validationFirstName
											? "form-control form-control-user rounded  is-invalid"
											: "form-control form-control-user rounded"
									}
									placeholder="Enter First Name"
									onChange={e => setbioData({ ...bioData, FirstName: e.target.value })}
									required
								/>
							</div>
						</div>
					</div>

					<div className="form-group row">
						<div className="col-sm-4">
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
						<div className="col-sm-4">
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
						<div className="col-sm-4">
							<div className="form-group">
								<label>DOB</label>
								<input
									type="text"
									className={"form-control form-control-user rounded"}
									placeholder="Enter DOB"
									onChange={e => setbioData({ ...bioData, DOB: e.target.value })}
									required
								/>
							</div>
						</div>
					</div>

					<div className="form-group row">
						<div className="col-sm-6">
							<div className="form-group">
								<label>HomePhone</label>
								<input
									type="phone"
									className={
										validationHomePhone
											? "form-control is-invalid form-control-user rounded"
											: "form-control form-control-user rounded"
									}
									placeholder="Enter Home Phone"
									onChange={e => setbioData({ ...bioData, HomePhone: e.target.value })}
									required
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Work Phone</label>
								<input
									type="phone"
									className="form-control form-control-user rounded"
									placeholder="Enter Work Phone"
									onChange={e => setbioData({ ...bioData, WorkPhone: e.target.value })}
									required
								/>
							</div>
						</div>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className={
								validationEmail
									? "form-control form-control-user rounded  is-invalid"
									: "form-control form-control-user rounded"
							}
							placeholder="Enter Email"
							onChange={e => setbioData({ ...bioData, Email: e.target.value })}
							required
						/>
					</div>

					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className={
								validationAddress
									? "form-control form-control-user rounded  is-invalid"
									: "form-control form-control-user rounded"
							}
							placeholder="Enter address"
							onChange={e => setbioData({ ...bioData, address: e.target.value })}
							required
						/>
					</div>

					<div className="form-group row">
						<div className="col-sm-4">
							<div className="form-group">
								<label>City</label>
								<input
									type="text"
									className={
										validationCity
											? "form-control form-control-user rounded  is-invalid"
											: "form-control form-control-user rounded"
									}
									placeholder="Enter City"
									onChange={e => setbioData({ ...bioData, City: e.target.value })}
									required
								/>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="form-group">
								<label>State</label>
								<input
									type="text"
									className={
										validationState
											? "form-control form-control-user rounded  is-invalid"
											: "form-control form-control-user rounded"
									}
									placeholder="Enter State"
									onChange={e => setbioData({ ...bioData, State: e.target.value })}
									required
								/>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="form-group">
								<label>Zip Code</label>
								<input
									type="text"
									className={
										validationZipCode
											? "form-control form-control-user rounded  is-invalid"
											: "form-control form-control-user rounded"
									}
									placeholder="Enter Zip Code"
									onChange={e => setbioData({ ...bioData, ZipCode: e.target.value })}
									required
								/>
							</div>
						</div>
					</div>

					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							setValidationLastName(checkInput(bioData.LastName));
							setValidationFirstName(checkInput(bioData.FirstName));

							setValidationCity(checkInput(bioData.City));
							setValidationState(checkInput(bioData.State));
							setValidationZipCode(checkInput(bioData.ZipCode));
							setValidationEmail(checkInput(bioData.Email));
							setValidationAddress(checkInput(bioData.address));
							setValidationHomePhone(checkInput(bioData.HomePhone));
							setValidation(true);
						}}>
						save
					</button>
				</form>
			</div>
		</div>
	);
};
