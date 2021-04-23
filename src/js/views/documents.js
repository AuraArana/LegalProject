import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import "firebase/storage";
import { Context } from "../store/appContext";

export const Documents = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [fileUrl, setFileUrl] = React.useState(null);
	const [fileName, setFileName] = useState("");
	const [file, setFile] = useState("");
	const [validationFile, setValidationFile] = useState(false);
	const [validation, setValidation] = useState(false);
	let caseNo = params.case;

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (validationFile && validation) {
				// actions.addContactAgenda(name, phone, email, address);
				// history.push("/contacts");
				setValidation(false);
			} else {
				setValidation(false);
			}
		},
		[validation]
	);

	const onSubmit = async e => {
		e.preventDefault();
		if (!fileName || !fileUrl) {
			return;
		}
	};

	return (
		<>
			<nav className="navbar ">
				<div className="ml-auto text-dark">
					<button
						type="button"
						className="btn btn-primary"
						data-toggle="modal"
						onClick={() => {}}
						data-target="#exampleModal">
						Add Document
					</button>

					<div
						className="modal fade bd-example-modal-xl"
						id="exampleModal"
						aria-labelledby="exampleModalLabel">
						<div className="modal-dialog ">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title  text-dark" id="exampleModalLabel">
										New Document
									</h5>
								</div>
								<div className="modal-body text-dark">
									<div className="row">
										<form onSubmit={onSubmit}>
											<input
												type="file"
												id="file"
												onChange={e => {
													actions.onFileChange(caseNo, e);
													e.preventDefault();

													setFile(e.target.value);
													setValidationFile(checkInput(file));
													setValidation(true);
												}}

												// onChange={e => {
												// 	setFileUrl(actions.onFileChange(e));
												// }}
											/>
										</form>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<div className="row mb-4 mt-4 card shadow border-left-primary col-lg-10 mx-auto pt-5 pb-5">
				<div className="row">
					<div className="col-md-12">
						<form onSubmit={onSubmit}>
							<input
								type="file"
								id="file"
								onChange={e => {
									actions.onFileChange(caseNo, e);

									setFile(e.target.value);
									setValidationFile(checkInput(file));
									setValidation(true);
								}}

								// onChange={e => {
								// 	setFileUrl(actions.onFileChange(e));
								// }}
							/>
						</form>
					</div>
				</div>
			</div>
			<div className="row mb-4 mt-4 card shadow border-left-primary col-lg-10 mx-auto pt-5 pb-5">
				<div className="row">
					<div className="col-md-12">
						<ul>
							{store.files &&
								store.files.map((item, index) => {
									if (item.caseNo === caseNo) {
										return (
											<li key={index}>
												<a href={item.file} Target="_blank">
													<p>{item.fileName}</p>
												</a>
											</li>
										);
									}
								})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
