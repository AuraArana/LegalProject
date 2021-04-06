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
					caseNo: "LAWF-999",
					dateEntry: "05/20/1998",
					portEntry: "Miami International Airport, Florida - 5206",
					immigrationStatus: "Permanent or Conditional Residents"
				},
				{
					caseNo: "LAWF-1000",
					dateEntry: "05/20/2020",
					portEntry: "Miami International Airport, Florida - 5206",
					immigrationStatus: "Permanent or Conditional Residents"
				}
			],
			legalArr: [
				{
					caseNo: "LAWF-999",
					legalProblem: "sample of legal problem paragraph",
					caseGoal: "sample of case goal paragraph",
					followUp: "sample of follow up paragraph",
					arrestRecord: "sample of arrest record paragraph",
					criminalAttorney: "Michael Silva",
					attorneyPhone: "3056779876"
				},
				{
					caseNo: "LAWF-1000",
					legalProblem: "sample of legal problem paragraph2",
					caseGoal: "sample of case goal paragraph2",
					followUp: "sample of follow up paragraph2",
					arrestRecord: "sample of arrest record paragraph2",
					criminalAttorney: "Peter Williams",
					attorneyPhone: "3053987067"
				}
			],
			currentUser: null,
			count: 1000,
			currentCase: "LAWF-1000",
			isLoggedIn: false,
			ListClients: [
				{
					caseNo: "LAWF-999",
					AlienNo: "208568545",
					LastName: "Diaz",
					FirstName: "Jose",
					DOB: "1982-11-02",
					Gender: "M",
					MaritalStatus: "M",
					address: "6055 NW",
					City: "DORAL",
					State: "FLORDA",
					ZipCode: "33178",
					Email: "jdiaz@GMIAL.COM",
					HomePhone: "7867878987",
					WorkPhone: "3059842526"
				},
				{
					caseNo: "LAWF-1000",
					AlienNo: "202168941",
					LastName: "Diaz",
					FirstName: "Miguel",
					DOB: "1987-12-07",
					Gender: "M",
					MaritalStatus: "S",
					address: "7330 NW",
					City: "DORAL",
					State: "FLORDA",
					ZipCode: "33178",
					Email: "mdiaazL@GMIAL.COM",
					HomePhone: "3059874657",
					WorkPhone: "305987662"
				}
			],
			agenda: [],
			Ledger: [],
			immigrationInfo: [],
			TableServices: [],
			listOfServices: []
		},

		actions: {
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
			//Inicio Heidys
			addImmigrationData: obj => {
				setStore({ immigrationArr: [...getStore().immigrationArr, obj] });
			},

			//Fin Heidys

			//Inicio Aura
			addLegalData: obj => {
				setStore({ legalArr: [...getStore().legalArr, obj] });
			},
			//Fin Aura

			//Inicio Jose

			addIbioData: obj => {
				setStore({ ListClients: [...getStore().ListClients, obj] });
			},

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
