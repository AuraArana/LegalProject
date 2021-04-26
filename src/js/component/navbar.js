import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import HorizontalLogo from "../../img/h-logo.png";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let caseN = "";

	if (store.currentUser.userType === "Client") {
		for (let i in store.ListClients) {
			if (store.ListClients[i].Email === store.currentUser.email) {
				caseN = store.ListClients[i].caseNo;
				break;
			}
		}
	}

	return (
		<ul
			className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
			style={{ height: "100%" }}
			id="accordionSidebar">
			<Link to={"/demo/"} className="sidebar-brand d-flex align-items-center justify-content-center">
				<div className="sidebar-brand-icon">
					<img src={HorizontalLogo} style={{ width: 150 }} />
				</div>
			</Link>

			<hr className="sidebar-divider my-0" />

			<li className="nav-item active">
				<Link to={"/demo/"} className="nav-link">
					<i className="fas fa-fw fa-tachometer-alt" />
					<span>Dashboard</span>
				</Link>
			</li>

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">Clients</div>

			<li className="nav-item">
				<a
					className="nav-link collapsed"
					href="#"
					data-toggle="collapse"
					data-target="#collapseTwo"
					aria-expanded="true"
					aria-controls="collapseTwo">
					<i className="fas fa-user" />
					<span>Add New Case</span>
				</a>
				<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
					<div className="bg-white py-2 collapse-inner rounded">
						<h6 className="collapse-header">Add Information:</h6>
						<Link
							className="collapse-item"
							to="/addBio"
							onClick={() => {
								actions.setCurrentCase();
							}}>
							Biographical
						</Link>
						{store.currentUser.userType != "Client" ? (
							<Link className="collapse-item" to="/addImmigration">
								Immigration
							</Link>
						) : (
							""
						)}
						{store.currentUser.userType != "Client" ? (
							<Link className="collapse-item" to="/legalRecords">
								Legal, Criminal Record
							</Link>
						) : (
							""
						)}
						{!caseN ? (
							<Link className="collapse-item" to={"/documents/" + store.currentCase}>
								Case Documents
							</Link>
						) : (
							<Link className="collapse-item" to={"/documents/" + caseN}>
								Case Documents
							</Link>
						)}
						{store.currentUser.userType != "Client" ? (
							<Link className="collapse-item" to="/services">
								Services
							</Link>
						) : (
							<Link className="collapse-item" to={"/editservices/" + caseN}>
								Services
							</Link>
						)}

						{store.currentUser.userType != "Client" ? (
							<Link className="collapse-item" to="/ledger">
								Ledger
							</Link>
						) : (
							<Link className="collapse-item" to={"/editLedger/" + caseN}>
								Ledger
							</Link>
						)}
					</div>
				</div>
			</li>

			{store.currentUser.userType != "Client" ? (
				<li className="nav-item">
					<Link className="nav-link" to="/appointmentRequest">
						<i className="far fa-calendar-alt" /> Request Appointment
					</Link>
				</li>
			) : (
				""
			)}

			{store.currentUser.userType === "Client" ? (
				<li className="nav-item">
					<Link to={"/casereport/" + caseN} className="nav-link">
						<i className="fas fa-user" />
						<span>Client Information</span>
					</Link>
				</li>
			) : (
				""
			)}

			{store.currentUser.userType === "Admin" ? (
				<li className="nav-item">
					<a
						className="nav-link collapsed"
						href="#"
						data-toggle="collapse"
						data-target="#collapseUtilities"
						aria-expanded="true"
						aria-controls="collapseUtilities">
						<i className="fas fa-fw fa-wrench" />
						<span>Utilities</span>
					</a>

					<div
						id="collapseUtilities"
						className="collapse"
						aria-labelledby="headingUtilities"
						data-parent="#accordionSidebar">
						<div className="bg-white py-2 collapse-inner rounded">
							<h6 className="collapse-header">Custom Utilities:</h6>
							{/* <Link className="collapse-item" to="/servicescard">
								By type of Services
							</Link> */}
							<Link className="collapse-item" to="/addUser">
								Add New User
							</Link>
							{/* <a className="collapse-item" href="utilities-animation.html">
								Animations
							</a>
							<a className="collapse-item" href="utilities-other.html">
								Other
							</a> */}
						</div>
					</div>
				</li>
			) : (
				""
			)}

			{store.currentUser.userType != "Client" ? <hr className="sidebar-divider" /> : ""}

			{store.currentUser.userType != "Client" ? <div className="sidebar-heading">Reports</div> : ""}

			{store.currentUser.userType != "Client" ? (
				<li className="nav-item">
					<Link className="nav-link" to="/charts">
						<i className="fas fa-fw fa-chart-area" /> Charts
					</Link>
				</li>
			) : (
				""
			)}

			{store.currentUser.userType != "Client" ? (
				<li className="nav-item">
					<a
						className="nav-link collapsed"
						href="#"
						data-toggle="collapse"
						data-target="#collapseUtilitiesR"
						aria-expanded="true"
						aria-controls="collapseUtilitiesR">
						<i className="fas fa-fw fa-table" />
						<span>Reports</span>
					</a>
					<div
						id="collapseUtilitiesR"
						className="collapse"
						aria-labelledby="headingUtilitiesR"
						data-parent="#accordionSidebar">
						<div className="bg-white py-2 collapse-inner rounded">
							<h6 className="collapse-header">Select a report:</h6>
							<Link className="collapse-item" to="/clientsdebt">
								Clients with Debts
							</Link>
							<Link className="collapse-item" to="/servicesform">
								Type of Services
							</Link>
							<Link className="collapse-item" to="/servicestatusform">
								Service status
							</Link>
							<Link className="collapse-item" to="/reportbio">
								Biographical
							</Link>
							<Link className="collapse-item" to="/reportImmigration">
								Immigration Information
							</Link>
							<Link className="collapse-item" to="/listAppointment/">
								List of Appointments
							</Link>
						</div>
					</div>
				</li>
			) : (
				""
			)}
			{store.currentUser.userType != "Client" ? <hr className="sidebar-divider d-none d-md-block" /> : ""}
		</ul>
	);
};
