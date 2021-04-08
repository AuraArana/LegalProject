import firebase from "firebase/app";

export const signIn = async (email, password) => {
	await firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then();
};
