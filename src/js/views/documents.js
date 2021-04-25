import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import "firebase/storage";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Documents = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [fileUrl, setFileUrl] = React.useState(null);
	const [fileName, setFileName] = useState("");
	const [file, setFile] = useState("");
	const [validationFile, setValidationFile] = useState(false);
	const [validation, setValidation] = useState(false);
	let caseNo = params.case;
	let result = false;
	toast.configure();

	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (validationFile && validation) {
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
					<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
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
													document.getElementById("buttonClose").click();
												}}
											/>
										</form>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											id="buttonClose"
											className="btn btn-secondary"
											data-dismiss="modal">
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
						<ul>
							{store.files &&
								store.files.map((item, index) => {
									if (item.caseNo === caseNo) {
										result = true;
										return (
											<li key={index}>
												<div className="row">
													<div className="d-flex justify-content-start col-md-10">
														<a href={item.file} Target="_blank">
															{item.fileName}
														</a>
													</div>
													<div className="col-md-2">
														<div
															className="fas fa-trash-alt"
															onClick={() => {
																actions.deleteDocument(item.id);
															}}
														/>
													</div>
												</div>
											</li>
										);
									}
								})}

							{result ? (
								""
							) : (
								<center>
									<h2>No files uploaded for this client</h2>
								</center>
							)}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
