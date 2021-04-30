import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditLedger = () => {
	const params = useParams();
	let addBio = "Ledger";
	let totalfee = 0;
	let totalpay = 0;
	let history = useHistory();
	const { store, actions } = useContext(Context);
	let Case = params.case;

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addBio}</h1>

				<div className="container-fluid">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">List of Transaction</h6>
						</div>
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
											<th>Intake Date</th>
											<th>Transaction</th>
											<th>Service Type</th>
											<th>Amount</th>
											<th>Actions</th>
										</tr>
									</thead>

									<tbody>
										{store.Ledger &&
											store.Ledger.map((item, index) => {
												if (item.caseNo === Case) {
													if (item.Transaction === "Service Fee") {
														totalfee = totalfee + parseInt(item.Amount);
													} else {
														totalpay = totalpay + parseInt(item.Amount);
													}

													return (
														<tr key={index}>
															<td>{item.intakeDate}</td>
															<td>{item.Transaction}</td>
															<td>{item.ServiceType}</td>
															<td>{" $" + parseInt(item.Amount).toFixed(2)}</td>
															<td>
																{store.currentUser.userType != "Client" ? (
																	<Link to={"/editLedgerForm/" + item.id}>
																		<button className="btn">
																			<i className="fas fa-pencil-alt mr-3" />
																		</button>
																	</Link>
																) : (
																	""
																)}

																{store.currentUser.userType === "Admin" ? (
																	<button
																		className="btn"
																		onClick={() => {
																			actions.deleteLedger(item.id);
																		}}>
																		<i className="fas fa-trash-alt" />
																	</button>
																) : (
																	""
																)}
															</td>
														</tr>
													);
												}
											})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<h2>Balance: {totalfee - totalpay}</h2>
				</div>
			</div>
		</div>
	);
};
