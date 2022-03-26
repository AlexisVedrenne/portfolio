import fire from "src/boot/FireBase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  orderBy,
  where,
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
      message: "Une erreur s'est produite : " + e.message,
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
      message: "Une erreur s'est produite : " + e.message,
      color: "negative",
    });
  }
}
