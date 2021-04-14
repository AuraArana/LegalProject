import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const RepImmigration = () => {
	let title = "Immigration Information";
	const params = useParams();
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [state, setState] = useState(null);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{title}</h1>

				<div className="container-fluid">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary" />
						</div>
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
											<th>Case Number</th>
											<th>Date Entry</th>
											<th>Port Entry</th>
											<th>Immigration Status</th>
											<th>Nationality</th>
										</tr>
									</thead>

									<tbody>
										{store.immigrationArr &&
											store.immigrationArr.map((item, index) => {
												if (
													item.portEntry === store.currentPortEntry ||
													item.immigrationStatus === store.currentImmigrationStatus ||
													item.nationality === store.currentNationality
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
															<td>{item.dateEntry}</td>
															<td>{item.portEntry}</td>
															<td>{item.immigrationStatus}</td>
															<td>{item.nationality}</td>
														</tr>
													);
												}
											})}
									</tbody>
								</table>
								<button
									type="button"
									className="btn btn-primary"
									onClick={() => {
										history.push("/reportImmigration");
									}}>
									Go back
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
