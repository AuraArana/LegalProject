import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditServicesF = () => {
	let addBio = "Services";
	let history = useHistory();
	const params = useParams();
	const { store, actions } = useContext(Context);
	let Case = params.case;

	const [servicesData, setservicesData] = useState({
		Contract: "",
		IntakeDate: "",
		ReviewDate: "",
		FilingDate: "",
		ResolutionDate: "",
		ResolutionOutcome: "",
		Comments: "",
		caseNo: Case
	});

	const [validationIntakeDate, setValidationIntakeDate] = useState(false);
	const [validationContract, setValidationContract] = useState(false);
	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (!validationIntakeDate && !validationContract && validation) {
				actions.addServices(servicesData);
				history.push("/editServices/" + Case);
				setValidation(false);
			} else {
				setValidation(false);
			}
		},
		[validation]
	);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addBio}</h1>
				<form className="user">
					<div className="row">
						<div className="col-md-6">
							<select
								name="cars"
								id="cars"
								className={
									validationContract
										? "form-control form-control-user rounded  is-invalid"
										: "form-control form-control-user rounded"
								}
								onClick={e => setservicesData({ ...servicesData, Contract: e.target.value })}
								multiple
								style={{ height: "100%", width: "100%" }}>
								{store.listOfServices &&
									store.listOfServices.map((item, index) => {
										return (
											<option key={index} value={item.Desc}>
												{item.Desc}
											</option>
										);
									})}
							</select>
						</div>

						<div className="col-md-6">
							<div className="row">
								<div className="col-md-10">
									<div className="input-group mb-3">
										<input
											type="date"
											className={
												validationIntakeDate ? "form-control is-invalid" : "form-control"
											}
											placeholder="Intake Date"
											aria-label="Intake Date"
											onChange={e =>
												setservicesData({ ...servicesData, IntakeDate: e.target.value })
											}
											required
											aria-describedby="basic-addon2"
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-10">
									<div className="input-group mb-3">
										<input
											type="date"
											className="form-control"
											placeholder="Review Date"
											aria-label="Review Date"
											onChange={e =>
												setservicesData({ ...servicesData, ReviewDate: e.target.value })
											}
											aria-describedby="basic-addon2"
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-10">
									<div className="input-group mb-3">
										<input
											type="date"
											className="form-control"
											placeholder="Filing Date"
											aria-label="Filing Date"
											onChange={e =>
												setservicesData({ ...servicesData, FilingDate: e.target.value })
											}
											aria-describedby="basic-addon2"
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-10">
									<div className="input-group mb-3">
										<input
											type="date"
											className="form-control"
											placeholder="ResolutionDate"
											aria-label="ResolutionDate"
											onChange={e =>
												setservicesData({ ...servicesData, ResolutionDate: e.target.value })
											}
											aria-describedby="basic-addon2"
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-10">
									<select
										className={"form-control mb-3"}
										onChange={e =>
											setservicesData({ ...servicesData, ResolutionOutcome: e.target.value })
										}>
										<option value="Ongoing">Ongoing</option>
										<option value="Positive">Positive</option>
										<option value="Deny">Deny</option>
										<option value="Close">Close</option>
									</select>
								</div>
							</div>

							<div className="row">
								<div className="col-md-10">
									<div className="input-group mb-3">
										<input
											type="text"
											className="form-control"
											placeholder="Comments"
											aria-label="Comments"
											onChange={e =>
												setservicesData({ ...servicesData, Comments: e.target.value })
											}
											aria-describedby="basic-addon2"
										/>
									</div>
								</div>
							</div>
						</div>

						<button
							type="button"
							className="btn btn-primary mt-2"
							onClick={() => {
								setValidationIntakeDate(checkInput(servicesData.IntakeDate));
								setValidationContract(checkInput(servicesData.Contract));
								setValidation(true);
							}}>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
