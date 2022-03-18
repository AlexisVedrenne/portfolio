// import { LocalStorage } from "quasar";
// import firebaseServices from "../../services/firebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   getFirestore,
// } from "firebase/firestore/lite";

// export async function createProject({ commit }, { project }) {
//   const app = firebaseServices.fBInit(LocalStorage.getItem("env"));
//   let db = getFirestore(app);
//   const projects = collection(db, "projects");
//   await addDoc(db, projects, JSON.stringify({ name: project }));
//   commit("addProject", { project: project });
// }

// export async function fetchAllProjects({ commit }) {
//   commit("setProjects", { projects });
// }
