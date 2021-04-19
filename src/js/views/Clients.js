import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { ClientsCard } from "../component/ClientsCard.js";
import female from "../../img/Untitled.png";
import male from "../../img/male.png";
import { Button } from "react-bootstrap";

export const Clients = () => {
	const [state, setState] = useState({});
	const { store, actions } = useContext(Context);
	// {store.currentSearch}
	if (store.currentSearch != "") {
		return (
			<div className="mb-4 mt-5 mx-auto">
				<div id="contacts" aria-expanded="true">
					<div className="" id="contact-list">
						{store.ListClients &&
							store.ListClients.reverse().map((item, index) => {
								if (
									item.caseNo.toLowerCase().includes(store.currentSearch.toLowerCase()) ||
									item.AlienNo.toLowerCase().includes(store.currentSearch.toLowerCase()) ||
									item.FirstName.toLowerCase().includes(store.currentSearch.toLowerCase()) ||
									item.LastName.toLowerCase().includes(store.currentSearch.toLowerCase())
								) {
									return (
										<li key={index} className="search-list" style={{ listStyleType: "none" }}>
											<div className="row mb-4 mt-4 card shadow border-left-primary col-lg-9 mx-auto pt-5 pb-5">
												<div className="container">
													<div className="row">
														<div className="col-3 my-auto">
															<img
																src={item.Gender === "Male" ? male : female}
																alt="Mike Anamendolla"
																className="rounded-circle mx-auto d-block img-fluid"
															/>
														</div>
														<div className="col-4 my-auto">
															<label className="name lead small text-uppercase font-weight-bold">
																{item.FirstName + " " + item.LastName}
															</label>
															<br />
															<i className="fas fa-birthday-cake text-muted mr-3" />
															<span className="text-muted small">{item.DOB}</span>
															<br />
															<span
																className="fa fa-phone fa-fw text-muted mr-3"
																data-toggle="tooltip"
																title=""
																data-original-title="(870) 288-4149"
															/>
															<span className="text-muted small">{item.HomePhone}</span>
															<br />
															<span
																className="fas fa-user-circle fa-fw text-muted mr-3"
																data-toggle="tooltip"
																data-original-title=""
																title=""
															/>
															<span className="text-muted small text-truncate">
																<Link to={"/casereport/" + item.caseNo}>
																	{item.caseNo}
																</Link>
															</span>
														</div>
													</div>
												</div>
											</div>
										</li>
									);
								}
								// First
							})}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="mb-4 mt-5 mx-auto">
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<div className="" id="contact-list">
						{store.ListClients &&
							store.ListClients.reverse().map((item, index) => {
								return (
									<li key={index} className="search-list" style={{ listStyleType: "none" }}>
										<div className="row mb-4 mt-4 card shadow border-left-primary col-lg-9 mx-auto pt-5 pb-5">
											<div className="container">
												<div className="row">
													<div className="col-3 my-auto">
														<img
															src={item.Gender === "Male" ? male : female}
															alt="Mike Anamendolla"
															className="rounded-circle mx-auto d-block img-fluid"
														/>
													</div>
													<div className="col-4 my-auto">
														<label className="name lead small text-uppercase font-weight-bold">
															{item.FirstName + " " + item.LastName}
														</label>
														<br />
														<i className="fas fa-birthday-cake text-muted mr-3" />
														<span className="text-muted small">{item.DOB}</span>
														<br />
														<span
															className="fa fa-phone fa-fw text-muted mr-3"
															data-toggle="tooltip"
															title=""
															data-original-title="(870) 288-4149"
														/>
														<span className="text-muted small">{item.HomePhone}</span>
														<br />
														<span
															className="fas fa-user-circle fa-fw text-muted mr-3"
															data-toggle="tooltip"
															data-original-title=""
															title=""
														/>
														<span className="text-muted small text-truncate">
															<Link to={"/casereport/" + item.caseNo}>{item.caseNo}</Link>
														</span>
													</div>
													<div className="col-5">
														<div className=" float-right">
															<Link to={"/editBio/" + item.caseNo}>
																<button className="btn" title="Edit Biographical">
																	<i className="fas fa-user-edit" />
																</button>
															</Link>
															<Link to={"/editImmigration/" + item.caseNo}>
																<button className="btn" title="Edit Immigration">
																	<i className="fas fa-passport" />
																</button>
															</Link>
															<Link to={"/editLegal/" + item.caseNo}>
																<button className="btn" title="Edit Legal Records">
																	<i className="fas fa-balance-scale" />
																</button>
															</Link>
															<Link to={"/editServices/" + item.caseNo}>
																<button className="btn" title="Edit Services">
																	<i className="fas fa-gavel" />
																</button>
															</Link>
															<Link to={"/editDocuments/" + item.caseNo}>
																<button className="btn" title="Edit Documents">
																	<i className="fas fa-file-alt" />
																</button>
															</Link>
															<Link to={"/editLedger/" + item.caseNo}>
																<button className="btn" title="Edit Ledger">
																	<i className="fas fa-file-invoice-dollar" />
																</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
								);

								// First
							})}
					</div>
				</div>
			</div>
		);
	}
};
