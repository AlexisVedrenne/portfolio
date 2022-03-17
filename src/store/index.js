import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import project from "./project";

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
    },
  });

  return Store;
});
