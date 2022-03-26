import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = process.env.QENV.FIREBASE_CONFIG;
const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
let firebasebd = firestore.getFirestore();
export default { firebasebd, storage };
