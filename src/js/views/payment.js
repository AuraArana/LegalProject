import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Payment = () => {
	let addBio = "Payments";
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const params = useParams();
	let caseNo = params.case;

	const [servicesData, setservicesData] = useState({
		ServiceType: "Payment",
		intakeDate: "",
		Transaction: "Payment",
		Amount: "",
		caseNo: caseNo
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
				actions.editLedger(servicesData);
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
					<div className="row mb-4 mt-4 card shadow border-left-primary col-lg-11 mx-auto pt-5 pb-5">
						<div className="form-group row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Intake Date</label>
									<input
										type="text"
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
										className={
											validationAmount
												? "form-control form-control-user rounded  is-invalid"
												: "form-control form-control-user rounded"
										}
										placeholder="Amount"
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
										value="Payment"
										className="form-control"
										placeholder="Transaction"
										aria-label="Transaction"
										disabled
									/>
								</div>
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
