import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Background from "../../img/login-background.png";
import Logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import { createAccount } from "../utilities/createAccount";
import "../../styles/home.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddClientUser = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	toast.configure();
	const [clientUserData, setClientUserData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
		HomePhone: "",
		userType: "Client"
	});
	const [validationHomePhone, setvalidationHomePhone] = useState(false);
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
			if (clientUserData.password.length < 6 && clientUserData.password.length > 0) {
				toast.error("Your password must be at least 6 characters long");
			} else if (clientUserData.password != clientUserData.confirmPassword) {
				toast.error("The passwords are not the same");
			} else if (
				!validationEmail &&
				!validationPassword &&
				!validationLastName &&
				!validationFirstName &&
				!validationHomePhone &&
				validation
			) {
				createAcc(clientUserData.email, clientUserData.password);
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
			toast.success("Account created");
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
						style={{ paddingTop: "18%", paddingLeft: "30%" }}>
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
							id="register-form"
							style={{
								width: 300,
								position: "absolute"
							}}>
							<div className="mb-3">
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
									id="password"
								/>
							</div>
							<div className="mb-3 mt-3">
								<input
									type="password"
									onChange={e =>
										setClientUserData({ ...clientUserData, passwordConfirm: e.target.value })
									}
									className={validationPassword ? "form-control is-invalid" : "form-control"}
									placeholder="Confirm Password"
									id="confirmPassword"
								/>
							</div>
							<div className="mb-3 mt-3">
								<input
									type="tel"
									onChange={e => setClientUserData({ ...clientUserData, HomePhone: e.target.value })}
									className={validationHomePhone ? "form-control is-invalid" : "form-control"}
									placeholder="Home Phone"
									minLength="10"
									maxLength="10"
								/>
							</div>
							<button
								className="btn btn-primary col-12 rounded-pill"
								onClick={e => {
									setValidationFirstName(checkInput(clientUserData.firstName));
									setValidationLastName(checkInput(clientUserData.lastName));
									setValidationEmail(checkInput(clientUserData.email));
									setValidationPassword(checkInput(clientUserData.password));
									setvalidationHomePhone(checkInput(clientUserData.HomePhone));
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
