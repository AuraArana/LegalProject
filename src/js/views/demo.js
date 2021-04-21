import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Pie } from "react-chartjs-2";

import "../../styles/demo.scss";

export const Demo = props => {
	let history = useHistory();
	const { store, actions } = useContext(Context);

	let nroCase = store.ListClients.length;
	let totalFee = 0;
	let totalPayment = 0;
	let pendingServices = 0;
	let positiveServices = 0;
	let denyServices = 0;
	let caseN = "";

	for (let i in store.ListClients) {
		if (store.ListClients[i].Email === store.currentUser.email) {
			caseN = store.ListClients[i].caseNo;
		}
	}

	if (store.currentUser.userType != "Client") {
		for (let i in store.Ledger) {
			if (store.Ledger[i].Transaction === "Service Fee") {
				totalFee = totalFee + parseInt(store.Ledger[i].Amount);
			}

			if (store.Ledger[i].Transaction === "Payment") {
				totalPayment = totalPayment + parseInt(store.Ledger[i].Amount);
			}
		}

		for (let i in store.TableServices) {
			if (store.TableServices[i].ResolutionOutcome === "Ongoing") {
				pendingServices = pendingServices + 1;
			}
			if (store.TableServices[i].ResolutionOutcome === "Positive") {
				positiveServices = positiveServices + 1;
			}
			if (store.TableServices[i].ResolutionOutcome === "Deny") {
				denyServices = denyServices + 1;
			}
		}
	} else {
		nroCase = 1;
		for (let i in store.Ledger) {
			if (store.Ledger[i].Transaction === "Service Fee" && store.Ledger[i].caseNo === caseN) {
				totalFee = totalFee + parseInt(store.Ledger[i].Amount);
			}
		}

		for (let i in store.Ledger) {
			if (store.Ledger[i].Transaction === "Payment" && store.Ledger[i].caseNo === caseN) {
				totalPayment = totalPayment + parseInt(store.Ledger[i].Amount);
			}
		}

		for (let i in store.TableServices) {
			if (store.TableServices[i].ResolutionOutcome === "Ongoing" && store.TableServices[i].caseNo === caseN) {
				pendingServices = pendingServices + 1;
			}
		}
	}

	const data = {
		labels: ["Payments", "Services Fee"],
		datasets: [
			{
				data: [totalPayment, totalFee],
				backgroundColor: ["#36A2EB", "#FFCE56"],
				hoverBackgroundColor: ["#36A2EB", "#FFCE56"]
			}
		]
	};

	const data2 = {
		labels: ["Ongoing", "Positive", "Deny"],
		datasets: [
			{
				data: [pendingServices, positiveServices, denyServices],
				backgroundColor: ["#0000FF", "#008000", "#FF0000"],
				hoverBackgroundColor: ["#0000FF", "#008000", "#FF0000"]
			}
		]
	};

	//alert(store.User);
	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
				<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
				{/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
					<i className="fas fa-download fa-sm text-white-50" /> Generate Report
				</a> */}
			</div>

			<div className="row">
				<div className="col-xl-3 col-md-6 mb-4">
					<div className="card border-left-primary shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
										Total Cases
									</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">{nroCase}</div>
								</div>
								<div className="col-auto">
									<i className="fas fa-calendar fa-2x text-gray-300" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-xl-3 col-md-6 mb-4">
					<div className="card border-left-success shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-success text-uppercase mb-1">
										Earnings (Services)
									</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">${totalFee}</div>
								</div>
								<div className="col-auto">
									<i className="fas fa-dollar-sign fa-2x text-gray-300" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-xl-3 col-md-6 mb-4">
					<div className="card border-left-info shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-info text-uppercase mb-1">
										Earnings (Payments)
									</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">${totalPayment}</div>
								</div>
								<div className="col-auto">
									<i className="fas fa-dollar-sign fa-2x text-gray-300" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-xl-3 col-md-6 mb-4">
					<div className="card border-left-warning shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
										Pending Services
									</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">{pendingServices}</div>
								</div>
								<div className="col-auto">
									<i className="fas fa-comments fa-2x text-gray-300" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{store.currentUser.userType != "Client" ? (
				<div className="row">
					<div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h6 className="m-0 font-weight-bold text-primary">EARNINGS </h6>
							</div>
							<div className="card-body">
								<Pie data={data} />
							</div>
						</div>
					</div>

					<div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h6 className="m-0 font-weight-bold text-primary">SERVICES </h6>
							</div>
							<div className="card-body">
								<Pie data={data2} />
							</div>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

Demo.propTypes = {
	history: PropTypes.object,
	item: PropTypes.object,
	onDelete: PropTypes.func,
	location: PropTypes.object,
	fill2: PropTypes.string,
	detail: PropTypes.string
};
