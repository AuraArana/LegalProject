import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ClientsDebt = () => {
	let addBio = "Services";
	const params = useParams();
	let history = useHistory();
	const { store, actions } = useContext(Context);

	let id = params.contract;
	let pos = 0;
	var arr = [];
	var arr3 = [];
	let Contract = "";
	let fullName = "";
	let phone = "";
	let caseNro = "";
	let totalFee = 0;
	let total = 0;
	let totalPayment = 0;

	for (let i in store.ListClients) {
		caseNro = store.ListClients[i].caseNo;
		phone = store.ListClients[i].HomePhone;
		fullName = store.ListClients[i].FirstName + " " + store.ListClients[i].LastName;

		for (let t in store.Ledger) {
			if (store.Ledger[t].Transaction === "Service Fee" && store.Ledger[t].caseNo === caseNro) {
				totalFee = totalFee + parseInt(store.Ledger[t].Amount);
			}

			if (store.Ledger[t].Transaction === "Payment" && store.Ledger[t].caseNo === caseNro) {
				totalPayment = totalPayment + parseInt(store.Ledger[t].Amount);
			}
		}

		total = totalFee - totalPayment;

		if (total > 0) {
			const obj = {
				fullName: fullName,
				caseNro: caseNro,
				phone: phone,
				total: total
			};

			arr.push(obj);
		}

		totalFee = 0;
		totalPayment = 0;
		total = 0;
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{Contract}</h1>

				<div className="container-fluid">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">List of clientes</h6>
						</div>
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
											<th>Case Nro</th>
											<th>Full Name</th>
											<th>Phone</th>

											<th>Total Due</th>
										</tr>
									</thead>

									<tbody>
										{arr &&
											arr.map((item, index) => {
												return (
													<tr key={index}>
														<td>
															<Link
																to={"/casereport/" + item.caseNro}
																className="btn btn-primary">
																{item.caseNro}
															</Link>
														</td>
														<td>{item.fullName}</td>
														<td>{item.phone}</td>

														<td>{" $" + parseInt(item.total).toFixed(2)}</td>
													</tr>
												);
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
