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
			addImmigrationData: (obj, id) => {
				firebase
					.firestore()
					.collection("immigrationArr")
					.doc(id)
					.set(obj)
					.catch(error => {
						alert(error);
					})
					.then(() => getActions().getimmigrationArr());
			},

			addClientUserData: (obj, id) => {
				firebase
					.firestore()
					.collection("credentials")
					.doc(id)
					.set(obj)
					.catch(error => {
						alert(error);
					})
					.then(() => getActions().getCredentials());
			},

			addUserData: (obj, id) => {
				firebase
					.firestore()
					.collection("credentials")
					.doc(id)
					.set(obj)
					.catch(error => {
						alert(error);
					})
					.then(() => getActions().getCredentials());
			},

			getimmigrationArr: async () => {
				try {
					const getContact = firebase.firestore().collection("immigrationArr");
					const response = await getContact.get();

					let array = [];
					response.forEach(contact => {
						array.push({ ...contact.data(), id: contact.id });
					});
					setStore({
						immigrationArr: array
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
					let array = [];
					response.forEach(contact => {
						array.push({ ...contact.data(), id: contact.id });
					});

					setStore({ legalArr: array });
				} catch (e) {
				} finally {
				}
			},
			//Fin Aura

			//Inicio Jose

			addBioData: (obj, id) => {
				firebase
					.firestore()
					.collection("ListClients")
					.doc(id)
					.set(obj)
					.catch(error => {
						alert(error);
					})
					.then(() => getActions().getListClients());
			},

			addServices: (obj, id) => {
				firebase
					.firestore()
					.collection("TableServices")
					.doc(id)
					.set(obj)
					.catch(error => {
						alert(error);
					})
					.then(() => getActions().getTableServices());

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

				firebase
					.firestore()
					.collection("Ledger")
					.doc(id)
					.set(obj2)
					.catch(error => {
						alert(error);
					})
					.then(() => getActions().getLedger());
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

					let array = [];
					response.forEach(contact => {
						array.push({ ...contact.data(), id: contact.id });
					});
					setStore({
						TableServices: array
					});
				} catch (e) {
				} finally {
				}
			},
			getCredentials: async () => {
				try {
					const getContact = firebase.firestore().collection("credentials");
					const response = await getContact.get();
					let array = [];
					response.forEach(contact => {
						array.push({ ...contact.data(), id: contact.id });
					});
					setStore({ credentials: array });
				} catch (e) {
				} finally {
				}
			},
			getListClients: async () => {
				try {
					const getContact = firebase.firestore().collection("ListClients");
					const response = await getContact.get();
					let array = [];
					response.forEach(contact => {
						array.push({ ...contact.data(), id: contact.id });
					});
					setStore({ ListClients: array });
				} catch (e) {
				} finally {
				}
			},
			getLedger: async () => {
				try {
					const getContact = firebase.firestore().collection("Ledger");
					const response = await getContact.get();
					let array = [];
					response.forEach(contact => {
						array.push({ ...contact.data(), id: contact.id });
					});
					setStore({ Ledger: array });
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
