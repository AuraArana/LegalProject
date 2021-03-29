import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { Home } from "./views/home";
import { Dashboard } from "./views/dashboard";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { AddBio } from "./views/AddBio.js";
import { Clients } from "./views/Clients.js";
import injectContext from "./store/appContext";
import { useLocation } from "react-router-dom";
import { Navbar } from "./component/navbar";
import { BarTop } from "./component/bartop";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	let isLoggedIn = true;

	return (
		<div className="">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{isLoggedIn ? <BarTop /> : ""}

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
									<Home />
								</Route>
								{isLoggedIn ? (
									<Route exact path="/demo">
										<Demo />
									</Route>
								) : (
									<Route exact path="/">
										<Home />
									</Route>
								)}
								{isLoggedIn ? (
									<Route exact path="/clients/:post">
										<Clients />
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
