import firebasebd from "src/boot/FireBase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Notify } from "quasar";
import "core-js/es/array";

export async function fetchAllSkills({ commit }) {
  try {
    const res = await getDocs(collection(firebasebd, "skills"));
    let skills = [];
    res.forEach((skill) => {
      skills.push(skill.data());
    });
    commit("setSkills", { skills });
    return skills;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite : " + e.message,
      color: "negative",
    });
  }
}

export async function createSkills({ commit }, { skill }) {
  try {
    const skillRef = await addDoc(collection(firebasebd, "skills"), skill);
    Notify.create({
      message: "La compétence a bien été créer ! : " + skillRef.id,
      color: "positive",
    });
    commit("addSkill", { skillRef });
    return skillRef;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite : " + e.message,
      color: "negative",
    });
  }
}
