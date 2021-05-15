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
				<div className="mt-4 ml-auto ml-auto text-dark" style={{ marginRight: "80px" }}>
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => {
							document.getElementById("file").click();
						}}>
						Add Document
					</button>

					<form onSubmit={onSubmit}>
						<div className="form-group">
							<input
								type="file"
								id="file"
								hidden
								onChange={e => {
									actions.onFileChange(caseNo, e);
									e.preventDefault();
									setFile(e.target.value);
								}}
								className="form-control-file"
							/>
						</div>
					</form>
				</div>
			</nav>

			<div className="row mb-4 card shadow border-left-primary col-lg-10 mx-auto pt-5 pb-5">
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
