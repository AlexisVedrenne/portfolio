import fire from "src/boot/FireBase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Notify } from "quasar";
import "core-js/es/array";

export async function fetchAllProjects({ commit, dispatch }) {
  try {
    const res = await getDocs(collection(fire.firebasebd, "projects"));
    let projects = [];
    let skillTemp = [];
    let tmpProject = null;
    res.forEach((project) => {
      tmpProject = project.data();
      tmpProject.skills.forEach(async (skill) => {
        skillTemp.push(await dispatch("fetchSkill", { skillRef: skill }));
      });
      tmpProject.skills = skillTemp;
      projects.push(tmpProject);
      skillTemp = [];
    });
    commit("setProjects", { projects });
    return projects;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite : " + e.message,
      color: "negative",
    });
  }
}
