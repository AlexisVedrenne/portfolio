import { getApp } from "firebase/app";
import "firebase/auth";

export async function singIn({ commit }, { infos }) {
  user = await getApp
    .auth()
    .signInWithEmailAndPassword(infos.email, infos.password);
  if (user) {
    commit("setUser", user);
    return true;
  } else {
    return false;
  }
}
