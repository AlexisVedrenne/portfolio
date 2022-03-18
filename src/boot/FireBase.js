import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";

const firebaseConfig = process.env.QENV.FIREBASE_CONFIG;
const app = firebase.initializeApp(firebaseConfig);
let firebasebd = firestore.getFirestore();
export default firebasebd;
