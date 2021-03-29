import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import Background from "../../img/login-background.png";
import Logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";

export const Home = ({ validCredentials }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();
	let yourData = "Finol";
	// const { store } = useContext(Context);
	//	console.log("store", store.credentials);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const credentialsList = store.credentials;

	const checkLogin = (email, password) => {
		for (let i in store.credentials) {
			if (store.credentials[i].email === email && store.credentials[i].password === password) {
				validCredentials();
				break;
			}
		}
		return false;
	};
	const navigate = () => history.push({ pathname: "/demo", state: { isLoggedIn: true } });

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="card d-flex flex-col position-relative col-sm-8">
					<img src={Background} className="card-img rounded-0" alt="..." />
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
				<div className="d-flex flex-col position-relative col-sm-4">
					<form
						className="user position-absolute top-50 start-50 translate-middle"
						style={{
							position: "absolute",
							top: "35%",
							marginRight: "10%"
						}}>
						<div className="mb-3">
							<input
								type="email"
								onChange={e => setEmail(e.target.value)}
								className="form-control form-control-user"
								placeholder="Enter Email"
							/>
						</div>
						<div className="mb-3">
							<input
								type="password"
								onChange={e => setPassword(e.target.value)}
								className="form-control form-control-user"
								placeholder="Enter Password"
							/>
						</div>
						<div className="mb-3 form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
							<label className="form-check-label" form="exampleCheck1">
								Check me out
							</label>
						</div>
						<button
							className="btn btn-primary"
							onClick={() =>
								checkLogin(email, password) == true ? navigate() : alert("wrong credentials")
							}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	validCredentials: PropTypes.func
};
