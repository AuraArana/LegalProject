import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ClientsCard } from "../component/ClientsCard.js";

export const Clients = props => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			{store.filteredClients &&
				store.filteredClients.map((e, index) => {
					<div key={index}>
						<p className="text-right my-3" />
						<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
							{console.log(e.firstName + " " + e.lastName)}
							{e.firstName + " " + e.lastName}
						</div>
					</div>;
				})}
		</div>
	);
};

Clients.propTypes = {
	field: PropTypes.string
};
