import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="p-3 bg-white" style={{ width: 280 }}>
				<a
					href="/"
					className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
					<svg className="bi me-2" width="30" height="24">
						<use xlinkHref="#bootstrap" />
					</svg>
					<span className="fs-5 fw-semibold">Collapsible</span>
				</a>
				<ul className="list-unstyled ps-0">
					<li className="mb-1">
						<button
							className="btn btn-toggle align-items-center rounded collapsed"
							data-bs-toggle="collapse"
							data-bs-target="#home-collapse"
							aria-expanded="true">
							Home
						</button>
						<div className="collapse show" id="home-collapse">
							<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								<li>
									<a href="#" className="link-dark rounded">
										Overview
									</a>
								</li>
								<li>
									<a href="#" className="link-dark rounded">
										Updates
									</a>
								</li>
								<li>
									<a href="#" className="link-dark rounded">
										Reports
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="mb-1">
						<button
							className="btn btn-toggle align-items-center rounded collapsed"
							data-bs-toggle="collapse"
							data-bs-target="#dashboard-collapse"
							aria-expanded="false">
							Dashboard
						</button>
						<div className="collapse" id="dashboard-collapse">
							<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								<li>
									<a href="#" className="link-dark rounded">
										Overview
									</a>
								</li>
								<li>
									<a href="#" className="link-dark rounded">
										Weekly
									</a>
								</li>
								<li>
									<a href="#" className="link-dark rounded">
										Monthly
									</a>
								</li>
								<li>
									<a href="#" className="link-dark rounded">
										Annually
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="mb-1">
						<button
							className="btn btn-toggle align-items-center rounded collapsed"
							data-bs-toggle="collapse"
							data-bs-target="#orders-collapse"
							aria-expanded="false">
							Orders
						</button>
						<div className="collapse" id="orders-collapse">
							<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								<li>
									<a href="#" className="link-dark rounded">
										New
									</a>
								</li>
								<li>
									<a href="#" className="link-dark rounded">
										Processed
									</a>
								</li>
								<li>
									<a href="#" className="link-dark rounded">
										Shipped
									</a>
								</li>
								<li>
									<a href="#" className="link-dark rounded">
										Returned
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="border-top my-3" />
					<li className="mb-1">
						<button
							className="btn btn-toggle align-items-center rounded collapsed"
							data-bs-toggle="collapse"
							data-bs-target="#account-collapse"
							aria-expanded="false">
							Account
						</button>
						<div className="collapse" id="account-collapse">
							<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								<li>
									<a href="#" className="link-dark rounded">
										New...
									</a>
								</li>
								<li>
									<a href="#" className="link-dark rounded">
										Profile
									</a>
								</li>
								<li>
									<a href="#" className="link-dark rounded">
										Settings
									</a>
								</li>
								<li>
									<a href="#" className="link-dark rounded">
										Sign out
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
