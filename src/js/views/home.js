import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import Background from "../../img/login-background.png";
import Logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const history = useHistory();
	const { store } = useContext(Context);
	console.log("store", store.credentials);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const credentialsList = store.credentials;
	const checkLogin = (email, password) => {
		return false;
	};
	const navigate = () => history.push("/demo");
	return (
		<div className="row">
			<div className="card d-flex flex-col position-relative" style={{ width: 700 }}>
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
			<div className="d-flex flex-col position-relative" style={{ width: 700 }}>
				<form className="position-absolute top-50 start-50 translate-middle">
					<div className="mb-3">
						<input
							type="email"
							onChange={e => setEmail(e.target.value)}
							className="form-control"
							placeholder="Enter Email"
						/>
					</div>
					<div className="mb-3">
						<input
							type="password"
							onChange={e => setPassword(e.target.value)}
							className="form-control"
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
						onClick={() => (!checkLogin() == true ? navigate() : alert("wrong credentials"))}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
