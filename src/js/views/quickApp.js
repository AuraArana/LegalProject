import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Background from "../../img/login-background.png";
import Logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import { createAccount } from "../utilities/createAccount";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";

export const QuickApp = () => {
	let addApp = "Appointment Request";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const [addAppointment, setAddAppointment] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		Email: "",
		emailStaff: "",
		serviceNeeded: "",
		Contact: "",
		helpNeeded: "",
		status: "Pending",
		startDateTime: "",
		endDateTime: "",
		classes: "color-1",
		additionalInformation: "",
		name: "Quick Appointment"
	});

	const [value, setValue] = useState(0);
	const [chars, setChars] = useState(0);
	const [maxChars, setMaxChars] = useState(500);
	const [color, setColor] = useState("grey");
	const [chars2, setChars2] = useState(0);
	const [maxChars2, setMaxChars2] = useState(500);
	const [color2, setColor2] = useState("grey");

	const checkInput = input => {
		return input === null || !input;
	};

	const handleChange = e => {
		var input = e.target.value;
		setChars(input.length);
	};

	useEffect(
		() => {
			if (chars < 500 && chars > 490) {
				setColor("red");
			}
			if (chars < 489 && chars > 480) {
				setColor("orange");
			}
			if (chars < 479 && chars > 0) {
				setColor("grey");
			}
		},
		[chars]
	);

	const handleChange2 = e => {
		var input = e.target.value;
		setChars2(input.length);
	};

	useEffect(
		() => {
			if (chars2 < 500 && chars2 > 490) {
				setColor2("red");
			}
			if (chars2 < 489 && chars2 > 480) {
				setColor2("orange");
			}
			if (chars2 < 479 && chars2 > 0) {
				setColor2("grey");
			}
		},
		[chars2]
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

				<div className="container d-flex flex-col position-relative col-6 pr-5 pl-5">
					<div>
						<h1 className="text-center mt-5">{addApp}</h1>
						<form className="user">
							<div className="form-group row">
								<div className="col-sm-12 mt-2">
									<p
										className="text-center"
										style={{
											fontSize: 14
										}}>
										To request an appointment, please fill out the form below and we will contact
										you within 24 hours to confirm your appointment.
									</p>
								</div>
								<div className="col-sm-6">
									<div className="form-group">
										<label>Last Name</label>
										<input
											type="text"
											className="form-control"
											aria-describedby="basic-addon1"
											onChange={e =>
												setAddAppointment({ ...addAppointment, lastName: e.target.value })
											}
										/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="form-group">
										<label>First Name</label>
										<input
											type="text"
											className="form-control"
											aria-describedby="basic-addon1"
											onChange={e =>
												setAddAppointment({ ...addAppointment, firstName: e.target.value })
											}
										/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="form-group">
										<label>Phone Number</label>
										<input
											type="text"
											className="form-control"
											aria-describedby="basic-addon1"
											onChange={e =>
												setAddAppointment({ ...addAppointment, phoneNumber: e.target.value })
											}
										/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="form-group">
										<label>Email</label>
										<input
											type="text"
											className="form-control"
											aria-describedby="basic-addon1"
											onChange={e =>
												setAddAppointment({ ...addAppointment, Email: e.target.value })
											}
										/>
									</div>
								</div>
								<div className="col-sm-12 mb-3">
									<label>What is the best and safest way to contact you?</label>
									<select
										className="form-control"
										onChange={e =>
											setAddAppointment({ ...addAppointment, Contact: e.target.value })
										}>
										<option selected />
										<option value="Cell Phone">Cell Phone</option>
										<option value="Email">Email</option>
										<option value="WhatsApp">WhatsApp</option>
									</select>
								</div>
								<div className="col-sm-12 mb-3">
									<label>What immigration service do you require?</label>
									<select
										className="form-control"
										onChange={e =>
											setAddAppointment({ ...addAppointment, serviceNeeded: e.target.value })
										}>
										<option selected />
										<option value="Temporary Work Visas">Temporary Work Visas</option>
										<option value="Resident Status">
											Resident Status (Immigrant Visas/Green Cards)
										</option>
										<option value="Corporate Matters">Corporate Matters</option>
										<option value="Citizenship">Citizenship</option>
										<option value="Other U.S. Immigration Matters">
											Other U.S. Immigration Matters
										</option>
									</select>
								</div>
								<div className="col-sm-12">
									<div className="form-group">
										<label>Please provide additional information on the service you require:</label>
										<textarea
											className="form-control"
											id="exampleFormControlTextarea1"
											rows="3"
											maxLength="500"
											onChange={e => {
												setAddAppointment({
													...addAppointment,
													additionalInformation: e.target.value
												});
												handleChange(e);
											}}
										/>
										<div id="the-count" style={{ float: "right", fontSize: 12 }}>
											<span id="current" style={{ color: color }}>
												{chars}
											</span>
											<span id="maximum"> / {maxChars}</span>
										</div>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="form-group">
										<label>
											Do you need help with services such as food or domestic violence shelter?
											(This is confidential)
										</label>
										<textarea
											className="form-control"
											id="exampleFormControlTextarea1"
											rows="3"
											maxLength="500"
											onChange={e => {
												setAddAppointment({ ...addAppointment, helpNeeded: e.target.value });
												handleChange2(e);
											}}
										/>
										<div id="the-count" style={{ float: "right", fontSize: 12 }}>
											<span id="current" style={{ color: color2 }}>
												{chars2}
											</span>
											<span id="maximum"> / {maxChars2}</span>
										</div>
									</div>
								</div>
							</div>
							<button
								type="button"
								className="btn btn-primary form-control col-3 mb-5"
								style={{ float: "left" }}
								onClick={() => {
									history.push("/");
								}}>
								Sign In
							</button>
							<button
								type="button"
								className="btn btn-primary form-control col-3 mb-5"
								style={{ float: "right" }}
								onClick={() => {
									actions.addAddAppointment(addAppointment);
									history.push("/demo");
								}}>
								Submit Request
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
