//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import $ from "jquery";
import Popper from "popper.js";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

//include bootstrap npm library into the bundle
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

var firebaseConfig = {
	apiKey: "AIzaSyAIYVsPhQI3wb6QXsRnhn8xB_RgauGfmIY",
	authDomain: "mdc-auth-edfb1.firebaseapp.com",
	projectId: "mdc-auth-edfb1",
	storageBucket: "mdc-auth-edfb1.appspot.com",
	messagingSenderId: "740672945803",
	appId: "1:740672945803:web:5c2701e7c50b2f82ae9e8e",
	measurementId: "G-R7DQRT041Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
