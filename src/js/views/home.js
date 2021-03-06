import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import Background from "../../img/login-background.png";
import Logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import { signIn } from "../utilities/signIn";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import { quickApp } from "../views/quickApp.js";

export const Home = ({ validCredentials }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const credentialsList = store.credentials;
	let FirstName = "";
	let LastName = "";
	let UserType = "";
	let HomePhone = "";

	const checkLogin = async (email, password) => {
		try {
			await signIn(email, password);
			for (let i in store.credentials) {
				if (store.credentials[i].email === email) {
					FirstName = store.credentials[i].firstName;
					LastName = store.credentials[i].lastName;
					email = store.credentials[i].email;
					UserType = store.credentials[i].userType;
					HomePhone = store.credentials[i].HomePhone;
				}
			}

			const obj = {
				firstName: FirstName,
				lastName: LastName,
				email: email,
				userType: UserType,
				HomePhone: HomePhone
			};

			actions.setCurrentUser(obj);
			validCredentials();
			history.push("/demo");
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
						{/* // style={{ width: 200, height: 200, marginRight: 0, marginLeft: 0 }} */}
						<img
							style={{
								width: 200,
								height: 200,
								marginRight: 0,
								marginLeft: 0,
								// display: "flex",
								// justifyContent: "center",
								// alignItems: "center",
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
						style={{ paddingTop: "25%", paddingLeft: "30%" }}>
						<h2 className="text-center" style={{ color: "#1d3652", width: 300 }}>
							SIGN IN
						</h2>
						<p
							className="text-center 
                            mt-2"
							style={{ color: "#50bfc3", width: 300, cursor: "pointer" }}
							onClick={() => {
								history.push("/addClientUser");
							}}>
							Create an Account
						</p>
						<form
							className="user"
							style={{
								width: 300,
								position: "absolute"
							}}>
							<div className="mb-3">
								<input
									type="email"
									onChange={e => setEmail(e.target.value)}
									className="form-control form-control-user rounded"
									placeholder="Enter Email"
								/>
							</div>
							<div className="mb-3">
								<input
									type="password"
									onChange={e => setPassword(e.target.value)}
									className="form-control form-control-user rounded"
									placeholder="Enter Password"
								/>
							</div>
							{/* <div className="mb-3 form-check">
								<input type="checkbox" className="form-check-input" id="exampleCheck1" />
								<label className="form-check-label" form="exampleCheck1">
									Remember Me
								</label>
							</div> */}
							<button
								className="btn btn-primary col-12 mb-2 rounded-pill"
								onClick={e => {
									checkLogin(email, password);
									e.preventDefault();
								}}>
								Sign In
							</button>
							<button
								className="btn btn-primary col-12 rounded-pill"
								style={{ backgroundColor: "#2c7596", outlineColor: "#2c7596" }}
								onClick={() => {
									history.push("/quickApp");
								}}>
								Request Appointment
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	validCredentials: PropTypes.func
};
