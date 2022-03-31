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

export async function fetchAllProjects({ commit, dispatch }) {
  try {
    const res = await getDocs(collection(fire.firebasebd, "projects"));
    let projects = [];
    let skillTemp = [];
    let tmpProject = null;
    res.docs.forEach((project) => {
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
      message: "Une erreur s'est produite dans projet: " + e.message,
      color: "negative",
    });
  }
}

export async function fechtProject({ commit, dispatch }, { name }) {
  try {
    const q = await query(
      collection(fire.firebasebd, "projects"),
      where("name", "==", name)
    );
    const res = await getDocs(q);
    return res.docs[0].data();
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans projet: " + e.message,
      color: "negative",
    });
  }
}

export async function fetchAllProjectBySkill({ dispatch }, { skillName }) {
  try {
    const q = await query(
      collection(fire.firebasebd, "projects"),
      where("skills", "array-contains", skillName)
    );
    const res = await getDocs(q);
    let projects = [];
    let skillTemp = [];
    let tmpProject = null;
    res.docs.forEach((project) => {
      tmpProject = project.data();
      tmpProject.skills.forEach(async (skill) => {
        skillTemp.push(await dispatch("fetchSkill", { label: skill }));
      });
      tmpProject.skills = skillTemp;
      projects.push(tmpProject);
      skillTemp = [];
    });
    return projects;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans projet: " + e,
      color: "negative",
    });
  }
}

export async function createProject({ commit, dispatch }, { project }) {
  try {
    if (project.details.state) {
      let tempFileContext = project.details.context.file;
      let tempFileBaniere = project.details.baniere;
      let tempFile = null;
      tempFileBaniere = await dispatch("uploadImage", {
        image: tempFileBaniere,
      });
      console.log(tempFileBaniere);
      project.details.baniere = tempFileBaniere;
      if (tempFileContext) {
        if (tempFileContext.type.includes("image")) {
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
            project.details.sections[i].file = img;
            project.details.sections[i].fileType = tempFile.type;
          } else {
            img = await dispatch("uploadVideo", {
              video: tempFile,
            });
            project.details.sections[i].file = img;
            project.details.sections[i].fileType = tempFile.type;
          }
        }
      }
    }
    project.imageName = project.image.name;
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
      message: "Une erreur s'est produite dans projet: " + e.message,
      color: "negative",
    });
  }
}

export async function deleteProject({ commit, dispatch }, { name }) {
  try {
    const q = await query(
      collection(fire.firebasebd, "projects"),
      where("name", "==", name)
    );
    const res = await getDocs(q);
    const id = res.docs[0].ref.id;
    const proj = res.docs[0].data();
    await dispatch("deleteImage", { image: proj.imageName });
    await deleteDoc(doc(fire.firebasebd, "projects", id));
    Notify.create({
      message: "Le projet " + name + " a été supprimer !",
      color: "warning",
      textColor: "dark",
    });
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans projet: " + e.message,
      color: "negative",
    });
  }
}

export async function updateProject(
  { commit, dispatch },
  { project, lastName }
) {
  try {
    const q = await query(
      collection(fire.firebasebd, "projects"),
      where("name", "==", lastName)
    );
    const res = await getDocs(q);
    const id = res.docs[0].ref.id;
    if (project.details.state) {
      let tempFileContext = project.details.context.file;
      let tempFileBaniere = project.details.baniere;
      let tempFile = null;
      if ((typeof tempFileBaniere).includes("object") && tempFileBaniere) {
        tempFileBaniere = await dispatch("uploadImage", {
          image: tempFileBaniere,
        });
      }

      project.details.baniere = tempFileBaniere;
      if ((typeof tempFileContext).includes("object") && tempFileContext) {
        if (tempFileContext.type.includes("image")) {
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
        if ((typeof tempFile).includes("object") && tempFile) {
          if (tempFile.type.includes("image")) {
            img = await dispatch("uploadImage", {
              image: tempFile,
            });
            project.details.sections[i].file = img;
            project.details.sections[i].fileType = tempFile.type;
          } else {
            img = await dispatch("uploadVideo", {
              video: tempFile,
            });
            project.details.sections[i].file = img;
            project.details.sections[i].fileType = tempFile.type;
          }
        }
      }
    }
    await setDoc(doc(fire.firebasebd, "projects", id), project);
    Notify.create({
      message: "Le projet " + lastName + " a bien été modifié :",
      color: "info",
      textColor: "dark",
    });
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans projet: " + e.message,
      color: "negative",
    });
  }
}
