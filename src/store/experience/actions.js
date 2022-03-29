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

export async function createExperience({ commit }, { experience }) {
  try {
    const exRef = await addDoc(
      collection(fire.firebasebd, "experience"),
      experience
    );
    Notify.create({
      message: "L'expérience a bien été créer ! : " + exRef.id,
      color: "positive",
    });
    commit("addExperience", { exRef });
    return exRef;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans experience : " + e.message,
      color: "negative",
    });
  }
}
export async function fetchAllExperiences({ commit }) {
  try {
    const res = await getDocs(collection(fire.firebasebd, "experience"));
    0;
    let ex = [];
    res.forEach((exe) => {
      ex.push(exe.data());
    });
    commit("setExperiences", { ex });
    return ex;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans experience : " + e.message,
      color: "negative",
    });
  }
}

export async function fetchExperience({ commit }, { titre }) {
  try {
    const q = await query(
      collection(fire.firebasebd, "experience"),
      where("titre", "==", titre)
    );
    const res = await getDocs(q);
    return res.docs[0].data();
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans experience : " + e.message,
      color: "negative",
    });
  }
}

export async function deleteExperience({ commit }, { titre }) {
  try {
    const q = await query(
      collection(fire.firebasebd, "experience"),
      where("titre", "==", titre)
    );
    const res = await getDocs(q);
    const id = res.docs[0].ref.id;
    await deleteDoc(doc(fire.firebasebd, "experience", id));
    Notify.create({
      message: "L'expérience pro  " + titre + " a été supprimer !",
      color: "warning",
      textColor: "dark",
    });
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans experience : " + e.message,
      color: "negative",
    });
  }
}

export async function updateExperience({ commit }, { experience, lastTitre }) {
  try {
    const q = await query(
      collection(fire.firebasebd, "experience"),
      where("titre", "==", lastTitre)
    );
    const res = await getDocs(q);
    const id = res.docs[0].ref.id;
    await setDoc(doc(fire.firebasebd, "experience", id), experience);
    Notify.create({
      message: "La compétence " + lastTitre + " a été mise à jour !",
      color: "info",
      textColor: "dark",
    });
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans experience : " + e.message,
      color: "negative",
    });
  }
}
