import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditLegal = props => {
	const params = useParams();
	let addLegal = "Legal & Criminal Record";
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const [LegalProblem, setLegalProblem] = useState("");
	const [CaseGoal, setCaseGoal] = useState("");
	const [FollowUp, setFollowUp] = useState("");
	const [ArrestRecord, setArrestRecord] = useState("");
	const [value, setValue] = useState(0);
	const [chars, setChars] = useState(0);
	const [maxChars, setMaxChars] = useState(500);
	const [chars2, setChars2] = useState(0);
	const [maxChars2, setMaxChars2] = useState(500);
	const [chars3, setChars3] = useState(0);
	const [maxChars3, setMaxChars3] = useState(500);
	const [chars4, setChars4] = useState(0);
	const [maxChars4, setMaxChars4] = useState(500);
	const [color, setColor] = useState("grey");
	const [color2, setColor2] = useState("grey");
	const [color3, setColor3] = useState("grey");
	const [color4, setColor4] = useState("grey");

	let Case = params.case;
	let pos = 1000000000000;

	for (let i in store.legalArr) {
		if (store.legalArr[i].caseNo === Case) {
			pos = i;
		}
	}
	const legalArr = store.legalArr[pos];
	const [legalData, setLegalData] = useState({
		legalProblem: legalArr ? legalArr.legalProblem : "",
		caseGoal: legalArr ? legalArr.caseGoal : "",
		followUp: legalArr ? legalArr.followUp : "",
		arrestRecord: legalArr ? legalArr.arrestRecord : "",
		criminalAttorney: legalArr ? legalArr.criminalAttorney : "",
		attorneyPhone: legalArr ? legalArr.attorneyPhone : "",
		caseNo: legalArr ? legalArr.caseNo : Case
	});

	const checkInput = input => {
		return input === null || !input;
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{addLegal}</h1>
				<form className="user">
					<div className="form-group row">
						<div className="col-sm-6">
							<div className="form-group">
								<label>Case number</label>
								<input
									type="text"
									required
									className="form-control"
									disabled
									value={legalData.caseNo}
								/>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group">
								<label>Legal Problem</label>
								<p
									className=""
									style={{
										fontSize: 12
									}}>
									Provide a brief description of the immigration situation that the client is
									requesting assistance with. Make sure to include relevant details and possible
									challenges to obtaining judicial relief.
								</p>
								<textarea
									// onChange={handleChange}
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									maxLength="500"
									value={legalData.legalProblem}
									onChange={e => setlegalData({ ...legalData, legalProblem: e.target.value })}
								/>
								<div id="the-count" style={{ float: "right", fontSize: 12 }}>
									<span id="current" style={{ color: color }}>
										{chars}
									</span>
									<span id="maximum"> / {maxChars}</span>
								</div>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group">
								<label>Case Goal</label>
								<p
									className=""
									style={{
										fontSize: 12
									}}>
									Provide a brief description of the immigration-related goals that Law Firm intends
									to achieve for this client. If there is a series of goals in the process of
									obtaining final relief, list them in order.
								</p>
								<textarea
									// onChange={handleChange2}
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									value={legalData.caseGoal}
									maxLength="500"
									onChange={e => setlegalData({ ...legalData, caseGoal: e.target.value })}
								/>
								<div id="the-count" style={{ float: "right", fontSize: 12 }}>
									<span id="current" style={{ color: color2 }}>
										{chars2}
									</span>
									<span id="maximum"> / {maxChars2}</span>
								</div>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group">
								<label>Follow-Up</label>
								<p
									className=""
									style={{
										fontSize: 12
									}}>
									Briefly describe relevant follow-up activities as the case progresses.
								</p>
								<textarea
									className="form-control"
									// onChange={handleChange3}
									id="exampleFormControlTextarea1"
									rows="3"
									value={legalData.followUp}
									maxLength="500"
									onChange={e => setlegalData({ ...legalData, followUp: e.target.value })}
								/>
								<div id="the-count" style={{ float: "right", fontSize: 12 }}>
									<span id="current" style={{ color: color3 }}>
										{chars3}
									</span>
									<span id="maximum"> / {maxChars3}</span>
								</div>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group">
								<label>Arrest Record</label>
								<p
									className=""
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
									className="form-control"
									// onChange={handleChange4}
									id="exampleFormControlTextarea1"
									rows="3"
									value={legalData.arrestRecord}
									maxLength="500"
									onChange={e => setlegalData({ ...legalData, arrestRecord: e.target.value })}
								/>
								<div id="the-count" style={{ float: "right", fontSize: 12 }}>
									<span id="current" style={{ color: color4 }}>
										{chars4}
									</span>
									<span id="maximum"> / {maxChars4}</span>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Criminal Attorneys Name</label>
								<input
									type="text"
									value={legalData.criminalAttorney}
									className="form-control"
									aria-describedby="basic-addon1"
									onChange={e => setlegalData({ ...legalData, criminalAttorney: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Criminal Attorney Phone</label>
								<input
									type="text"
									value={legalData.attorneyPhone}
									className="form-control"
									aria-describedby="basic-addon1"
									onChange={e => setlegalData({ ...legalData, attorneyPhone: e.target.value })}
								/>
							</div>
						</div>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control col-3 mb-5"
						style={{ float: "right" }}>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};

EditLegal.propTypes = {
	match: PropTypes.object
};
