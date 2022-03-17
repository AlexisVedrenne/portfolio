import * as firebase from "src/services/firebase/base";

export async function singIn({ commit }, { infos }) {
  try {
    let auth = firebase.auth();
    let user = await auth.signInWithEmailAndPassword(
      infos.email.toString().trim(),
      infos.password.toString().trim()
    );
    commit("setUser", user.user);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
