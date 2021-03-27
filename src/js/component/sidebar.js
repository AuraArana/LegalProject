import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	return (
		<div
			className="container-fluid"
			style={{ position: "fixed", width: 280, height: "100%", marginTop: 55, background: "#2c7596" }}>
			<div>
				<nav className="col d-none d-md-block mt-3 sidebar text-white">
					<div className="sidebar-sticky">
						<ul className="nav flex-column">
							<li className="nav-item row mt-3 d-flex">
								<div className="col-1 ml-15" style={{ width: "100%" }}>
									<i className="fas fa-tachometer-alt" />
								</div>
								<span className="col-9" data-feather="home">
									Dashboard
								</span>
							</li>
							<li className="nav-item ml-15 pt-4 row">
								<div className="col-1">
									<i className="fas fa-user" />
								</div>
								<span className="col-9" data-feather="home">
									Add New Client
								</span>
							</li>
							<li className="nav-item ml-15 pt-4 row d-flex">
								<div className="col-1">
									<i className="fas fa-user" />
								</div>
								<span className="col-9" data-feather="home">
									Log Out
								</span>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};
