import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import female from "../../img/Untitled.png";
import male from "../../img/male.png";
import MikePhoto from "../../img/Untitled.png";

export const CaseReport = () => {
	let addBio = "Case";
	const params = useParams();
	let history = useHistory();
	const { store, actions } = useContext(Context);

	let id = params.case;
	let pos = 0;
	let Contract = "";
	let dateEntry = "";
	let portEntry = "";
	let immigrationStatus = "";
	let transportation = "";
	let birthCountry = "";
	let MaritalStatus = "";
	let birthCity = "";
	let caseNo = "";
	let AlienNo = "";
	let LastName = "";
	let FirstName = "";
	let DOB = "";
	let Gender = "";
	let nationality = "";
	let address = "";
	let City = "";
	let State = "";
	let ZipCode = "";
	let Email = "";
	let HomePhone = "";
	let WorkPhone = "";

	let attorneyPhone = "";
	let criminalAttorney = "";
	let arrestRecord = "";
	let followUp = "";
	let caseGoal = "";
	let legalProblem = "";

	for (let i in store.ListClients) {
		if (store.ListClients[i].caseNo === id) {
			caseNo = store.ListClients[i].caseNo;
			AlienNo = store.ListClients[i].AlienNo;
			LastName = store.ListClients[i].LastName;
			FirstName = store.ListClients[i].FirstName;
			DOB = store.ListClients[i].DOB;
			Gender = store.ListClients[i].Gender;
			MaritalStatus = store.ListClients[i].MaritalStatus;
			address = store.ListClients[i].address;
			City = store.ListClients[i].City;
			State = store.ListClients[i].State;
			ZipCode = store.ListClients[i].ZipCode;
			Email = store.ListClients[i].Email;
			HomePhone = store.ListClients[i].HomePhone;
			WorkPhone = store.ListClients[i].WorkPhone;
		}
	}

	for (let i in store.immigrationArr) {
		if (store.immigrationArr[i].caseNo === id) {
			dateEntry = store.immigrationArr[i].dateEntry;
			portEntry = store.immigrationArr[i].portEntry;
			immigrationStatus = store.immigrationArr[i].immigrationStatus;
			transportation = store.immigrationArr[i].transportation;
			birthCountry = store.immigrationArr[i].birthCountry;
			birthCity = store.immigrationArr[i].birthCity;
			nationality = store.immigrationArr[i].nationality;
		}
	}

	for (let i in store.legalArr) {
		if (store.legalArr[i].caseNo === id) {
			legalProblem = store.legalArr[i].legalProblem;
			caseGoal = store.legalArr[i].caseGoal;
			followUp = store.legalArr[i].followUp;
			arrestRecord = store.legalArr[i].arrestRecord;
			criminalAttorney = store.legalArr[i].criminalAttorney;
			attorneyPhone = store.legalArr[i].attorneyPhone;
		}
	}
	return (
		<div className="container">
			<div>
				<h1 className="h3 text-gray-800 mt-5 text-center">{params.case}</h1>
				{/* <div className="border-bottom my-auto mx-auto mt-3 col-9" /> */}

				<div className="col-lg-10 mb-4 mt-4 mx-auto">
					<div className="card shadow mb-4">
						<div className="card-header center py-3">
							<h6 className="m-0 font-weight-bold text-primary">Biographical Information</h6>
						</div>
						<div className="card-body">
							<div className="container">
								<div className="row">
									<div className="col-4 col-md-3 px-0 mx-auto">
										<img
											src={MikePhoto}
											alt="Mike Anamendolla"
											className="rounded-circle mx-auto d-block img-fluid"
										/>
										<p className="small font-weight-bold text-center mt-3">
											{LastName}, {FirstName}
										</p>
									</div>
									<div className="col-8 table ml-5">
										<tr>
											<th scope="row bordertop-white" className="small font-weight-bold">
												Case #:
											</th>
											<td className="small" colSpan="2">
												{caseNo}
											</td>
											<th scope="row pl-1" className="small font-weight-bold">
												Alien #:
											</th>
											<td className="small" colSpan="2">
												{AlienNo}
											</td>
										</tr>
										<tr>
											<th scope="row" className="small font-weight-bold">
												Gender:
											</th>
											<td className="small" colSpan="2">
												{Gender}
											</td>
											<th scope="row" className="small font-weight-bold">
												Date of Birth:
											</th>
											<td className="small" colSpan="2">
												{DOB}
											</td>
										</tr>
										<tr>
											<th scope="row" className="small font-weight-bold">
												Marital Status:
											</th>
											<td className="small" colSpan="2">
												{MaritalStatus}
											</td>
											<th scope="row" className="small font-weight-bold">
												Email:
											</th>
											<td className="small" colSpan="2">
												{Email}
											</td>
										</tr>
										<tr>
											<th scope="row" className="small font-weight-bold">
												Home Phone:
											</th>
											<td className="small" colSpan="2">
												{HomePhone}
											</td>
											<th scope="row" className="small font-weight-bold">
												Work Phone:
											</th>
											<td className="small" colSpan="2">
												{WorkPhone}
											</td>
										</tr>
										<tr>
											<th scope="row" className="small font-weight-bold">
												Address:
											</th>
											<td className="small" colSpan="5">
												{address}
											</td>
										</tr>
										<tr>
											<th scope="row" className="small font-weight-bold">
												City:
											</th>
											<td className="small">{City}</td>
											<th scope="row" className="small font-weight-bold">
												State:
											</th>
											<td className="small">{State}</td>
											<th scope="row" className="small font-weight-bold">
												Zip Code:
											</th>
											<td className="small">{ZipCode}</td>
										</tr>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className="nav-link active"
							id="home-tab"
							data-bs-toggle="tab"
							data-bs-target="#home"
							type="button"
							role="tab"
							aria-controls="home"
							aria-selected="true">
							Home
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#profile"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false">
							Profile
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="contact-tab"
							data-bs-toggle="tab"
							data-bs-target="#contact"
							type="button"
							role="tab"
							aria-controls="contact"
							aria-selected="false">
							Contact
						</button>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
						...
					</div>
					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						...
					</div>
					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						...
					</div>
				</div>

				{/* <ul className="nav nav-tabs mx-auto small font-weight-bold col-lg-9" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className="nav-link active"
							id="immigration-tab"
							data-bs-toggle="tab"
							data-bs-target="#immigration"
							type="button"
							role="tab"
							aria-controls="immigration"
							aria-selected="true">
							Immigration Information
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="legal-tab"
							data-bs-toggle="tab"
							data-bs-target="#legal"
							type="button"
							role="tab"
							aria-controls="legal"
							aria-selected="false">
							Legal, Criminal Record
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="services-tab"
							data-bs-toggle="tab"
							data-bs-target="#services"
							type="button"
							role="tab"
							aria-controls="services"
							aria-selected="false">
							Services
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="documents-tab"
							data-bs-toggle="tab"
							data-bs-target="#documents"
							type="button"
							role="tab"
							aria-controls="documents"
							aria-selected="false">
							Documents
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="ledger-tab"
							data-bs-toggle="tab"
							data-bs-target="#ledger"
							type="button"
							role="tab"
							aria-controls="ledger"
							aria-selected="false">
							Ledger
						</button>
					</li>
				</ul> */}

				{/* <div className="tab-content col-lg-10 mb-5 mt-4 mx-auto" id="myTabContent">
					<div
						className="tab-pane fade show active card shadow mb-4"
						id="immigration"
						role="tabpanel"
						aria-labelledby="immigration-tab">
						<div className="card-header center py-3">
							<h6 className="m-0 font-weight-bold text-primary">Immigration Information</h6>
						</div>
						<div className="card-body">
							<table className="table">
								<tr>
									<th scope="row" className="small font-weight-bold">
										Immigration Status
									</th>
									<td className="small">{immigrationStatus}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Date of Entry to USA
									</th>
									<td className="small">{dateEntry}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Port of Entry to USA
									</th>
									<td className="small">{portEntry}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Transportation
									</th>
									<td className="small">{transportation}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										City of Birth
									</th>
									<td className="small">{birthCity}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Country of Birth
									</th>
									<td className="small">{birthCountry}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Nationality
									</th>
									<td className="small">{nationality}</td>
								</tr>
							</table>
						</div>
					</div>
					<div
						className="card shadow mb-4 tab-pane fade"
						id="legal"
						role="tabpanel"
						aria-labelledby="legal-tab">
						<div className="card-header center py-3">
							<h6 className="m-0 font-weight-bold text-primary">Legal Criminal Record</h6>
						</div>
						<div className="card-body">
							<table className="table">
								<tr>
									<th scope="row" className="small font-weight-bold">
										Legal Problem
									</th>
									<td className="small">{legalProblem}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Case Goal
									</th>
									<td className="small">{caseGoal}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Follow-Up
									</th>
									<td className="small">{followUp}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Arrest Record
									</th>
									<td className="small">{arrestRecord}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Criminal Attorneys Name
									</th>
									<td className="small">{criminalAttorney}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Criminal Attorney Phone
									</th>
									<td className="small">{attorneyPhone}</td>
								</tr>
							</table>
						</div>
					</div>
				</div> */}

				{/* <h6 className="m-0 font-weight-bold text-primary">{caseNo}</h6>
					<h6 className="m-0 font-weight-bold text-primary">{AlienNo}</h6>
					<h6 className="m-0 font-weight-bold text-primary">{LastName}</h6>
					<h6 className="m-0 font-weight-bold text-primary">{FirstName}</h6>
					<h6 className="m-0 font-weight-bold text-primary">{MaritalStatus}</h6>
					<h6 className="m-0 font-weight-bold text-primary">{City}</h6>
					<h6 className="m-0 font-weight-bold text-primary">{State}</h6>
					<h6 className="m-0 font-weight-bold text-primary">{ZipCode}</h6>
					<h6 className="m-0 font-weight-bold text-primary">{Email}</h6>
					<h6 className="m-0 font-weight-bold text-primary">{HomePhone}</h6>
					<h6 className="m-0 font-weight-bold text-primary">{WorkPhone}</h6> */}

				{/* <div className="container-fluid">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">{dateEntry}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{portEntry}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{immigrationStatus}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{transportation}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{birthCountry}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{birthCity}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{nationality}</h6>
						</div>
					</div>
				</div> */}

				{/* <div className="container-fluid">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">{legalProblem}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{caseGoal}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{followUp}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{arrestRecord}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{criminalAttorney}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{attorneyPhone}</h6>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};
