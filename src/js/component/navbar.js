import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import HorizontalLogo from "../../img/h-logo.png";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
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

			<div className="sidebar-heading">Interface</div>

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
						<Link className="collapse-item" to="/addImmigration">
							Immigration
						</Link>
						<Link className="collapse-item" to="/legalRecords">
							Legal, Criminal Record
						</Link>
						<Link className="collapse-item" to="/services">
							Services
						</Link>
						<Link className="collapse-item" to="/addBio">
							Case Documents
						</Link>
						<Link className="collapse-item" to="/ledger">
							Ledger
						</Link>
					</div>
				</div>
			</li>

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
						<Link className="collapse-item" to="/servicescard">
							By type of Services
						</Link>
						<a className="collapse-item" href="utilities-border.html">
							Borders
						</a>
						<a className="collapse-item" href="utilities-animation.html">
							Animations
						</a>
						<a className="collapse-item" href="utilities-other.html">
							Other
						</a>
					</div>
				</div>
			</li>

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">Addons</div>

			<li className="nav-item">
				<a className="nav-link" href="charts.html">
					<i className="fas fa-fw fa-chart-area" />
					<span>Charts</span>
				</a>
			</li>

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
						<h6 className="collapse-header">Custom Utilities:</h6>
						<Link className="collapse-item" to="/servicesform">
							By type of Services
						</Link>
						<Link className="collapse-item" to="/reportbio">
							Biographical
						</Link>
						<a className="collapse-item" href="utilities-animation.html">
							Animations
						</a>
						<a className="collapse-item" href="utilities-other.html">
							Other
						</a>
					</div>
				</div>
			</li>

			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	);
};
