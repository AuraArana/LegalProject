import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import { updateUser } from "../utilities/updateUser";

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
		firstName: credentials ? credentials.firstName : "",
		lastName: credentials ? credentials.lastName : ""
	});
	const [id, setId] = useState(credentials ? credentials.id : "");
	const [validationFirstName, setValidationFirstName] = useState(false);
	const [validationLastName, setValidationLastName] = useState(false);
	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			alert(Email);
			if (!validationLastName && !validationFirstName && validation) {
				store.addUserData(userData, id);
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

					<button
						className="btn btn-primary col-12 rounded-pill"
						onClick={e => {
							setValidationFirstName(checkInput(userData.firstName));
							setValidationLastName(checkInput(userData.lastName));
							setValidation(true);
							//e.preventDefault();
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
