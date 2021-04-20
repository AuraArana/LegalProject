import firebase from "firebase/app";

export const updateUser = async (uid, email, password, displayName) => {
	await firebase
		.auth()
		.updateUser(uid, {
			email,
			phoneNumber,
			password
		})
		.then(userRecord => {
			// See the UserRecord reference doc for the contents of userRecord.
			console.log("Successfully updated user", userRecord.toJSON());
		})
		.catch(error => {
			console.log("Error updating user:", error);
		});
};
