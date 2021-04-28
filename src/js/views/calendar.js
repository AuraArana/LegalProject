import React, { useState, useContext, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import "firebase/storage";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-agenda/build/styles.css";
import "react-datetime/css/react-datetime.css";
import { ReactAgenda } from "react-agenda";

export const Calendar = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	let items = [];
	toast.configure();

	var colors = {
		"color-1": "rgba(102, 195, 131 , 1)",
		"color-2": "rgba(242, 177, 52, 1)",
		"color-3": "rgba(235, 85, 59, 1)"
	};

	var now = new Date();

	for (let i in store.appRequest) {
		if (store.currentUser.email === store.appRequest[i].emailStaff) {
			let year1 = store.appRequest[i].startDateTime.substr(0, 4);
			let year2 = store.appRequest[i].endDateTime.substr(0, 4);
			let moth1 = store.appRequest[i].startDateTime.substr(5, 2);
			let moth2 = store.appRequest[i].endDateTime.substr(5, 2);
			let day1 = store.appRequest[i].startDateTime.substr(8, 2);
			let day2 = store.appRequest[i].endDateTime.substr(8, 2);
			let hou1 = store.appRequest[i].startDateTime.substr(11, 2);
			let hou2 = store.appRequest[i].endDateTime.substr(11, 2);
			let min1 = store.appRequest[i].startDateTime.substr(14, 2);
			let min2 = store.appRequest[i].endDateTime.substr(14, 2);

			const obj2 = {
				_id: store.appRequest[i].id,
				name: store.appRequest[i].name,
				startDateTime: new Date(year1, parseInt(moth1) - 1, day1, hou1, min1),
				endDateTime: new Date(year2, parseInt(moth2) - 1, day2, hou2, min2),
				classes: store.appRequest[i].classes
			};

			items.push(obj2);
		}
	}

	const [state, setState] = useState({
		items: items,
		selected: [],
		cellHeight: 30,
		showModal: false,
		locale: "en",
		rowsPerHour: 2,
		numberOfDays: 5,
		startDate: new Date()
	});

	return (
		<>
			<div>
				<ReactAgenda
					minDate={now}
					maxDate={new Date(now.getFullYear(), now.getMonth() + 7)}
					disablePrevButton={false}
					startDate={state.startDate}
					cellHeight={state.cellHeight}
					locale={state.locale}
					items={state.items}
					numberOfDays={state.numberOfDays}
					rowsPerHour={state.rowsPerHour}
					itemColors={colors}
					autoScale={true}
					fixedHeader={true}
				/>
			</div>
		</>
	);
};
