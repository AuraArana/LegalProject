import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Background from "../../img/login-background.png";
import Logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";

export const AddClientUser = () => {
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
				actions.addClientUser(email, password, firstName, lastName, userType);
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
						style={{ paddingTop: "30%", paddingLeft: "30%" }}>
						<h2 className="text-center" style={{ color: "#1d3652" }}>
							CREATE NEW ACCOUNT
						</h2>
						<p
							className="text-center mt-2"
							style={{ color: "#50bfc3" }}
							onClick={() => {
								history.push("/");
							}}>
							Already have an account? Log in Here
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
									onChange={e => setFirstName(e.target.value)}
									placeholder="First Name"
								/>
							</div>
							<div className="mb-3 mt-3">
								<input
									type="text"
									className={validationLastName ? "form-control is-invalid" : "form-control"}
									onChange={e => setLastName(e.target.value)}
									placeholder="Last Name"
								/>
							</div>
							<div className="mb-3 mt-3">
								<input
									type="email"
									className={validationEmail ? "form-control is-invalid" : "form-control"}
									onChange={e => setEmail(e.target.value)}
									placeholder="Email"
								/>
							</div>
							<div className="mb-3 mt-3">
								<input
									type="password"
									onChange={e => setPassword(e.target.value)}
									className={validationPassword ? "form-control is-invalid" : "form-control"}
									placeholder="Password"
								/>
							</div>
							<button
								className="btn btn-primary col-12 rounded-pill"
								onClick={() => {
									setValidationFirstName(checkInput(firstName));
									setValidationLastName(checkInput(lastName));
									setValidationEmail(checkInput(email));
									setValidationPassword(checkInput(password));
									setValidation(true);
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