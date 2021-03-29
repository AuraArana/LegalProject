import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddLegal = () => {
	let addLegal = "Legal & Criminal Record";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const [LegalProblem, setLegalProblem] = useState("");
	const [CaseGoal, setCaseGoal] = useState("");
	const [FollowUp, setFollowUp] = useState("");
	const [ArrestRecord, setArrestRecord] = useState("");
	// const [AttorneyName, setAttorneyName] = useState("");
	// const [AttorneyPhone, setAttorneyPhone] = useState("");

	const checkInput = input => {
		return input === null || !input;
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addLegal}</h1>
				<form className="user">
					<div className="form-group row">
						<div className="col-sm-11">
							<div className="form-group">
								<label>Legal Problem</label>
								<p
									className="pl-4"
									style={{
										fontSize: 12
									}}>
									Provide a brief description of the immigration situation that the client is
									requesting assistance with. Make sure to include relevant details and possible
									challenges to obtaining judicial relief.
								</p>
								<textarea
									className="form-control ml-4"
									id="exampleFormControlTextarea1"
									rows="3"
									onChange={e => setLegalProblem(e.target.value)}
								/>
							</div>
						</div>
						<div className="col-sm-11">
							<div className="form-group">
								<label>Case Goal</label>
								<p
									className="pl-4"
									style={{
										fontSize: 12
									}}>
									Provide a brief description of the immigration-related goals that Law Firm intends
									to achieve for this client. If there is a series of goals in the process of
									obtaining final relief, list them in order.
								</p>
								<textarea
									className="form-control ml-4"
									id="exampleFormControlTextarea1"
									rows="3"
									onChange={e => setCaseGoal(e.target.value)}
								/>
							</div>
						</div>
						<div className="col-sm-11">
							<div className="form-group">
								<label>Follow-Up</label>
								<p
									className="pl-4"
									style={{
										fontSize: 12
									}}>
									Briefly describe relevant follow-up activities as the case progresses.
								</p>
								<textarea
									className="form-control ml-4"
									id="exampleFormControlTextarea1"
									rows="3"
									onChange={e => setFollowUp(e.target.value)}
								/>
							</div>
						</div>
						<div className="col-sm-11">
							<div className="form-group">
								<label>Arrest Record</label>
								<p
									className="pl-4"
									style={{
										fontSize: 12
									}}>
									Having a criminal record has serious implications for the adjustment of immigration
									status. However, having problems with the law is not an automatic disqualifier.
									Therefore, it is important to describe in detail the nature and circumstances of any
									arrests, judgemnets, etc. If the client hired a criminall attorney, provide the
									attorneys contact information.
								</p>
								<textarea
									className="form-control ml-4"
									id="exampleFormControlTextarea1"
									rows="3"
									onChange={e => setArrestRecord(e.target.value)}
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group ml-4">
								<label>Criminal Attorneys Name</label>
								<input type="text" className="form-control" aria-describedby="basic-addon1" />
							</div>
						</div>
						<div className="col-sm-5">
							<div className="form-group">
								<label>Criminal Attorney Phone</label>
								<input type="text" className="form-control" aria-describedby="basic-addon1" />
							</div>
						</div>
					</div>
					<button type="button" className="btn col-11 btn-primary form-control">
						save
					</button>
					<div>
						<Link className="mt-3 w-100 text-center" to="/">
							Go back to Immigration Information
						</Link>{" "}
					</div>
				</form>
			</div>
		</div>
	);
};
