import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ServicesReport = () => {
	let addBio = "Services";
	const params = useParams();
	let history = useHistory();
	const { store, actions } = useContext(Context);

	let id = params.contract;
	let pos = 0;
	let Contract = "";

	for (let i in store.listOfServices) {
		if (store.listOfServices[i].TableID === id) {
			Contract = store.listOfServices[i].Desc;
		}
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{Contract}</h1>

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
											<th>Case Nro</th>
											<th>Contract</th>
											<th>Intake Date</th>

											<th>Filing Date</th>
											<th>Resolution Date</th>
											<th>Resolution Outcome</th>
										</tr>
									</thead>

									<tbody>
										{store.TableServices &&
											store.TableServices.reverse().map((item, index) => {
												if (item.Contract === Contract) {
													return (
														<tr key={index}>
															<td>
																<Link
																	to={"/casereport/" + item.caseNo}
																	className="btn btn-primary">
																	{item.caseNo}
																</Link>
															</td>
															<td>{item.Contract}</td>
															<td>{item.IntakeDate}</td>

															<td>{item.FilingDate}</td>
															<td>{item.ResolutionDate}</td>
															<td>{item.ResolutionOutcome}</td>
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
