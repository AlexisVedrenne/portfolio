import firebaseServices from "../services/firebase";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default async () => {
  const app = firebaseServices.fBInit(process.env.QENV.FIREBASE_CONFIG);
  // Validation that our service structure is working
  // with an initialize Firebase application and auth instance.
};
