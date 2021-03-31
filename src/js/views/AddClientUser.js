import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/logo-2.png";

export const AddClientUser = () => {
	let addIClientUser = "Create new Account";
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userType, setUsertype] = useState("Client");
	const [validationEmail, setValidationEmail] = useState(false);
	const [validationPassword, setValidationPassword] = useState(false);
	const [validationFirstName, setValidationFirstName] = useState(false);
	const [validationLastName, setValidationLastName] = useState(false);

	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (!validationEmail && !validationPassword && !validationLastName && !validationFirstName && validation) {
				// actions.addClientUser(email, password, firstName, lastName, userType);
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
			<div className="card" style={{ width: 300, margin: "auto", marginTop: "2%" }}>
				<img src={Logo} className="card-img-top" alt="Logo" />
				<div className="card-body">
					<div className="mb-3">
						<label>First Name</label>
						<input
							type="text"
							className={validationFirstName ? "form-control is-invalid" : "form-control"}
							onChange={e => setFirstName(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label>Last Name</label>
						<input
							type="text"
							className={validationLastName ? "form-control is-invalid" : "form-control"}
							onChange={e => setLastName(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label>Email</label>
						<input
							type="email"
							className={validationEmail ? "form-control is-invalid" : "form-control"}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label>Password</label>
						<input
							type="password"
							className={validationPassword ? "form-control is-invalid" : "form-control"}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div className="d-grid gap-1 d-md-flex justify-content-md-end">
						<div>
							<button
								type="button"
								className="btn btn-secondary btn-sm me-md-2 rounded-pill"
								onClick={() => {
									history.push("/");
								}}>
								Cancel
							</button>
						</div>
						<div>
							<button
								type="button"
								className="btn btn-primary btn-sm rounded-pill"
								style={{ marginLeft: 15 }}
								onClick={() => {
									setValidationFirstName(checkInput(firstName));
									setValidationLastName(checkInput(lastName));
									setValidationEmail(checkInput(email));
									setValidationPassword(checkInput(password));
									setValidation(true);
								}}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
