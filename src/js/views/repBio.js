import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const RepBio = () => {
	let addBio = "Services";
	const params = useParams();
	let history = useHistory();
	const { store, actions } = useContext(Context);

	let pos = 0;
	let Contract = "";

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addBio}</h1>

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
											<th>First Name</th>
											<th>Last Name</th>

											<th>DOB</th>
											<th>Phone</th>
										</tr>
									</thead>

									<tbody>
										{store.ListClients &&
											store.ListClients.reverse().map((item, index) => {
												if (
													item.MaritalStatus === store.currentMaritalStatus ||
													item.Gender === store.currentGender
												) {
													return (
														<tr key={index}>
															<td>
																<Link
																	to={"/casereport/" + item.caseNo}
																	className="btn btn-primary">
																	{item.caseNo}
																</Link>
															</td>
															<td>{item.FirstName}</td>
															<td>{item.LastName}</td>

															<td>{item.DOB}</td>
															<td>{item.HomePhone}</td>
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
