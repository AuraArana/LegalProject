import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddInmigrationInfo = () => {
	let addInmigrationInfo = "Add a new Inmigration Information";
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
    

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(() => {
			actions.addInmigrationInfo(dateEntry, portEntry, transportation, inmigrationStatus, birthCountry, birthCity, birthProvince, nationality, nativeLanguage, educationLevel, familyInUsa, lprStatus, elegibityDate);
			history.push("/");
			setValidation(false);
		
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addContact}</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className={validationName ? "form-control is-invalid" : "form-control"}
							placeholder="Full Name"
							onChange={e => setName(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className={validationEmail ? "form-control is-invalid" : "form-control"}
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className={validationPhone ? "form-control is-invalid" : "form-control"}
							placeholder="Enter phone"
							onChange={e => setPhone(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className={validationAddress ? "form-control is-invalid" : "form-control"}
							placeholder="Enter address"
							onChange={e => setAddress(e.target.value)}
							required
						/>
					</div>

					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							setValidationName(checkInput(name));
							setValidationEmail(checkInput(email));
							setValidationAddress(checkInput(address));
							setValidationPhone(checkInput(phone));
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
