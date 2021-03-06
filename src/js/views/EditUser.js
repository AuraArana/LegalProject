import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { useParams } from "react-router-dom";

export const EditUser = props => {
	const params = useParams();
	let history = useHistory();
	const { store, actions } = useContext(Context);
	let Email = store.currentUser.email;
	let pos = 1000000000;

	for (let i in store.credentials) {
		if (store.credentials[i].email === Email) {
			pos = i;
		}
	}
	const credentials = store.credentials[pos];
	const [userData, setUserData] = useState({
		firstName: credentials ? credentials.firstName : "",
		lastName: credentials ? credentials.lastName : "",
		HomePhone: credentials ? credentials.HomePhone : "",
		email: Email,
		userType: store.currentUser.userType
	});
	const [id, setId] = useState(credentials ? credentials.id : "");
	const [validationFirstName, setValidationFirstName] = useState(false);
	const [validationLastName, setValidationLastName] = useState(false);
	const [validationHomePhone, setvalidationHomePhone] = useState(false);
	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (!validationLastName && !validationFirstName && !validationHomePhone && validation) {
				actions.addUserData(userData, id);
				const obj = {
					firstName: userData.firstName,
					lastName: userData.lastName,
					email: userData.email,
					userType: userData.userType,
					HomePhone: userData.HomePhone
				};
				actions.setCurrentUser(obj);
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
							type="tel"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							value={userData.HomePhone}
							onChange={e => setUserData({ ...userData, HomePhone: e.target.value })}
							className={validationHomePhone ? "form-control is-invalid" : "form-control"}
							placeholder="Home Phone"
							minLength="10"
							maxLength="10"
						/>
					</div>
					<button
						className="btn btn-primary col-12 rounded-pill"
						onClick={e => {
							setValidationFirstName(checkInput(userData.firstName));
							setValidationLastName(checkInput(userData.lastName));
							setvalidationHomePhone(checkInput(userData.HomePhone));
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
