import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Services = () => {
	let addBio = "Services";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const [Contract, setContract] = useState("");
	const [IntakeDate, setIntakeDate] = useState("");
	const [ReviewDate, setReviewDate] = useState("");
	const [FilingDate, setFilingDate] = useState("");
	const [ResolutionDate, setResolutionDate] = useState("");
	const [ResolutionOutcome, setResolutionOutcome] = useState("");
	const [Comments, setComments] = useState("");

	const [validationIntakeDate, setValidationIntakeDate] = useState(false);
	const [validationContract, setValidationContract] = useState(false);
	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (!validationIntakeDate && !validationContract && validation) {
				actions.updateTableServices(
					Contract,
					IntakeDate,
					ReviewDate,
					FilingDate,
					ResolutionDate,
					ResolutionOutcome,
					Comments
				);
				history.push("/services");
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

				<nav className="navbar ">
					<div className="ml-auto text-dark">
						<button
							type="button"
							className="btn btn-primary"
							data-toggle="modal"
							onClick={() => {
								IntakeDate = "";
							}}
							data-target="#exampleModal">
							Add services
						</button>

						<div
							className="modal fade bd-example-modal-xl"
							id="exampleModal"
							aria-labelledby="exampleModalLabel">
							<div className="modal-dialog modal-xl">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title  text-dark" id="exampleModalLabel">
											New Service
										</h5>
									</div>
									<div className="modal-body text-dark">
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
													onClick={e => setContract(e.target.value)}
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
												<div className="input-group date" data-provide="datepicker">
													<input type="text" className="form-control" />
													<div className="input-group-addon">
														<span className="glyphicon glyphicon-th" />
													</div>
												</div>

												<div className="row">
													<div className="col-md-10">
														<div className="input-group mb-3">
															<input
																type="text"
																className={
																	validationIntakeDate
																		? "form-control form-control-user rounded  is-invalid"
																		: "form-control form-control-user rounded"
																}
																placeholder="Intake Date"
																onChange={e => setIntakeDate(e.target.value)}
																required
															/>
															<div className="input-group-append">
																<span className="input-group-text" id="basic-addon2">
																	<i className="fas fa-calendar-alt" />
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-10">
														<div className="input-group mb-3">
															<input
																type="text"
																className="form-control"
																placeholder="Review Date"
																aria-label="Review Date"
																onChange={e => setReviewDate(e.target.value)}
																aria-describedby="basic-addon2"
															/>
															<div className="input-group-append">
																<span className="input-group-text" id="basic-addon2">
																	<i className="fas fa-calendar-alt" />
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-10">
														<div className="input-group mb-3">
															<input
																type="text"
																className="form-control"
																placeholder="Filing Date"
																aria-label="Filing Date"
																onChange={e => setFilingDate(e.target.value)}
																aria-describedby="basic-addon2"
															/>
															<div className="input-group-append">
																<span className="input-group-text" id="basic-addon2">
																	<i className="fas fa-calendar-alt" />
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-10">
														<div className="input-group mb-3">
															<input
																type="text"
																className="form-control"
																placeholder="ResolutionDate"
																aria-label="ResolutionDate"
																onChange={e => setResolutionDate(e.target.value)}
																aria-describedby="basic-addon2"
															/>
															<div className="input-group-append">
																<span className="input-group-text" id="basic-addon2">
																	<i className="fas fa-calendar-alt" />
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-10">
														<div className="input-group mb-3">
															<input
																type="text"
																className="form-control"
																placeholder="Resolution Outcome"
																aria-label="Resolution Outcome"
																onChange={e => setResolutionOutcome(e.target.value)}
																aria-describedby="basic-addon2"
															/>
															<div className="input-group-append">
																<span className="input-group-text" id="basic-addon2">
																	<i className="fas fa-user" />
																</span>
															</div>
														</div>
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
																onChange={e => setComments(e.target.value)}
																aria-describedby="basic-addon2"
															/>
															<div className="input-group-append">
																<span className="input-group-text" id="basic-addon2">
																	<i className="fas  fa-comment-alt" />
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-dismiss="modal">
													Close
												</button>
												<button
													type="button"
													className="btn btn-primary"
													data-dismiss="modal"
													aria-label="Close"
													onClick={() => {
														setValidationIntakeDate(checkInput(IntakeDate));
														setValidationContract(checkInput(Contract));
														setValidation(true);
													}}>
													Save
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>

				<div className="container-fluid">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">List of services</h6>
						</div>
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
											<th>Contract</th>
											<th>Intake Date</th>
											<th>Review / Acceptance date</th>
											<th>Filing Date</th>
											<th>Resolution Date</th>
											<th>Resolution Outcome</th>
											<th>Comments</th>
										</tr>
									</thead>

									<tbody>
										{store.TableServices &&
											store.TableServices.reverse().map((item, index) => {
												return (
													<tr key={index}>
														<td>{item.contract}</td>
														<td>{item.intakeDate}</td>
														<td>{item.reviewDate}</td>
														<td>{item.filingDate}</td>
														<td>{item.resolutionDate}</td>
														<td>{item.resolutionOutcome}</td>
														<td>{item.comments}</td>
													</tr>
												);
											})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				<form className="user">
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							setValidation(true);
						}}>
						save
					</button>
				</form>
			</div>
		</div>
	);
};
