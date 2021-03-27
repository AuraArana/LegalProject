import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark fixed-top flex-md-nowrap pl-3 shadow" style={{ background: "#1d3652" }}>
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand">Legal Firm</span>
				</Link>
				<form className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-warning" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};
