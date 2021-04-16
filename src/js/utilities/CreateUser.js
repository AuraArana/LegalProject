import firebase from "firebase/app";
import "firebase/firestore";

export const CreateUser = (email, password, firstName, lastName, userType) => {
	let user = {
		email: email,
		password: password,
		firstName: firstName,
		lastName: lastName,
		userType: userType
	};

	db.collection("credentials")
		.add({ user })
		.then(docRef => {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(error => {
			console.error("Error adding document: ", error);
		});
};
