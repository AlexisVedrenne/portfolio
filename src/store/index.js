import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import project from "./project";
import skill from "./skill";
import auth from "./auth";
import storage from "./storage";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      project,
      skill,
      auth,
      storage,
    },
  });

  return Store;
});
