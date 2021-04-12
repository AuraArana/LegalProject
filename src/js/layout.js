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
import { EditBio } from "./views/editBio.js";
import { Services } from "./views/services.js";
import { AddServices } from "./views/AddServices.js";
import { ServicesForm } from "./views/ServicesForm.js";
import { ServicesReport } from "./views/ServicesReport.js";
import { CaseReport } from "./views/caseReport.js";
import { Ledger } from "./views/ledger.js";
import { AddImmigration } from "./views/AddImmigration.js";
import { EditImmigration } from "./views/EditImmigration.js";
import { AddLegal } from "./views/legalRecords.js";
import { EditLegal } from "./views/editLegal.js";
import { Clients } from "./views/Clients.js";
import injectContext from "./store/appContext";
import { useLocation } from "react-router-dom";
import { Navbar } from "./component/navbar";
import { BarTop } from "./component/bartop";
import { Footer } from "./component/footer";
import { AddClientUser } from "./views/AddClientUser";

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
									<Route exact path="/editbio/:case">
										<EditBio />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}

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
