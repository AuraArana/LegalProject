import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditServices = () => {
	const params = useParams();
	let addBio = "Services";
	let history = useHistory();
	const { store, actions } = useContext(Context);
	let Case = params.case;

	//console.log("store.TableServices", store.TableServices);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addBio}</h1>

				<nav className="navbar ">
					<div className="ml-auto text-dark">
						{store.currentUser.userType != "Client" ? (
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => {
									history.push("/addservices");
								}}>
								Add services
							</button>
						) : (
							""
						)}
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
											<th>Resolution Date</th>
											<th>Resolution Outcome</th>
											<th>Actions</th>
										</tr>
									</thead>

									<tbody>
										{store.TableServices &&
											store.TableServices.map((item, index) => {
												if (item.caseNo === Case) {
													return (
														<tr key={index}>
															<td>{item.Contract}</td>
															<td>{item.IntakeDate}</td>
															<td>{item.ResolutionDate}</td>
															<td>{item.ResolutionOutcome}</td>
															<td>
																{store.currentUser.userType != "Client" ? (
																	<Link to={"/editServicesForm/" + item.id}>
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
																			actions.deleteServices(item.id);
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
				</div>
			</div>
		</div>
	);
};
