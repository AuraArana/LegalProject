import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

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
				<h1 className="text-center mt-5">{params.case}</h1>

				<div className="container-fluid">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">{caseNo}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{AlienNo}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{LastName}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{FirstName}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{MaritalStatus}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{City}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{State}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{ZipCode}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{Email}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{HomePhone}</h6>
							<h6 className="m-0 font-weight-bold text-primary">{WorkPhone}</h6>
						</div>
					</div>
				</div>

				<div className="container-fluid">
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
				</div>

				<div className="container-fluid">
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
				</div>
			</div>
		</div>
	);
};
