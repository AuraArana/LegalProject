import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AppRequest = ({ name }) => {
	let addApp = "Appointment Request";
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const services = ["", ...store.listOfServices];
	console.log("services", services);

	const [addAppointment, setAddAppointment] = useState({
		firstName: store.currentUser.firstName,
		lastName: store.currentUser.lastName,
		phoneNumber: store.currentUser.email,
		Email: store.currentUser.HomePhone,
		emailStaff: "",
		serviceNeeded: "",
		Contact: "",
		helpNeeded: "",
		status: "Pending",
		startDateTime: "",
		endDateTime: "",
		classes: "color-1",
		additionalInformation: "",
		name: "Meeting with " + store.currentUser.firstName + " " + store.currentUser.lastName
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
		<div className="container">
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
								To request an appointment, please fill out the form below and we will contact you within
								24 hours to confirm your appointment.
							</p>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Last Name</label>
								<input
									value={store.currentUser.lastName}
									disabled
									type="text"
									className="form-control"
									aria-describedby="basic-addon1"
									onChange={e => setAddAppointment({ ...addAppointment, lastName: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>First Name</label>
								<input
									type="text"
									disabled
									value={store.currentUser.firstName}
									className="form-control"
									aria-describedby="basic-addon1"
									onChange={e => setAddAppointment({ ...addAppointment, firstName: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Phone Number</label>
								<input
									type="text"
									disabled
									className="form-control"
									aria-describedby="basic-addon1"
									value={store.currentUser.HomePhone}
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
									disabled
									className="form-control"
									aria-describedby="basic-addon1"
									value={store.currentUser.email}
									onChange={e => setAddAppointment({ ...addAppointment, Email: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-sm-6 mb-3">
							<label>What is the best and safest way to contact you?</label>
							<select
								defaultValue=""
								className="form-control"
								onChange={e => setAddAppointment({ ...addAppointment, Contact: e.target.value })}>
								{/* <option selected /> */}
								<option value="">Select Contact</option>
								<option value="Cell Phone">Cell Phone</option>
								<option value="Email">Email</option>
								<option value="WhatsApp">WhatsApp</option>
							</select>
						</div>
						<div className="col-sm-6 mb-3">
							<label>What immigration service do you require?</label>
							<select
								defaultValue=""
								className="form-control"
								onChange={e => setAddAppointment({ ...addAppointment, serviceNeeded: e.target.value })}>
								{services.map((service, index) => {
									return (
										<option key={index} value={service.Desc}>
											{service.Desc}
										</option>
									);
								})}
								{/* <option value="Temporary Work Visas">Temporary Work Visas</option>
								<option value="Resident Status">Resident Status (Immigrant Visas/Green Cards)</option>
								<option value="Corporate Matters">Corporate Matters</option>
								<option value="Citizenship">Citizenship</option>
								<option value="Other U.S. Immigration Matters">Other U.S. Immigration Matters</option> */}
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
										setAddAppointment({ ...addAppointment, additionalInformation: e.target.value });
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
									Do you need help with services such as food or domestic violence shelter? (This is
									confidential)
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
	);
};
AppRequest.propTypes = {
	name: PropTypes.string
};
