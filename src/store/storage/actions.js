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
      message: "Une erreur s'est produite dans storage : " + e.message,
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
    return url;
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans storage : " + e.message,
      color: "negative",
    });
  }
}

export async function uploadVideo({ commit, dispatch }, { video }) {
  try {
    const storage = fire.storage;
    const storageRef = store.ref(storage);
    const folder = store.ref(storageRef, "videos/" + video.name);
    const upload = await store.uploadBytes(folder, video);
    return dispatch("fetchVieo", { video: upload.ref.name });
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans storage : " + e.message,
      color: "negative",
    });
  }
}

export async function uploadImage({ commit, dispatch }, { image }) {
  try {
    const storage = fire.storage;
    const storageRef = store.ref(storage);
    const metaData = {
      type: image.type,
      size: image.size,
      lastModifiedDate: image.lastModifiedDate,
    };
    const folder = store.ref(storageRef, "images/" + image.name);
    const upload = await store.uploadBytes(folder, image, metaData);
    return dispatch("fetchImg", { img: upload.ref.name });
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans storage : " + e.message,
      color: "negative",
    });
  }
}

export async function deleteImage({ commit }, { image }) {
  try {
    const storage = fire.storage;
    const storageRef = store.ref(storage);
    const folder = store.ref(storageRef, "images/" + image);
    await store.deleteObject(folder);
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans storage : " + e.message,
      color: "negative",
    });
  }
}

export async function deleteVideo({ commit }, { video }) {
  try {
    const storage = fire.storage;
    const storageRef = store.ref(storage);
    const folder = store.ref(storageRef, "videos/" + video);
    await store.deleteObject(folder);
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans storage : " + e.message,
      color: "negative",
    });
  }
}

export async function fetchAllImages({ dispatch }) {
  try {
    const storage = fire.storage;
    const storageRef = store.ref(storage);
    const folder = store.ref(storageRef, "images/");
    const images = await store.listAll(folder);
    let items = images.items;
    let urls = [];
    for (let i = 0; i < items.length; i++) {
      urls.push(await dispatch("fetchImg", { img: items[i].name }));
    }
    return { images: images.items, urls: urls };
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans storage : " + e.message,
      color: "negative",
    });
  }
}

export async function fetchAllVideo({ dispatch }) {
  try {
    const storage = fire.storage;
    const storageRef = store.ref(storage);
    const folder = store.ref(storageRef, "videos/");
    const videos = await store.listAll(folder);
    let items = videos.items;
    let urls = [];
    for (let i = 0; i < items.length; i++) {
      urls.push(await dispatch("fetchVieo", { video: items[i].name }));
    }
    return { videos: videos.items, urls: urls };
  } catch (e) {
    Notify.create({
      message: "Une erreur s'est produite dans storage : " + e.message,
      color: "negative",
    });
  }
}
