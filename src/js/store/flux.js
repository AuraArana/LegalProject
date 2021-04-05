const url = "https://assets.breatheco.de/apis/fake/contact/";
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
						userType: "Staff"
					}
				},
				{
					email: "123@gmail.com",
					password: "123",
					user: {
						firstName: "Jeffrey",
						lastName: "Smith",
						userType: "Client"
					}
				}
			],
			immigrationArr: [
				{
					dateEntry: "05/20/2020",
					portEntry: "Miami International Airport, Florida - 5206",
					immigrationStatus: "Permanent or Conditional Residents"
				}
			],
			currentUser: null,
			count: 1000,
			currentCase: "LAWF-1000",
			isLoggedIn: false,
			ListClients: [],
			agenda: [],
			Ledger: [],
			immigrationInfo: [],
			TableServices: [],
			listOfServices: []
		},

		actions: {
			addImmigrationData: obj => {
				setStore({ immigrationArr: [...getStore().immigrationArr, obj] });
			},
			// Use getActions to call a function within a fuction
			setCurrentUser: user => {
				setStore({ currentUser: user });
			},

			setCurrentCase: () => {
				const store = getStore();
				let c = store.count + 1;
				setStore({ count: c });
				setStore({ currentCase: "LAWF-" + c });
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

			addClientUser(email, password, firstName, lastName, userType) {
				fetch("https://api.jsonbin.io/b/606139c0050d147e2b2fc1dd", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						password: password,
						firstName: firstName,
						lastName: lastName,
						userType: userType
					})
				}).then(() => {
					fetch("https://api.jsonbin.io/b/606139c0050d147e2b2fc1dd")
						.then(response => response.json())
						.then(result => {
							setStore({
								credentials: result
							});
						})
						.catch();
				});
			},
			//Fin Heidys

			//Inicio Aura

			//Fin Aura

			//Inicio Jose
			updateTableServices: (var1, var2, var3, var4, var5, var6, var7) => {
				const store = getStore();
				let amount = 0;
				const obj = {
					contract: var1,
					intakeDate: var2,
					reviewDate: var3,
					filingDate: var4,
					resolutionDate: var5,
					resolutionOutcome: var6,
					comments: var7
				};
				store.TableServices.push(obj);

				for (let i in store.listOfServices) {
					if (store.listOfServices[i].Desc === var1) {
						amount = store.listOfServices[i].Amount;
					}
				}
				const obj2 = {
					ServiceType: var1,
					intakeDate: var2,
					Transaction: "Service Fee",
					Amount: amount
				};
				store.Ledger.push(obj2);
			},
			getlistOfServices: () => {
				fetch("https://api.jsonbin.io/b/6064d5f5f2163e5ad3f6e798")
					.then(res => res.json())
					.then(response => {
						//console.log(contacts);
						setStore({ listOfServices: response });
					});
			},

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
