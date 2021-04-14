import firebase from "firebase/app";
import "firebase/firestore";

const url = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			credentials: [],
			immigrationArr: [],
			legalArr: [],
			currentUser: null,
			currentPortEntry: "",
			currentImmigrationStatus: "",
			currentNationality: "",
			currentMaritalStatus: "",
			currentGender: "",
			count: 1000,
			currentCase: "LAWF-1000",
			currentSearch: null,
			isLoggedIn: false,
			ListClients: [],
			agenda: [],
			Ledger: [],
			immigrationInfo: [],
			TableServices: [],
			listOfServices: [],
			filteredClients: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			setCurrentUser: user => {
				setStore({ currentUser: user });
			},

			setCurrentReportBio: (gender, maritalStatus) => {
				const store = getStore();
				setStore({ currentGender: gender });
				setStore({ currentMaritalStatus: maritalStatus });
			},

			setCurrentReportImmigration: (portEntry, immigrationStatus, nationality) => {
				const store = getStore();
				setStore({ currentPortEntry: portEntry });
				setStore({ currentImmigrationStatus: immigrationStatus });
				setStore({ currentNationality: nationality });
			},

			setCurrentCase: () => {
				const store = getStore();
				let c = store.count + 1;
				setStore({ count: c });
				setStore({ currentCase: "LAWF-" + c });
			},
			setCurrentSearch: search => {
				const store = getStore();
				setStore({ currentSearch: search });
			},
			//Inicio Heidys
			addImmigrationData: obj => {
				setStore({ immigrationArr: [...getStore().immigrationArr, obj] });
			},
			addClientUserData: obj => {
				setStore({ credentials: [...getStore().credentials, obj] });
			},
			addUserData: obj => {
				setStore({ credentials: [...getStore().credentials, obj] });
			},

			getimmigrationArr: async () => {
				try {
					const getContact = firebase.firestore().collection("immigrationArr");
					const response = await getContact.get();
					response.forEach(contact => {
						setStore({
							immigrationArr: [...getStore().immigrationArr, { ...contact.data(), id: contact.id }]
						});
					});
				} catch (e) {
				} finally {
				}
			},

			//Fin Heidys

			//Inicio Aura
			addLegalData: obj => {
				setStore({ legalArr: [...getStore().legalArr, obj] });
			},

			getlegalArr: async () => {
				try {
					const getContact = firebase.firestore().collection("legalArr");
					const response = await getContact.get();
					response.forEach(contact => {
						setStore({
							legalArr: [...getStore().legalArr, { ...contact.data(), id: contact.id }]
						});
					});
				} catch (e) {
				} finally {
				}
			},
			//Fin Aura

			//Inicio Jose

			addIbioData: obj => {
				setStore({ ListClients: [...getStore().ListClients, obj] });
			},

			addServices: obj => {
				setStore({ TableServices: [...getStore().TableServices, obj] });

				const store = getStore();
				let amount = 0;
				for (let i in store.listOfServices) {
					if (store.listOfServices[i].Desc === obj.Contract) {
						amount = store.listOfServices[i].Amount;
					}
				}
				const obj2 = {
					ServiceType: obj.Contract,
					intakeDate: obj.IntakeDate,
					Transaction: "Service Fee",
					Amount: amount,
					caseNo: obj.caseNo
				};
				//getActions().addTableServices(obj2);
				setStore({ Ledger: [...getStore().Ledger, obj2] });
			},

			getlistOfServices: () => {
				fetch("https://api.jsonbin.io/b/6064d5f5f2163e5ad3f6e798")
					.then(res => res.json())
					.then(response => {
						setStore({ listOfServices: response });
					});
			},
			getTableServices: async () => {
				try {
					const getContact = firebase.firestore().collection("TableServices");
					const response = await getContact.get();
					response.forEach(contact => {
						setStore({
							TableServices: [...getStore().TableServices, { ...contact.data(), id: contact.id }]
						});
					});
				} catch (e) {
				} finally {
				}
			},
			getCredentials: async () => {
				try {
					const getContact = firebase.firestore().collection("credentials");
					const response = await getContact.get();
					response.forEach(contact => {
						setStore({ credentials: [...getStore().credentials, { ...contact.data(), id: contact.id }] });
					});
				} catch (e) {
				} finally {
				}
			},
			getListClients: async () => {
				try {
					const getContact = firebase.firestore().collection("ListClients");
					const response = await getContact.get();
					response.forEach(contact => {
						setStore({ ListClients: [...getStore().ListClients, { ...contact.data(), id: contact.id }] });
					});
				} catch (e) {
				} finally {
				}
			},
			getLedger: async () => {
				try {
					const getContact = firebase.firestore().collection("Ledger");
					const response = await getContact.get();
					response.forEach(contact => {
						setStore({ Ledger: [...getStore().Ledger, { ...contact.data(), id: contact.id }] });
					});
				} catch (e) {
				} finally {
				}
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
			},
			filterClients: arr => {
				setStore({ filteredClients: arr });
			}
		}
	};
};

export default getState;
