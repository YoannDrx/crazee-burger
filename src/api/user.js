import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
	const docRef = doc(db, "users", idUser);
	const docSnapshot = await getDoc(docRef);

	if (docSnapshot.exists()) {
		const userReceived = docSnapshot.data();
		return userReceived;
	}
};

// quand une fonction retourne une promesse, cette promesse ne peut avoir que 3 valeurs possibles :
// 1er cas : promesse en cours d'achèvement => Promise (pending)
// 2e cas : résultat positif de la promesse achevée => résultat positif (fulfilled)
// 3e cas : résultat négatif de la promesse achevée => résultat négatif (rejected)

export const createUser = (userId) => {
	const docRef = doc(db, "users", userId);

	const newDoc = {
		username: userId,
		menu: fakeMenu.LARGE,
	};

	setDoc(docRef, newDoc);
};
