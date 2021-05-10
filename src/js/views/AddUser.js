import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { createAccount } from "../utilities/createAccount";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddUser = () => {
	let history = useHistory();
	const { actions } = useContext(Context);
	toast.configure();
	const [userData, setUserData] = useState({
		email: "",
		password: "",
		passwordConfirm: "",
		firstName: "",
		lastName: "",
		userType: "",
		HomePhone: ""
	});
	const [validationHomePhone, setvalidationHomePhone] = useState(false);
	const [validationEmail, setValidationEmail] = useState(false);
	const [validationPassword, setValidationPassword] = useState(false);
	const [validationFirstName, setValidationFirstName] = useState(false);
	const [validationLastName, setValidationLastName] = useState(false);
	const [validationUserType, setValidationUserType] = useState(false);
	const [validationPasswordConfirm, setvalidationPasswordConfirm] = useState(false);
	const [countRender, setCountRender] = useState(0);
	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (userData.password !== userData.passwordConfirm && countRender === 1) {
				toast.error("The passwords are not the same");
			} else if (
				!validationEmail &&
				!validationPassword &&
				!validationPasswordConfirm &&
				!validationLastName &&
				!validationFirstName &&
				!validationHomePhone &&
				validation
			) {
				createAcc(userData.email, userData.password);
			}
			setCountRender(countRender + 1);
			setValidation(false);
		},
		[validation]
	);
	const createAcc = async (email, password) => {
		try {
			await createAccount(email, password);
			actions.addUserData(userData);
			history.push("/demo");
			toast.success("Account created");
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
						<input
							type="password"
							onChange={e => setUserData({ ...userData, passwordConfirm: e.target.value })}
							className={validationPasswordConfirm ? "form-control is-invalid" : "form-control"}
							placeholder="Confirm Password"
						/>
						{validationPasswordConfirm && <p style={{ color: "red" }}>Please Confirm Password</p>}
					</div>
					<div className="mb-3 mt-3">
						<input
							type="tel"
							onChange={e => setUserData({ ...userData, HomePhone: e.target.value })}
							className={validationHomePhone ? "form-control is-invalid" : "form-control"}
							placeholder="Home Phone"
							minLength="10"
							maxLength="10"
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
							setvalidationPasswordConfirm(checkInput(userData.passwordConfirm));
							setValidationUserType(checkInput(userData.userType));
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
