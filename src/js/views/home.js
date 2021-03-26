import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Background from "../../img/login-background.png";
import Logo from "../../img/logo.png";
import "../../styles/home.scss";

export const Home = () => (
	<div className="row">
		<div className="d-flex flex-col position-relative" style={{ width: 700 }}>
			<img src={Background} className="card-img rounded-0" alt="..." />
			<div className="card-img-overlay ">
				<img src={Logo} style={{ width: 200 }} className="" />
			</div>
		</div>
		<div className="d-flex flex-col position-relative" style={{ width: 700 }}>
			<form className="position-absolute top-50 start-50 translate-middle">
				<div className="mb-3">
					<input type="email" className="form-control" placeholder="Enter Email" />
				</div>
				<div className="mb-3">
					<input type="password" className="form-control" placeholder="Enter Password" />
				</div>
				<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" form="exampleCheck1">
						Check me out
					</label>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	</div>
);
