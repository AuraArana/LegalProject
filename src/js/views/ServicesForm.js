import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const ServicesForm = () => {
	let addBio = "Services";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const [servicesData, setservicesData] = useState({
		Contract: ""
	});

	const [validationContract, setValidationContract] = useState(false);
	const [validation, setValidation] = useState(false);

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (!validationContract && validation) {
				//actions.addServices(servicesData);
				history.push("/servicesreport/" + servicesData.Contract);
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
					<div className="row mb-4 mt-4 card shadow border-left-primary col-lg-10 mx-auto pt-5 pb-5">
						<div className="row">
							<div className="col-md-12">
								<select
									name="cars"
									id="cars"
									className={
										validationContract
											? "form-control form-control-user rounded  is-invalid"
											: "form-control form-control-user rounded"
									}
									onClick={e => setservicesData({ ...servicesData, Contract: e.target.value })}
									multiple
									style={{ height: "300px", width: "500px" }}>
									{store.listOfServices &&
										store.listOfServices.map((item, index) => {
											return (
												<option key={index} value={item.TableID}>
													{item.Desc}
												</option>
											);
										})}
								</select>
							</div>
						</div>
					</div>
					<button
						type="button"
						className="btn btn-primary mt-2"
						style={{ marginLeft: "90px" }}
						onClick={() => {
							setValidationContract(checkInput(servicesData.Contract));
							setValidation(true);
						}}>
						{" "}
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
