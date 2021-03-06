import firebase from "firebase/app";
import "firebase/firestore";
import { toast } from "react-toastify";

const url = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			credentials: [],
			immigrationArr: [],
			legalArr: [],
			appRequest: [],
			currentUser: null,
			currentPortEntry: "",
			currentResolutionOutcome: "",
			currentImmigrationStatus: "",
			currentNationality: "",
			currentMaritalStatus: "",
			currentGender: "",
			count: [],
			currentCase: "",
			currentSearch: null,
			isLoggedIn: false,
			ListClients: [],
			agenda: [],
			files: [],
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

			setCurrentReportSE: ResolutionOutcome => {
				const store = getStore();
				setStore({ currentResolutionOutcome: ResolutionOutcome });
			},

			setCurrentReportImmigration: (portEntry, immigrationStatus, nationality) => {
				const store = getStore();
				setStore({ currentPortEntry: portEntry });
				setStore({ currentImmigrationStatus: immigrationStatus });
				setStore({ currentNationality: nationality });
			},

			setCurrentCase: () => {
				const store = getStore();
				const actions = getActions();
				let c = store.count[0].count + 1;
				const obj2 = {
					count: c,
					case: "LAWF-" + c
				};

				actions.updateCount(obj2, store.count[0].id);
				setStore({ currentCase: "LAWF-" + c });
			},

			getMsg2: () => {
				const store = getStore();
				for (let i in store.appRequest) {
					if (store.appRequest[i].status === "Pending") {
						toast.warning("You have an appointment from: " + store.appRequest[i].firstName);
					}
				}
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
					.then(() => {
						toast.success("Record successfully saved");
						getActions().getimmigrationArr();
					});
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

			addLegalData: (obj, id) => {
				firebase
					.firestore()
					.collection("legalArr")
					.doc(id)
					.set(obj)
					.catch(error => {
						alert(error);
					})
					.then(() => {
						toast.success("Record successfully saved");
						getActions().getlegalArr();
					});
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

			addAddAppointment: (obj, id) => {
				firebase
					.firestore()
					.collection("Appointment")
					.doc(id)
					.set(obj)
					.catch(error => {
						alert(error);
					})
					.then(() => {
						toast.success("Record successfully saved");
						getActions().getappRequest();
					});
			},

			getappRequest: async () => {
				try {
					const getContact = firebase.firestore().collection("Appointment");
					const response = await getContact.get();
					let array = [];
					response.forEach(contact => {
						array.push({ ...contact.data(), id: contact.id });
					});

					setStore({ appRequest: array });
				} catch (e) {
				} finally {
				}
			},
			//Fin Aura

			//Inicio Jose

			onFileChange: async (caseNo, e, id) => {
				const store = getStore();
				const file = e.target.files[0];
				if (e.target.files[0] != null) {
					const storageRef = firebase.storage().ref();
					const fileRef = storageRef.child(file.name);
					await fileRef.put(file);
					const fileUrl = await fileRef.getDownloadURL();

					await firebase
						.firestore()
						.collection("files")
						.doc(id)
						.set({
							caseNo: caseNo,
							fileName: file.name,
							file: fileUrl
						})

						.catch(error => {
							alert(error);
						})
						.then(() => {
							getActions().fetcFiles();
							toast.success("File uploaded successfully");
						});
				}
			},

			fetcFiles: async () => {
				try {
					const getContact = firebase.firestore().collection("files");
					const response = await getContact.get();

					let array = [];
					response.forEach(contact => {
						array.push({ ...contact.data(), id: contact.id });
					});
					setStore({
						files: array
					});
				} catch (e) {
				} finally {
				}
			},

			addBioData: (obj, id) => {
				firebase
					.firestore()
					.collection("ListClients")
					.doc(id)
					.set(obj)
					.catch(error => {
						alert(error);
					})
					.then(() => {
						toast.success("Record successfully saved");
						getActions().getListClients();
					});
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
					.then(() => {
						toast.success("Record successfully saved");
						getActions().getTableServices();
					});

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

			//nuevos
			editServices: (obj, id) => {
				firebase
					.firestore()
					.collection("TableServices")
					.doc(id)
					.set(obj)
					.catch(error => {
						alert(error);
					})
					.then(() => getActions().getTableServices());
			},
			editLedger: (obj, id) => {
				firebase
					.firestore()
					.collection("Ledger")
					.doc(id)
					.set(obj)
					.catch(error => {
						alert(error);
					})
					.then(() => {
						toast.success("Record successfully updated");
						getActions().getLedger();
					});
			},

			deleteLedger: id => {
				firebase
					.firestore()
					.collection("Ledger")
					.doc(id)
					.delete()
					.catch(error => {
						alert(error);
					})
					.then(() => {
						toast.success("Record successfully deleted");
						getActions().getLedger();
					});
			},

			deleteAppointment: id => {
				firebase
					.firestore()
					.collection("Appointment")
					.doc(id)
					.delete()
					.catch(error => {
						alert(error);
					})
					.then(() => {
						toast.success("Record successfully deleted");
						getActions().getappRequest();
					});
			},

			deleteDocument: id => {
				firebase
					.firestore()
					.collection("files")
					.doc(id)
					.delete()
					.catch(error => {
						alert(error);
					})
					.then(() => {
						toast.success("Document successfully deleted");
						getActions().fetcFiles();
					});
			},

			deleteServices: id => {
				firebase
					.firestore()
					.collection("TableServices")
					.doc(id)
					.delete()
					.catch(error => {
						alert(error);
					})
					.then(() => {
						toast.success("Record successfully deleted");
						getActions().getTableServices();
					});
			},

			//nuevos

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
			getCount: async () => {
				try {
					const getContact = firebase.firestore().collection("count");
					const response = await getContact.get();

					let array = [];
					response.forEach(contact => {
						array.push({ ...contact.data(), id: contact.id });
					});
					setStore({
						count: array
					});
					setStore({ currentCase: array[0].case });
				} catch (e) {
				} finally {
				}
			},

			updateCount: (obj, id) => {
				firebase
					.firestore()
					.collection("count")
					.doc(id)
					.set(obj)
					.catch(error => {
						alert(error);
					})
					.then(() => getActions().getCount());
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
