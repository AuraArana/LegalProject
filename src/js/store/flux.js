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
			ListClients: []
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
