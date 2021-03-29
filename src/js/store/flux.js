const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			credentials: [
				{
					email: "abc@gmail.com",
					password: "abc"
				},
				{
					email: "123@gmail.com",
					password: "123"
				}
			],
			User: null,
			isLoggedIn: false,
			ListClients: [],
			inmigrationInfo: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getListClients: () => {
				fetch("https://api.jsonbin.io/b/605fedb2418f307e25838a0c")
					.then(res => res.json())
					.then(response => {
						//console.log(contacts);
						setStore({ ListClients: response });
					});
			},
			//Inicio Heidys
			addInmigrationInfo(
				caseNo,
				dateEntry,
				portEntry,
				transportation,
				inmigrationStatus,
				birthCountry,
				birthCity,
				birthProvince,
				nationality,
				nativeLanguage,
				educationLevel,
				familyInUsa,
				lprStatus,
				elegibityDate
			) {
				fetch("https://api.jsonbin.io/b/606139c0050d147e2b2fc1dd", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						CaseNo: caseNo,
						DateEntryUSA: dateEntry,
						PortEntry: portEntry,
						Transportation: transportation,
						ImmigrationStatus: inmigrationStatus,
						BirthCountry: birthCountry,
						BirthCity: birthCity,
						BirthProvince: birthProvince,
						Nationality: nationality,
						NaitiveLanguage: nativeLanguage,
						EducationLevel: educationLevel,
						FamilyInUS: familyInUsa,
						LPRStatus: lprStatus,
						DCFEligibilityDate: elegibityDate
					})
				}).then(() => {
					fetch("https://api.jsonbin.io/b/606139c0050d147e2b2fc1dd")
						.then(response => response.json())
						.then(result => {
							setStore({
								inmigrationInfo: result
							});
						})
						.catch(e => console.error(e));
				});
			},
			//Fin Heidys

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
