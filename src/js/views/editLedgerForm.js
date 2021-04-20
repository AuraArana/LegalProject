import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditLedgerForm = () => {
	let addBio = "Ledger";
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const params = useParams();

	let id = params.case;
	let pos = 1000000000000;

	for (let i in store.Ledger) {
		if (store.Ledger[i].id === id) {
			pos = i;
		}
	}

	let Ledger = store.Ledger[pos];
	const [servicesData, setservicesData] = useState({
		ServiceType: Ledger ? Ledger.ServiceType : "",
		intakeDate: Ledger ? Ledger.intakeDate : "",
		Transaction: Ledger ? Ledger.Transaction : "",
		Amount: Ledger ? Ledger.Amount : "",
		caseNo: Ledger ? Ledger.caseNo : ""
	});

	const [validationIntakeDate, setValidationIntakeDate] = useState(false);
	const [validationAmount, setValidationAmount] = useState(false);
	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (!validationIntakeDate && !validationAmount && validation) {
				actions.editLedger(servicesData, id);
				history.push("/editLedger/" + servicesData.caseNo);
				setValidation(false);
			} else {
				setValidation(false);
			}
		},
		[validation]
	);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addBio}</h1>
				<form className="user">
					<div className="form-group row">
						<div className="col-sm-6">
							<div className="form-group">
								<label>Intake Date</label>
								<input
									type="text"
									value={servicesData.intakeDate}
									onChange={e => setservicesData({ ...servicesData, intakeDate: e.target.value })}
									className={
										validationIntakeDate
											? "form-control form-control-user rounded  is-invalid"
											: "form-control form-control-user rounded"
									}
									placeholder="Intake Date"
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Amount</label>

								<input
									type="text"
									value={servicesData.Amount}
									className={
										validationAmount
											? "form-control form-control-user rounded  is-invalid"
											: "form-control form-control-user rounded"
									}
									placeholder="Enter Alien number"
									onChange={e => setservicesData({ ...servicesData, Amount: e.target.value })}
									required
								/>
							</div>
						</div>
					</div>

					<div className="form-group row">
						<div className="col-sm-6">
							<div className="form-group">
								<label>Transaction</label>
								<input
									type="text"
									className="form-control"
									placeholder="Transaction"
									aria-label="Transaction"
									value={servicesData.Transaction}
									disabled
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Service Type</label>

								<input
									type="text"
									className="form-control"
									placeholder="Service Type"
									aria-label="Service Type"
									disabled
									value={servicesData.ServiceType}
								/>
							</div>
						</div>
					</div>

					<button
						type="button"
						className="btn btn-primary mt-2"
						onClick={() => {
							setValidationIntakeDate(checkInput(servicesData.intakeDate));
							setValidationAmount(checkInput(servicesData.Amount));
							setValidation(true);
						}}>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};
