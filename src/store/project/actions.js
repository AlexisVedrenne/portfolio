import fire from "src/boot/FireBase";
import { collection, addDoc, getDocs, getDoc } from "firebase/firestore";
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
        skillTemp.push(await dispatch("fetchSkill", { label: skill }));
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

export async function createProject({ commit, dispatch }, { project }) {
  try {
    if (project.details.state) {
      let tempFileContext = project.details.context.file;
      let tempFile = null;
      if (tempFileContext) {
        if ("image/jpeg" == tempFileContext.type) {
          tempFile = await dispatch("uploadImage", {
            image: tempFileContext,
          });
        } else {
          tempFile = await dispatch("uploadVideo", {
            video: tempFileContext,
          });
        }
        project.details.context.file = tempFile;
      }
      for (let i = 0; i < project.details.sections.length; i++) {
        let tempFile = project.details.sections[i].file;
        let img = null;
        if (tempFile) {
          if (tempFile.type.includes("image")) {
            img = await dispatch("uploadImage", {
              image: tempFile,
            });
          } else {
            img = await dispatch("uploadVideo", {
              video: tempFile,
            });
          }
          project.details.sections[i].file = img;
        }
      }
    }

    project.image = await dispatch("uploadImage", {
      image: project.image,
    });
    const projectRef = await addDoc(
      collection(fire.firebasebd, "projects"),
      project
    );
    Notify.create({
      message: "Le projet a bien été créer ! : " + projectRef.id,
      color: "positive",
    });
    commit("addProject", { projectRef });
    return projectRef;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite : " + e.message,
      color: "negative",
    });
  }
}
