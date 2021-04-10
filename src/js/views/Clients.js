import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ClientsCard } from "../component/ClientsCard.js";

export const Clients = props => {
	const [state, setState] = useState({});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3" />
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					{props.field} jose finol
				</div>
			</div>
		</div>
	);
};

Clients.propTypes = {
	field: PropTypes.string
};
