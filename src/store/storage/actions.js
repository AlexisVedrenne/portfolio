import fire from "src/boot/FireBase";
import * as store from "firebase/storage";
import { Notify } from "quasar";
import "core-js/es/array";

export async function fetchImg({ commit }, { img }) {
  try {
    const storage = fire.storage;
    const storageRef = store.ref(storage);
    const folder = store.ref(storageRef, "images");
    const tempImg = store.ref(folder, img);
    const name = tempImg.fullPath;
    const url = store.getDownloadURL(store.ref(storage, name));
    commit("addImg", { img: url });
    return url;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite : " + e.message,
      color: "negative",
    });
  }
}

export async function fetchVieo({ commit }, { video }) {
  try {
    const storage = fire.storage;
    const storageRef = store.ref(storage);
    const folder = store.ref(storageRef, "videos");
    const tempVideo = store.ref(folder, video);
    const name = tempVideo.fullPath;
    const url = store.getDownloadURL(store.ref(storage, name));
    commit("addVideo", { video: url });
    console.log(url);
    return url;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite : " + e.message,
      color: "negative",
    });
  }
}
