const firebase = require("firebase");
const fetch = require("node-fetch")
require("firebase/firestore");

const url = "https://assets.breatheco.de/apis/fake/contact/";
let contacts = [
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
]
var firebaseConfig = {
	apiKey: "AIzaSyAIYVsPhQI3wb6QXsRnhn8xB_RgauGfmIY",
	authDomain: "mdc-auth-edfb1.firebaseapp.com",
	projectId: "mdc-auth-edfb1",
	storageBucket: "mdc-auth-edfb1.appspot.com",
	messagingSenderId: "740672945803",
	appId: "1:740672945803:web:5c2701e7c50b2f82ae9e8e",
	measurementId: "G-R7DQRT041Q"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function populateCollection(collectionName, items) {

    return Promise.all(
        items && items.map((item) => {
            const { id, ...data } = item;
            return db.collection(collectionName).doc(id).set(data);
        })
    );
}

const getContacts = () => {

            Promise.all([
                populateCollection("legalArr", contacts),

            ])
                .then(() => {
                    console.log("Done!");
                    process.exit(0);
                })
                .catch((err) => {
                    console.log(err);
                })
        

}
getContacts()