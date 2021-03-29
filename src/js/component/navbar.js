import React from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export const Navbar = () => {
	return (
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
			<Link to={"/demo/"} className="sidebar-brand d-flex align-items-center justify-content-center">
				<div className="sidebar-brand-icon rotate-n-15">
					<i className="fas fa-gavel" />
				</div>
				<div className="sidebar-brand-text mx-3">LAW FIRM</div>
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
					<i className="fas fa-fw fa-cog" />
					<span>Case</span>
				</a>
				<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
					<div className="bg-white py-2 collapse-inner rounded">
						<h6 className="collapse-header">Add Information:</h6>
						<Link className="collapse-item" to="/addBio">
							Biographical
						</Link>
						<Link className="collapse-item" to="/addInmigration">
							Immigration
						</Link>
						<Link className="collapse-item" to="/addBio">
							Legal, Criminal Record
						</Link>
						<Link className="collapse-item" to="/addBio">
							Services
						</Link>
						<Link className="collapse-item" to="/addBio">
							Case Documents
						</Link>
						<Link className="collapse-item" to="/addBio">
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
						<a className="collapse-item" href="utilities-color.html">
							Colors
						</a>
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
						<a className="collapse-item" href="utilities-color.html">
							Colors
						</a>
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

			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	);
};
