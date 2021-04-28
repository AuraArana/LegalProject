import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddLegal = () => {
	let addLegal = "Legal & Criminal Record";
	let history = useHistory();
	const { store, actions } = useContext(Context);
	toast.configure();

	const [legalData, setlegalData] = useState({
		legalProblem: "",
		caseGoal: "",
		followUp: "",
		arrestRecord: "",
		criminalAttorney: "",
		attorneyPhone: "",
		caseNo: store.currentCase
	});

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

	const checkInput = input => {
		return input === null || !input;
	};

	const handleChange = e => {
		var input = e.target.value;
		setChars(input.length);
	};

	useEffect(
		() => {
			if (chars < 500 && chars > 490) {
				setColor("red");
			}
			if (chars < 489 && chars > 480) {
				setColor("orange");
			}
			if (chars < 479 && chars > 0) {
				setColor("grey");
			}
		},
		[chars]
	);

	const handleChange2 = e => {
		var input = e.target.value;
		setChars2(input.length);
	};

	useEffect(
		() => {
			if (chars2 < 500 && chars2 > 490) {
				setColor2("red");
			}
			if (chars2 < 489 && chars2 > 480) {
				setColor2("orange");
			}
			if (chars2 < 479 && chars2 > 0) {
				setColor2("grey");
			}
		},
		[chars2]
	);

	const handleChange3 = e => {
		var input = e.target.value;
		setChars3(input.length);
	};

	useEffect(
		() => {
			if (chars3 < 500 && chars3 > 490) {
				setColor3("red");
			}
			if (chars3 < 489 && chars3 > 480) {
				setColor3("orange");
			}
			if (chars3 < 479 && chars3 > 0) {
				setColor3("grey");
			}
		},
		[chars3]
	);

	const handleChange4 = e => {
		var input = e.target.value;
		//console.log("input.length", input.length);
		setChars4(input.length);
	};

	useEffect(
		() => {
			if (chars4 < 500 && chars4 > 490) {
				setColor4("red");
			} else if (chars4 < 489 && chars4 > 480) {
				setColor4("orange");
			} else if (chars4 < 479 && chars4 > 0) {
				setColor4("grey");
			}
		},
		[chars4]
	);

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
									value={store.currentCase}
									disabled
									className={"form-control form-control-user rounded pl-4"}
									placeholder="Case Number"
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
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									maxLength="500"
									onChange={e => {
										setlegalData({ ...legalData, legalProblem: e.target.value });
										handleChange(e);
									}}
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
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									maxLength="500"
									onChange={e => {
										setlegalData({ ...legalData, caseGoal: e.target.value });
										handleChange2(e);
									}}
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
									id="exampleFormControlTextarea1"
									rows="3"
									maxLength="500"
									onChange={e => {
										setlegalData({ ...legalData, followUp: e.target.value });
										handleChange3(e);
									}}
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
									arrests, judgements, etc. If the client hired a criminal attorney, provide the
									attorney&#180;s contact information.
								</p>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									maxLength="500"
									onChange={e => {
										setlegalData({ ...legalData, arrestRecord: e.target.value });
										handleChange4(e);
									}}
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
								<label>Criminal Attorney&#180;s Name</label>
								<input
									type="text"
									className="form-control"
									aria-describedby="basic-addon1"
									onChange={e => setlegalData({ ...legalData, criminalAttorney: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Criminal Attorney&#180;s Phone</label>
								<input
									type="text"
									className="form-control"
									aria-describedby="basic-addon1"
									onChange={e => setlegalData({ ...legalData, attorneyPhone: e.target.value })}
								/>
							</div>
						</div>
					</div>
					<Link to={"/services"}>
						<button
							type="button"
							className="btn btn-primary form-control col-3 mb-5"
							style={{ float: "right" }}
							onClick={() => {
								actions.addlegalData(legalData, id);
							}}>
							Save + Next Page: Services
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
