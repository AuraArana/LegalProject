import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import { createAccount } from "../utilities/createAccount";

export const EditUser = props => {
	const params = useParams();
	let history = useHistory();
	const { store, actions } = useContext(Context);
	let Email = params.email;
	let pos = 1000000000;

	for (let i in store.credentials) {
		if (store.credentials[i].email === Email) {
			pos = i;
		}
	}
	const credentials = store.credentials[pos];
	const [userData, setUserData] = useState({
		email: credentials ? credentials.email : Email,
		password: credentials ? credentials.password : "",
		firstName: credentials ? credentials.firstName : "",
		lastName: credentials ? credentials.lastName : "",
		userType: credentials ? credentials.userType : ""
	});
	const [id, setId] = useState(credentials ? credentials.id : "");
	const [validationEmail, setValidationEmail] = useState(false);
	const [validationPassword, setValidationPassword] = useState(false);
	const [validationFirstName, setValidationFirstName] = useState(false);
	const [validationLastName, setValidationLastName] = useState(false);
	const [validationUserType, setValidationUserType] = useState(false);
	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (
				!validationEmail &&
				!validationPassword &&
				!validationLastName &&
				!validationFirstName &&
				!validationUserType &&
				validation
			) {
				createAcc(userData.email, userData.password);
				setValidation(false);
			} else {
				setValidation(false);
			}
		},
		[validation]
	);
	const createAcc = async (email, password) => {
		try {
			await createAccount(email, password);
			actions.addUserData(userData);
			history.push("/demo");
			return true;
		} catch (e) {
			alert(e.message);
			return false;
		}
	};

	return (
		<div className="">
			<div
				className="position-absolute top-50 start-50 translate-middle"
				style={{ paddingTop: "8%", paddingLeft: "35%" }}>
				<h1 className="text-center">Update Profile</h1>
				<form
					className="user"
					style={{
						width: 300,
						position: "absolute"
					}}>
					<div className="mb-3 mt-3">
						<input
							type="text"
							className={validationFirstName ? "form-control is-invalid" : "form-control"}
							value={userData.firstName}
							onChange={e => setUserData({ ...userData, firstName: e.target.value })}
							placeholder="First Name"
						/>
					</div>
					<div className="mb-3 mt-3">
						<input
							type="text"
							className={validationLastName ? "form-control is-invalid" : "form-control"}
							value={userData.lastName}
							onChange={e => setUserData({ ...userData, lastName: e.target.value })}
							placeholder="Last Name"
						/>
					</div>
					<div className="mb-3 mt-3">
						<input
							type="email"
							className={validationEmail ? "form-control is-invalid" : "form-control"}
							value={userData.email}
							onChange={e => setUserData({ ...userData, email: e.target.value })}
							placeholder="Email"
						/>
					</div>
					<div className="mb-3 mt-3">
						<input
							type="password"
							onChange={e => setUserData({ ...userData, password: e.target.value })}
							value={userData.password}
							className={validationPassword ? "form-control is-invalid" : "form-control"}
							placeholder="Password"
						/>
					</div>
					<div className="mb-3 mt-3">
						<select
							className={validationUserType ? "form-control is-invalid" : "form-control"}
							value={userData.userType}
							onChange={e => setUserData({ ...userData, userType: e.target.value })}>
							<option value="">User Type</option>
							<option value="Client">Client</option>
							<option value="Staff">Staff</option>
							<option value="Admin">Admin</option>
						</select>
					</div>
					<button
						className="btn btn-primary col-12 rounded-pill"
						onClick={e => {
							setValidationFirstName(checkInput(userData.firstName));
							setValidationLastName(checkInput(userData.lastName));
							setValidationEmail(checkInput(userData.email));
							setValidationPassword(checkInput(userData.password));
							setValidationUserType(checkInput(userData.userType));
							setValidation(true);
							e.preventDefault();
						}}>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};

EditUser.propTypes = {
	match: PropTypes.object
};
