import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = props => {
	const { store, actions } = useContext(Context);
	//alert(store.User);
	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
				<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
				<a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
					<i className="fas fa-download fa-sm text-white-50" /> Generate Report
				</a>
			</div>

			<div className="row">
				<div className="col-xl-3 col-md-6 mb-4">
					<div className="card border-left-primary shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
										Earnings (Monthly)
									</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
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
										Earnings (Annual)
									</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
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
									<div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
									<div className="row no-gutters align-items-center">
										<div className="col-auto">
											<div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
										</div>
										<div className="col">
											<div className="progress progress-sm mr-2">
												<div
													className="progress-bar bg-info"
													role="progressbar"
													aria-valuenow="50"
													aria-valuemin="0"
													aria-valuemax="100"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="col-auto">
									<i className="fas fa-clipboard-list fa-2x text-gray-300" />
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
										Pending Requests
									</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
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
				<div className="col-xl-4 col-lg-5">
					<div className="card shadow mb-4">
						<div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
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
						</div>

						<div className="card-body">
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
				</div>

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
									aria-valuenow="80"
									aria-valuemin="0"
									aria-valuemax="100"
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
