import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { Home } from "./views/home";
import { Dashboard } from "./views/dashboard";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { AddBio } from "./views/AddBio.js";
import { ReportBio } from "./views/reportBio.js";
import { RepBio } from "./views/repBio.js";
import { EditBio } from "./views/editBio.js";
import { Services } from "./views/services.js";
import { AddServices } from "./views/AddServices.js";
import { AddLedger } from "./views/addLedger.js";
import { EditServices } from "./views/editServices.js";

import { EditServicesForm } from "./views/editServicesForm.js";
import { EditLedgerForm } from "./views/editLedgerForm.js";
import { Payment } from "./views/payment.js";
import { AppRequest } from "./views/appointmentRequest.js";
import { Charts } from "./views/charts.js";
import { ServicesForm } from "./views/ServicesForm.js";
import { ServicesReport } from "./views/ServicesReport.js";

import { ServiceStatusReport } from "./views/serviceStatusReport.js";
import { ServiceStatusForm } from "./views/serviceStatusForm.js";

import { CaseReport } from "./views/caseReport.js";
import { Ledger } from "./views/ledger.js";
import { EditLedger } from "./views/editLedger.js";
import { AddImmigration } from "./views/AddImmigration.js";
import { EditImmigration } from "./views/EditImmigration.js";
import { ReportImmigration } from "./views/reportImmigration.js";
import { RepImmigration } from "./views/repImmigration.js";
import { AddLegal } from "./views/legalRecords.js";
import { EditLegal } from "./views/editLegal.js";
import { Clients } from "./views/Clients.js";
import { ClientsDebt } from "./views/clientsDebt.js";
import injectContext from "./store/appContext";
import { useLocation } from "react-router-dom";
import { Navbar } from "./component/navbar";
import { BarTop } from "./component/bartop";
import { Footer } from "./component/footer";
import { AddClientUser } from "./views/AddClientUser";
import { AddUser } from "./views/AddUser";
import { EditUser } from "./views/EditUser";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [isLoggedIn, setLoggedIn] = useState(false);

	// let isLoggedIn = true;
	//console.log("isLoggedIn", isLoggedIn);
	return (
		<div className="">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{isLoggedIn ? <BarTop logOut={() => setLoggedIn(!isLoggedIn)} /> : ""}

					<div className="row">
						{isLoggedIn ? (
							<div className="mr-0 col-sm-2">
								<Navbar />
							</div>
						) : (
							""
						)}

						<div className={isLoggedIn ? "mr-0 col-sm-10" : "mr-0 col-sm-12"}>
							<Switch>
								<Route exact path="/">
									<Home validCredentials={() => setLoggedIn(!isLoggedIn)} />
								</Route>
								{isLoggedIn ? (
									<Route exact path="/demo">
										<Demo />
									</Route>
								) : (
									// <Route exact path="/">
									// 	<Home />
									// </Route>
									""
								)}
								{isLoggedIn ? (
									<Route exact path="/clients/">
										<Clients />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/Clientsdebt/">
										<ClientsDebt />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/reportbio/">
										<ReportBio />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}
								{isLoggedIn ? (
									<Route exact path="/repbio/">
										<RepBio />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/editbio/:case">
										<EditBio />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/editledger/:case">
										<EditLedger />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/editServices/:case">
										<EditServices />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{/* //jose */}
								{isLoggedIn ? (
									<Route exact path="/editServicesForm/:case">
										<EditServicesForm />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/editLedgerForm/:case">
										<EditLedgerForm />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/payment/:case">
										<Payment />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/charts/">
										<Charts />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/appointmentRequest/">
										<AppRequest />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{/* //jose */}
								<Route exact path="/single/:theid">
									<Single />
								</Route>

								{isLoggedIn ? (
									<Route exact path="/addBio" component={AddBio} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/addservices" component={AddServices} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/addLedger" component={AddLedger} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/services" component={Services} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/servicesform" component={ServicesForm} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/servicestatusform/">
										<ServiceStatusForm />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/servicestatusreport" component={ServiceStatusReport} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/servicesreport/:contract" component={ServicesReport} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/casereport/:case" component={CaseReport} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/ledger" component={Ledger} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/addImmigration" component={AddImmigration} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/editImmigration/:case">
										<EditImmigration />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/legalRecords" component={AddLegal} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/editLegal/:case">
										<EditLegal />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{!isLoggedIn ? (
									<Route exact path="/addClientUser" component={AddClientUser} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/addUser" component={AddUser} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/editUser" component={EditUser} />
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								{isLoggedIn ? (
									<Route exact path="/reportImmigration">
										<ReportImmigration />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}
								{isLoggedIn ? (
									<Route exact path="/repImmigration">
										<RepImmigration />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

								<Route>
									<h1>Not found!</h1>
								</Route>
							</Switch>
						</div>
						{/* <Footer /> */}
					</div>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
