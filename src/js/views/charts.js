import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

import "../../styles/demo.scss";

export const Charts = props => {
	let history = useHistory();
	const { store } = useContext(Context);

	let nroCase = store.ListClients.length;
	let totalFee = 0;
	let totalPayment = 0;
	let pendingServices = 0;
	let positiveServices = 0;
	let denyServices = 0;
	let countSingle = 0;
	let countDivorced = 0;
	let countMarried = 0;
	let countOther = 0;

	let countF = 0;
	let countM = 0;
	let countGO = 0;
	let caseN = "";

	for (let i in store.Ledger) {
		if (store.Ledger[i].Transaction === "Service Fee") {
			totalFee = totalFee + parseInt(store.Ledger[i].Amount);
		}
	}

	for (let i in store.ListClients) {
		if (store.ListClients[i].MaritalStatus === "Single") {
			countSingle = countSingle + 1;
		}

		if (store.ListClients[i].MaritalStatus === "Divorced") {
			countDivorced = countDivorced + 1;
		}
		if (store.ListClients[i].MaritalStatus === "Married") {
			countMarried = countMarried + 1;
		}
		if (store.ListClients[i].MaritalStatus === "Other") {
			countOther = countOther + 1;
		}

		if (store.ListClients[i].Gender === "Male") {
			countM = countM + 1;
		}
		if (store.ListClients[i].Gender === "Other") {
			countGO = countGO + 1;
		}
		if (store.ListClients[i].Gender === "Female") {
			countF = countF + 1;
		}
	}

	for (let i in store.Ledger) {
		if (store.Ledger[i].Transaction === "Payment") {
			totalPayment = totalPayment + parseInt(store.Ledger[i].Amount);
		}
	}

	for (let i in store.TableServices) {
		if (store.TableServices[i].ResolutionOutcome === "Ongoing") {
			pendingServices = pendingServices + 1;
		}
		if (store.TableServices[i].ResolutionOutcome === "Deny") {
			denyServices = denyServices + 1;
		}
		if (store.TableServices[i].ResolutionOutcome === "Positive") {
			positiveServices = positiveServices + 1;
		}
	}

	const data3 = {
		labels: ["Male", "Other", "Female"],
		datasets: [
			{
				data: [countM, countGO, countF],
				backgroundColor: ["#2373ac", "#162f46", "#d7d7d7"],
				hoverBackgroundColor: ["#2373ac", "#162f46", "#d7d7d7"]
			}
		]
	};

	const data4 = {
		labels: ["Single", "Married", "Divorced", "Other"],
		datasets: [
			{
				data: [countSingle, countMarried, countDivorced, countOther],
				backgroundColor: ["#00c182", "#b2d5d7", "#003851", "#cfd0d2"],
				hoverBackgroundColor: ["#00c182", "#b2d5d7", "#003851", "#cfd0d2"]
			}
		]
	};

	const data5 = {
		labels: ["Single", "Married", "Divorced", "Other"],
		datasets: [
			{
				label: "Marital Status",
				backgroundColor: [
					"rgba(54, 162, 235, 0.5)",
					"rgba(255, 159, 64, 0.5)",
					"rgba(255, 205, 86, 0.5)",
					"rgba(75, 192, 192, 0.5)"
				],
				borderColor: "rgba(0,0,0,1)",
				borderWidth: 0,
				data: [countSingle, countMarried, countDivorced, countOther]
			}
		]
	};

	const data = {
		labels: ["Payments", "Services Fee"],
		datasets: [
			{
				data: [totalPayment, totalFee],
				backgroundColor: ["#fbba45", "#154465"],
				hoverBackgroundColor: ["#fbba45", "#154465"]
			}
		]
	};

	const data2 = {
		labels: ["Ongoing", "Positive", "Deny"],
		datasets: [
			{
				data: [pendingServices, positiveServices, denyServices],
				backgroundColor: ["#29b6ba", "#136a89", "#172f47"],
				hoverBackgroundColor: ["#29b6ba", "#136a89", "#172f47"]
			}
		]
	};

	//alert(store.User);
	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
				<h1 className="h3 mb-0 text-gray-800">Dashboard Chart</h1>
			</div>

			<div className="row">
				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Gender </h6>
						</div>
						<div className="card-body">
							<Pie data={data3} />
						</div>
					</div>
				</div>

				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Marital Status </h6>
						</div>
						<div className="card-body">
							<Bar
								data={data5}
								options={{
									title: {
										display: false,
										text: "Marital Status",
										fontSize: 14
									},
									legend: {
										display: false,
										position: "right"
									}
								}}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">EARNINGS </h6>
						</div>
						<div className="card-body">
							<Pie data={data} />
						</div>
					</div>
				</div>

				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">SERVICES </h6>
						</div>
						<div className="card-body">
							<Pie data={data2} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Charts.propTypes = {
	history: PropTypes.object,
	item: PropTypes.object,
	onDelete: PropTypes.func,
	location: PropTypes.object,
	detail: PropTypes.string
};
