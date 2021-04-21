import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Chart } from "react-google-charts";

import "../../styles/demo.scss";

export const Demo = props => {
	let history = useHistory();
	const { store, actions } = useContext(Context);

	let nroCase = store.ListClients.length;
	let totalFee = 0;
	let totalPayment = 0;
	let pendingServices = 0;
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
		}

		for (let i in store.Ledger) {
			if (store.Ledger[i].Transaction === "Payment") {
				totalPayment = totalPayment + parseInt(store.Ledger[i].Amount);
			}
		}

		for (let i in store.TableServices) {
			if (store.TableServices[i].ResolutionOutcome === "Ongoing") {
				pendingServices = pendingServices + 1;
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

			<div className="row">
				{/* <div className="col-xl-4 col-lg-5">
					<div className="card shadow mb-4"> */}
				{/* <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
							<h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
							<div className="dropdown no-arrow">
								<a
									className="dropdown-toggle"
									href="#"
									role="button"
									id="dropdownMenuLink"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									<i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
								</a>
								<div
									className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
									aria-labelledby="dropdownMenuLink">
									<div className="dropdown-header">Dropdown Header:</div>
									<a className="dropdown-item" href="#">
										Action
									</a>
									<a className="dropdown-item" href="#">
										Another action
									</a>
									<div className="dropdown-divider" />
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</div>
						</div> */}

				{/* <div className="card-body">
							<div className="chart-pie pt-4 pb-2">
								<canvas id="myPieChart" />
							</div>
							<div className="mt-4 text-center small">
								<span className="mr-2">
									<i className="fas fa-circle text-primary" /> Direct
								</span>
								<span className="mr-2">
									<i className="fas fa-circle text-success" /> Social
								</span>
								<span className="mr-2">
									<i className="fas fa-circle text-info" /> Referral
								</span>
							</div>
						</div>
					</div>
				</div> */}

				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Projects</h6>
						</div>
						<div className="card-body">
							<h4 className="small font-weight-bold">
								Server Migration <span className="float-right">20%</span>
							</h4>
							<div className="progress mb-4">
								<div
									className="progress-bar bg-danger"
									role="progressbar"
									aria-valuenow="20"
									aria-valuemin="0"
									aria-valuemax="100"
								/>
							</div>
							<h4 className="small font-weight-bold">
								Sales Tracking <span className="float-right">40%</span>
							</h4>
							<div className="progress mb-4">
								<div
									className="progress-bar bg-warning"
									role="progressbar"
									aria-valuenow="40"
									aria-valuemin="0"
									aria-valuemax="100"
								/>
							</div>
							<h4 className="small font-weight-bold">
								Customer Database <span className="float-right">60%</span>
							</h4>
							<div className="progress mb-4">
								<div
									className="progress-bar"
									role="progressbar"
									aria-valuenow="60"
									aria-valuemin="0"
									aria-valuemax="100"
								/>
							</div>
							<h4 className="small font-weight-bold">
								Payout Details <span className="float-right">80%</span>
							</h4>
							<div className="progress mb-4">
								<div
									className="progress-bar bg-info"
									role="progressbar"
									style={{ width: 100 }}
									aria-valuenow="800"
									aria-valuemin="0"
									aria-valuemax="10000"
								/>
							</div>
							<h4 className="small font-weight-bold">
								Account Setup <span className="float-right">Complete!</span>
							</h4>
							<div className="progress">
								<div
									className="progress-bar bg-success"
									role="progressbar"
									style={{ width: 100 }}
									aria-valuenow="100"
									aria-valuemin="0"
									aria-valuemax="100"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
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
