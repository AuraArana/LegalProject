import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AppRequest = () => {
	let addApp = "Appointment Request";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const [addAppointment, setAddAppointment] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		Email: "",
		serviceNeeded: "",
		Contact: "",
		helpNeeded: "",
		caseNo: store.currentCase
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
									onChange={e => setAddAppointment({ ...addAppointment, Email: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-sm-12 mb-4">
							<label>What is the best and safest way to contact you?</label>
							<div className="form-check ml-5">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								<label className="form-check-label">Cell Phone</label>
							</div>
							<div className="form-check ml-5">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
								<label className="form-check-label">Email</label>
							</div>
							<div className="form-check ml-5">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
								<label className="form-check-label">WhatsApp</label>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group">
								<label>What immigration service do you require?</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									maxLength="500"
									onChange={e => {
										setAddAppointment({ ...addAppointment, serviceNeeded: e.target.value });
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
					<Link to={"/demo"}>
						<button
							type="button"
							className="btn btn-primary form-control col-3 mb-5"
							style={{ float: "right" }}
							onClick={() => {
								actions.addAppointment(setAddAppointment);
							}}>
							Submit Request
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};