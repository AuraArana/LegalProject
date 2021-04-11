import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Context } from "../store/appContext";
import { signOut } from "../utilities/signOut";
import PropTypes from "prop-types";
import { Clients } from "../views/Clients.js";

import Background2 from "../../img/rigo-baby.jpg";

export const BarTop = ({ logOut }) => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [state, setState] = useState(null);
	const [valName, setValName] = useState(false);
	const listClients = store.ListClients;

	return (
		<div>
			<nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
				<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
					<i className="fa fa-bars" />
				</button>
				<form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
					<div className="input-group">
						<input
							type="text"
							className="form-control bg-light border-0 small"
							placeholder="Search for..."
							aria-label="Search"
							onChange={e => {
								setValName(e.target.value);
							}}
							aria-describedby="basic-addon2"
						/>
						<div className="input-group-append btn btn-primary">
							{/* <Link field={"Some value"} to={"/clients/"} className="btn btn-primary"> */}
							<i
								onClick={() => {
									actions.setCurrentSearch(valName);
									history.push("/clients");
								}}
								className="fas fa-search fa-sm"
							/>

							{/* </Link> */}
						</div>
					</div>
				</form>

				<ul className="navbar-nav ml-auto">
					<li className="nav-item dropdown no-arrow">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="userDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true">
							<span className="mr-2 d-none d-lg-inline text-gray-600 small">
								{store.currentUser.firstName + " " + store.currentUser.lastName}
							</span>
							<img className="img-profile rounded-circle" src={Background2} />
						</a>

						<div
							className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
							aria-labelledby="userDropdown">
							<a className="dropdown-item" href="#">
								<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
								Profile
							</a>
							<a className="dropdown-item" href="#">
								<i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
								Settings
							</a>

							<div className="dropdown-divider" />
							<a
								className="dropdown-item"
								href="#"
								data-toggle="modal"
								data-target="#logoutModal"
								onClick={() => {
									try {
										signOut();
										logOut();
										history.push("/");
									} catch (e) {
										alert(e.message);
									}
								}}>
								<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
								Logout
							</a>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
};
BarTop.propTypes = {
	logOut: PropTypes.func
};
