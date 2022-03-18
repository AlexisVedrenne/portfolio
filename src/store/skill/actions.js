import firebasebd from "src/boot/FireBase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Notify } from "quasar";
import "core-js/es/array";

export async function fetchAllSkills({ commit }) {
  try {
    const skills = await getDocs(collection(db, "skills"));
    commit("setSkills", { skills });
    return skills;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite : " + e,
      color: "red",
    });
  }
}

export async function createSkills({ commit }, { skill }) {
  try {
    const skillRef = await addDoc(collection(firebasebd, "skills"), skill);
    Notify.create({
      message: "La compétence a bien été créer !" + skillRef.id,
      color: "green",
    });
    commit("addSkill", { skillRef });
    return skillRef;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite : " + e,
      color: "red",
    });
  }
}
