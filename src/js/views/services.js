import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Services = () => {
	let addBio = "Services";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	//console.log("store.TableServices", store.TableServices);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addBio}</h1>

				<nav className="navbar ">
					<div className="ml-auto text-dark">
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								history.push("/addservices");
							}}>
							Add services
						</button>
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
											<th>Review Date</th>
											<th>Filing Date</th>
											<th>Resolution Date</th>
											<th>Resolution Outcome</th>
											<th>Comments</th>
										</tr>
									</thead>

									<tbody>
										{store.TableServices &&
											store.TableServices.reverse().map((item, index) => {
												if (item.caseNo === store.currentCase) {
													return (
														<tr key={index}>
															<td>{item.Contract}</td>
															<td>{item.IntakeDate}</td>
															<td>{item.ReviewDate}</td>
															<td>{item.FilingDate}</td>
															<td>{item.ResolutionDate}</td>
															<td>{item.ResolutionOutcome}</td>
															<td>{item.Comments}</td>
														</tr>
													);
												}
											})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
