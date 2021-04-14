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
											<th>Case number</th>
											<th>Immigration Status</th>
											<th>Date of Entry</th>
											<th>Port of Entry</th>
											<th>Nationality</th>
										</tr>
									</thead>

									<tbody>
										{store.immigrationArr &&
											store.immigrationArr.map((item, index) => {
												if (
													item.dateEntry === store.dateEntry ||
													item.immigrationStatus === store.immigrationStatus ||
													item.nationality === store.nationality
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
