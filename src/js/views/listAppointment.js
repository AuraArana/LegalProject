import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListAppointment = () => {
	const params = useParams();
	let addBio = "List of Appointments";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	//console.log("store.TableServices", store.TableServices);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addBio}</h1>

				<div className="container-fluid">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">List of Appointments</h6>
						</div>
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Phone Number</th>
											<th>Email</th>
											<th>Actions</th>
										</tr>
									</thead>

									<tbody>
										{store.appRequest &&
											store.appRequest.map((item, index) => {
												if (item.status === "Pending") {
													return (
														<tr key={index}>
															<td>{item.firstName}</td>
															<td>{item.lastName}</td>
															<td>{item.phoneNumber}</td>
															<td>{item.Email}</td>
															<td>
																{store.currentUser.userType != "Client" ? (
																	<Link to={"/editAppointmentRequest/" + item.id}>
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
																			actions.deleteAppointment(item.id);
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
