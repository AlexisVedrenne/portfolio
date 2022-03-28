import fire from "src/boot/FireBase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Notify } from "quasar";
import "core-js/es/array";

export async function singIn({ commit }, { infos }) {
  try {
    let user = await signInWithEmailAndPassword(
      fire.auth,
      infos.email.toString().trim(),
      infos.password.toString().trim()
    );
    commit("setUser", { user: user });
    Notify.create({
      message: "Connexion réussie !",
      color: "green",
    });
    return user.user;
  } catch (error) {
    let e = error.message;
    if (error.message.includes("password")) {
      e = "Mot de passe incorrect !";
    }
    if (error.message.includes("user-not-found")) {
      e = "L'utilisateur n'existe pas !";
    }
    if (error.message.includes("invalid-email")) {
      e = "Addresse mail invalide !";
    }
    Notify.create({
      message: e,
      color: "red",
    });
  }
}

export async function sinOut({ commit }) {
  try {
    signOut(fire.auth);
    commit("out");
    Notify.create({
      message: "Vous avez été deconnecté",
      color: "warning",
      textColor: "dark",
    });
  } catch (e) {
    Notify.create({
      message: e.message,
      color: "red",
    });
  }
}
