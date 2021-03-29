import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddBio = () => {
	let addBio = "Biographical Information";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const [CaseNo, setCaseNo] = useState("");
	const [AlienNo, setAlienNo] = useState("");
	const [LastName, setLastName] = useState("");
	const [FirstName, setFirstName] = useState("");
	const [OtherNames, setOtherNames] = useState("");
	const [MiddleName, setMiddleName] = useState("");
	const [Gender, setGender] = useState("");
	const [DOB, setDOB] = useState("");
	const [address, setAddress] = useState("");
	const [MaritalStatus, setMaritalStatus] = useState("");
	const [City, setCity] = useState("");
	const [State, setState] = useState("");
	const [ZipCode, setZipCode] = useState("");
	const [HomePhone, setHomePhone] = useState("");
	const [WorkPhone, setWorkPhone] = useState("");
	const [Email, setEmail] = useState("");

	const [valEmail, setValEmail] = useState(false);

	const [validationEmail, setValidationEmail] = useState(false);
	const [validationZipCode, setValidationZipCode] = useState(false);
	const [validationHomePhone, setValidationHomePhone] = useState(false);
	const [validationState, setValidationState] = useState(false);
	const [validationCity, setValidationCity] = useState(false);
	const [validationDOB, setValidationDOB] = useState(false);
	const [validationCaseNo, setValidationCaseNo] = useState(false);
	const [validationLastName, setValidationLastName] = useState(false);
	const [validationFirstName, setValidationFirstName] = useState(false);
	const [validationPhone, setValidationPhone] = useState(false);
	const [validationAlienNo, setValidationAlienNo] = useState(false);
	const [validationAddress, setValidationAddress] = useState(false);
	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (
				!validationCaseNo &&
				!validationAlienNo &&
				!validationLastName &&
				!validationFirstName &&
				!validationCity &&
				!validationZipCode &&
				!validationHomePhone &&
				!validationAddress &&
				!validationEmail &&
				validation
			) {
				actions.addContact(CaseNo, phone, AlienNo, address);
				history.push("/");
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
									className={
										validationCaseNo
											? "form-control form-control-user is-invalid"
											: "form-control form-control-user"
									}
									placeholder="Case Number"
									onChange={e => setCaseNo(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Alien Number</label>
								<input
									type="text"
									className={
										validationAlienNo
											? "form-control form-control-user is-invalid"
											: "form-control form-control-user"
									}
									placeholder="Enter Alien number"
									onChange={e => setAlienNo(e.target.value)}
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
											? "form-control form-control-user is-invalid"
											: "form-control form-control-user"
									}
									placeholder="Enter Last Name"
									onChange={e => setLastName(e.target.value)}
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
											? "form-control form-control-user is-invalid"
											: "form-control form-control-user"
									}
									placeholder="Enter First Name"
									onChange={e => setFirstName(e.target.value)}
									required
								/>
							</div>
						</div>
					</div>

					<div className="form-group row">
						<div className="col-sm-6">
							<div className="form-group">
								<label>Middle Name</label>
								<input
									type="text"
									className="form-control form-control-user"
									placeholder="Enter Middle Name"
									onChange={e => setMiddleName(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Other Names</label>
								<input
									type="text"
									className="form-control form-control-user"
									placeholder="Enter Other Names"
									onChange={e => setOtherNames(e.target.value)}
									required
								/>
							</div>
						</div>
					</div>

					<div className="form-group row">
						<div className="col-sm-4">
							<label>Gender</label>
							<select className="form-control " id="Gender" onChange={e => setGender(e.target.value)}>
								<option value="">Select a Gender</option>
								<option value="M">Male</option>
								<option value="F">Female</option>
								<option value="O">Other*</option>
							</select>
						</div>
						<div className="col-sm-4">
							<label>Marital Status</label>
							<select
								className="form-control "
								id="Gender"
								onChange={e => setMaritalStatus(e.target.value)}>
								<option value="">Select a Marital Status</option>
								<option value="S">Single</option>
								<option value="M">Married</option>
								<option value="D">Divorced</option>
								<option value="O">Other*</option>
							</select>
						</div>
						<div className="col-sm-4">
							<div className="form-group">
								<label>DOB</label>
								<input
									type="text"
									className={
										validationDOB
											? "form-control form-control-user is-invalid"
											: "form-control form-control-user"
									}
									placeholder="Enter DOB"
									onChange={e => setDOB(e.target.value)}
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
											? "form-control is-invalid form-control-user"
											: "form-control form-control-user"
									}
									placeholder="Enter Home Phone"
									onChange={e => setHomePhone(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Work Phone</label>
								<input
									type="phone"
									className="form-control form-control-user"
									placeholder="Enter Work Phone"
									onChange={e => setWorkPhone(e.target.value)}
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
									? "form-control form-control-user is-invalid"
									: "form-control form-control-user"
							}
							placeholder="Enter Email"
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className={
								validationAddress
									? "form-control form-control-user is-invalid"
									: "form-control form-control-user"
							}
							placeholder="Enter address"
							onChange={e => setAddress(e.target.value)}
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
											? "form-control form-control-user is-invalid"
											: "form-control form-control-user"
									}
									placeholder="Enter City"
									onChange={e => setCity(e.target.value)}
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
											? "form-control form-control-user is-invalid"
											: "form-control form-control-user"
									}
									placeholder="Enter State"
									onChange={e => setState(e.target.value)}
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
											? "form-control form-control-user is-invalid"
											: "form-control form-control-user"
									}
									placeholder="Enter Zip Code"
									onChange={e => setZipCode(e.target.value)}
									required
								/>
							</div>
						</div>
					</div>

					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							setValidationCaseNo(checkInput(CaseNo));
							setValidationAlienNo(checkInput(AlienNo));
							setValidationLastName(checkInput(LastName));
							setValidationFirstName(checkInput(FirstName));
							setValidationDOB(checkInput(DOB));
							setValidationCity(checkInput(City));
							setValidationState(checkInput(State));
							setValidationZipCode(checkInput(ZipCode));
							setValidationEmail(checkInput(Email));

							setValidationAddress(checkInput(address));
							setValidationHomePhone(checkInput(HomePhone));
							setValidation(true);
						}}>
						save
					</button>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
