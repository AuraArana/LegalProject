import firebase from "firebase/app";

export const createAccount = async (email, password) => {
	await firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then();
};
