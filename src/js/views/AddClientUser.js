import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Background from "../../img/login-background.png";
import Logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import { createAccount } from "../utilities/createAccount";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";

export const AddClientUser = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [clientUserData, setClientUserData] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		userType: "Client"
	});

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
				createAcc(clientUserData.email, clientUserData.password);

				//  history.push("/");
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
			actions.addClientUserData(clientUserData);
			history.push("/");
			alert("Cuenta creada");
			return true;
		} catch (e) {
			alert(e.message);
			return false;
		}
	};

	return (
		<div className="">
			<div className="row">
				<div className="card d-flex flex-col position-relative" style={{ height: "100%", width: "50%" }}>
					<img src={Background} className="card-img rounded-0 ml-0" alt="..." />
					<div className="card-img-overlay d-flex justify-content-center">
						<img
							style={{
								width: 200,
								height: 200,
								marginRight: 0,
								marginLeft: 0,
								position: "absolute",
								top: "35%",
								opacity: 0.75
							}}
							src={Logo}
						/>
					</div>
				</div>
				<div className="d-flex flex-col position-relative col-6">
					<div
						className="position-absolute top-50 start-50 translate-middle mt-5"
						style={{ paddingTop: "20%", paddingLeft: "30%" }}>
						<h2 className="text-center" style={{ color: "#1d3652", width: 300 }}>
							CREATE NEW ACCOUNT
						</h2>
						<p
							className="text-center mt-2"
							style={{ color: "#50bfc3", width: 300 }}
							onClick={() => {
								history.push("/");
							}}>
							Already have an account? Click Here
						</p>
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
									onChange={e => setClientUserData({ ...clientUserData, firstName: e.target.value })}
									placeholder="First Name"
								/>
							</div>
							<div className="mb-3 mt-3">
								<input
									type="text"
									className={validationLastName ? "form-control is-invalid" : "form-control"}
									onChange={e => setClientUserData({ ...clientUserData, lastName: e.target.value })}
									placeholder="Last Name"
								/>
							</div>
							<div className="mb-3 mt-3">
								<input
									type="email"
									className={validationEmail ? "form-control is-invalid" : "form-control"}
									onChange={e => setClientUserData({ ...clientUserData, email: e.target.value })}
									placeholder="Email"
								/>
							</div>
							<div className="mb-3 mt-3">
								<input
									type="password"
									onChange={e => setClientUserData({ ...clientUserData, password: e.target.value })}
									className={validationPassword ? "form-control is-invalid" : "form-control"}
									placeholder="Password"
								/>
							</div>
							<button
								className="btn btn-primary col-12 rounded-pill"
								onClick={e => {
									setValidationFirstName(checkInput(clientUserData.firstName));
									setValidationLastName(checkInput(clientUserData.lastName));
									setValidationEmail(checkInput(clientUserData.email));
									setValidationPassword(checkInput(clientUserData.password));
									setValidation(true);
									e.preventDefault();
								}}>
								Create Account
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
