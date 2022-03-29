import fire from "src/boot/FireBase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  orderBy,
  where,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { Notify } from "quasar";
import "core-js/es/array";

export async function fetchSkill({ commit }, { label }) {
  try {
    const q = await query(
      collection(fire.firebasebd, "skills"),
      where("label", "==", label)
    );
    const res = await getDocs(q);
    return res.docs[0].data();
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans skill : " + e.message,
      color: "negative",
    });
  }
}

export async function fetchAllSkills({ commit }) {
  try {
    const q = await query(
      collection(fire.firebasebd, "skills"),
      orderBy("level", "desc")
    );
    const res = await getDocs(q);
    let skills = [];
    res.forEach((skill) => {
      skills.push(skill.data());
    });
    commit("setSkills", { skills });
    return skills;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans skill : " + e.message,
      color: "negative",
    });
  }
}

export async function createSkills({ commit }, { skill }) {
  try {
    const skillRef = await addDoc(collection(fire.firebasebd, "skills"), skill);
    Notify.create({
      message: "La compétence a bien été créer ! : " + skillRef.id,
      color: "positive",
    });
    commit("addSkill", { skillRef });
    return skillRef;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans skill : " + e.message,
      color: "negative",
    });
  }
}

export async function deleteSkill({ commit }, { label }) {
  try {
    const q = await query(
      collection(fire.firebasebd, "skills"),
      where("label", "==", label)
    );
    const res = await getDocs(q);
    const id = res.docs[0].ref.id;
    await deleteDoc(doc(fire.firebasebd, "skills", id));
    Notify.create({
      message: "La compétence " + label + " a été supprimer !",
      color: "warning",
      textColor: "dark",
    });
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans skill : " + e.message,
      color: "negative",
    });
  }
}

export async function updateSkill({ commit }, { skill, lastLabel }) {
  try {
    const q = await query(
      collection(fire.firebasebd, "skills"),
      where("label", "==", lastLabel)
    );
    const res = await getDocs(q);
    const id = res.docs[0].ref.id;
    await setDoc(doc(fire.firebasebd, "skills", id), skill);
    Notify.create({
      message: "La compétence " + lastLabel + " a été mise à jour !",
      color: "info",
      textColor: "dark",
    });
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans skill : " + e.message,
      color: "negative",
    });
  }
}
