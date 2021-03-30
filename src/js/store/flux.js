const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			credentials: [
				{
					email: "abc@gmail.com",
					password: "abc",
					user: {
						firstName: "William",
						lastName: "Lopez",
						userType: 2
					}
				},
				{
					email: "123@gmail.com",
					password: "123",
					user: "name123",
					user: {
						firstName: "Jeffrey",
						lastName: "Smith",
						userType: 1
					}
				}
			],
			currentUser: null,
			isLoggedIn: false,
			ListClients: [],
			immigrationInfo: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			setCurrentUser: user => {
				setStore({ currentUser: user });
			},

			getListClients: () => {
				fetch("https://api.jsonbin.io/b/605fedb2418f307e25838a0c")
					.then(res => res.json())
					.then(response => {
						//console.log(contacts);
						setStore({ ListClients: response });
					});
			},
			//Inicio Heidys
			addImmigrationInfo(
				caseNo,
				dateEntry,
				portEntry,
				transportation,
				immigrationStatus,
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
						ImmigrationStatus: immigrationStatus,
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
								immigrationInfo: result
							});
						})
						.catch();
				});
			},
			//Fin Heidys

			//Inicio Aura

			//Fin Aura

			//Inicio Jose

			//Fin Jose

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
