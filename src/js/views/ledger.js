import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Ledger = () => {
	let addBio = "Ledger";
	let totalfee = 0;
	let totalpay = 0;
	let history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addBio}</h1>

				<nav className="navbar ">
					<div className="ml-auto text-dark">
						{/* <button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								history.push("/addLedger");
							}}>
							Add Ledger
						</button> */}
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
											<th>Intake Date</th>
											<th>Transaction</th>
											<th>Service Type</th>
											<th>Amount</th>
										</tr>
									</thead>

									<tbody>
										{store.Ledger &&
											store.Ledger.map((item, index) => {
												if (item.caseNo === store.currentCase) {
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
															<td>{item.Amount}</td>
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
