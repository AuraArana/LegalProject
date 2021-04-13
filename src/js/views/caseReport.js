import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

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
				<h1 className="h3 text-gray-800 text-center mt-5">{params.case}</h1>

				<div className="col-lg-10 mb-4 mt-4 mx-auto">
					<div className="card shadow mb-4">
						<div className="card-header center py-3">
							<h6 className="m-0 font-weight-bold text-primary">Biographical Information</h6>
						</div>
						<div className="card-body">
							<table className="table">
								<tr>
									<th scope="row" className="small font-weight-bold">
										Case No.
									</th>
									<td className="small">{caseNo}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Alien No.
									</th>
									<td className="small">{AlienNo}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Last Name
									</th>
									<td className="small">{LastName}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										First Name
									</th>
									<td className="small">{FirstName}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Gender
									</th>
									<td className="small">{Gender}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Marital Status
									</th>
									<td className="small">{MaritalStatus}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										DOB
									</th>
									<td className="small">{DOB}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Home Phone
									</th>
									<td className="small">{HomePhone}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Work Phone
									</th>
									<td className="small">{WorkPhone}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Email
									</th>
									<td className="small">{Email}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Address
									</th>
									<td className="small">{address}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										City
									</th>
									<td className="small">{City}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										State
									</th>
									<td className="small">{State}</td>
								</tr>
								<tr>
									<th scope="row" className="small font-weight-bold">
										Zip Code
									</th>
									<td className="small">{ZipCode}</td>
								</tr>
							</table>
						</div>
					</div>
				</div>

				<div className="col-lg-10 mb-4 mt-4 mx-auto">
					<div className="card shadow mb-4">
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
				</div>

				<div className="col-lg-10 mb-5 mt-4 mx-auto">
					<div className="card shadow mb-4">
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
				</div>

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
