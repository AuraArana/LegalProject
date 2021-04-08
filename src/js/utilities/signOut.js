import firebase from "firebase/app";

export const signOut = async () => {
	try {
		await firebase.auth().signOut();
	} catch (e) {
		alert(e.message);
	}
};
