// import * as firebase from "src/services/firebase/base";
// import { LocalStorage, SessionStorage } from "quasar";
// import { Notify } from "quasar";
// import "core-js/es/array";

// export async function singIn({ commit }, { infos }) {
//   try {
//     let auth = firebase.auth();
//     let user = await auth.signInWithEmailAndPassword(
//       infos.email.toString().trim(),
//       infos.password.toString().trim()
//     );
//     commit("setUser", { user: user.user });
//     SessionStorage.set("user", user.user);
//     Notify.create({
//       message: "Connexion réussie !",
//       color: "green",
//     });
//   } catch (error) {
//     Notify.create({
//       message: error.message,
//       color: "red",
//     });
//   }
// }
