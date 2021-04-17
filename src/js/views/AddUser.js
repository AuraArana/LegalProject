import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Background from "../../img/login-background.png";
import Logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";

export const AddUser = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [userData, setUserData] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		userType: ""
	});
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
				actions.addUserData(userData);
				history.push("/demo");
				setValidation(false);
			} else {
				setValidation(false);
			}
		},
		[validation]
	);

	return (
		<div className="">
			<div
				className="position-absolute top-50 start-50 translate-middle"
				style={{ paddingTop: "8%", paddingLeft: "35%" }}>
				<h1 className="text-center">Create New User</h1>
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
							onChange={e => setUserData({ ...userData, firstName: e.target.value })}
							placeholder="First Name"
						/>
					</div>
					<div className="mb-3 mt-3">
						<input
							type="text"
							className={validationLastName ? "form-control is-invalid" : "form-control"}
							onChange={e => setUserData({ ...userData, lastName: e.target.value })}
							placeholder="Last Name"
						/>
					</div>
					<div className="mb-3 mt-3">
						<input
							type="email"
							className={validationEmail ? "form-control is-invalid" : "form-control"}
							onChange={e => setUserData({ ...userData, email: e.target.value })}
							placeholder="Email"
						/>
					</div>
					<div className="mb-3 mt-3">
						<input
							type="password"
							onChange={e => setUserData({ ...userData, password: e.target.value })}
							className={validationPassword ? "form-control is-invalid" : "form-control"}
							placeholder="Password"
						/>
					</div>
					<div className="mb-3 mt-3">
						<select
							className={validationUserType ? "form-control is-invalid" : "form-control"}
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
						}}>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};
